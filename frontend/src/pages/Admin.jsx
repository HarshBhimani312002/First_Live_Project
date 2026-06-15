import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [name, setName] = useState("");
  const [cover, setCover] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (token !== "admin-authenticated") {
      navigate("/login");
    }
  }, []);
  const fileToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(reader.result.split(",")[1]);
      };
    });
  };
  const loadProjects = async () => {
    try {
      const res = await fetch("/.netlify/functions/getProjects");

      const data = await res.json();

      setProjects(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadProjects();
  }, []);
  const saveProject = async () => {
    try {
      if (!name) {
        alert("Please enter project name");
        return;
      }

      if (!cover) {
        alert("Please select cover image");
        return;
      }

      setLoading(true);

      // Upload Cover Image
      const coverBase64 = await fileToBase64(cover);

      const coverUpload = await fetch("/.netlify/functions/uploadImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: `${Date.now()}-${cover.name}`,
          content: coverBase64,
        }),
      });

      const coverData = await coverUpload.json();

      const coverImage = `/.netlify/functions/getImage?file=${coverData.fileName}`;

      // Upload Gallery Images
      const galleryUrls = [];

      for (const image of gallery) {
        const imageBase64 = await fileToBase64(image);

        const upload = await fetch("/.netlify/functions/uploadImage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileName: `${Date.now()}-${image.name}`,
            content: imageBase64,
          }),
        });

        const imageData = await upload.json();

        galleryUrls.push(
          `/.netlify/functions/getImage?file=${imageData.fileName}`,
        );
      }

      const project = {
        id: Date.now(),
        name,
        coverImage,
        gallery: galleryUrls,
      };

      const response = await fetch("/.netlify/functions/addProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });

      const result = await response.json();

      if (result.success) {
        if (result.success) {
          alert("Project Deleted Successfully");
          loadProjects();
        }

        alert("Project Added Successfully 🎉");

        setName("");
        setCover(null);
        setGallery([]);
      }
    } catch (err) {
      console.error(err);
      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };
  const deleteProject = async (id) => {
    const confirmDelete = window.confirm("Delete this project?");

    if (!confirmDelete) return;

    try {
      const response = await fetch("/.netlify/functions/deleteProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const result = await response.json();

      if (result.success) {
        loadProjects();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <p className="text-[#F39019] uppercase tracking-[0.2em] text-sm font-semibold">
              Nest Homes CMS
            </p>

            <h1 className="text-4xl font-bold text-[#0B1F3A] mt-2">
              Add New Project
            </h1>

            <p className="mt-2 text-gray-500">
              Total Projects: {projects.length}
            </p>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("adminToken");
              navigate("/login");
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl font-semibold"
          >
            Logout
          </button>
        </div>

        {/* Project Name */}
        <div className="mb-8">
          <label className="block mb-3 font-semibold text-[#0B1F3A]">
            Project Name
          </label>

          <input
            type="text"
            placeholder="Enter Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F39019]"
          />
        </div>

        {/* Cover Image */}
        <div className="mb-10">
          <label className="block mb-3 font-semibold text-[#0B1F3A]">
            Cover Image
          </label>

          <input
            type="file"
            onChange={(e) => setCover(e.target.files[0])}
            className="mb-4"
          />

          {cover && (
            <img
              src={URL.createObjectURL(cover)}
              alt="Cover Preview"
              className="w-full md:w-[500px] h-72 object-cover rounded-2xl border"
            />
          )}
        </div>

        {/* Gallery Images */}
        <div className="mb-10">
          <label className="block mb-3 font-semibold text-[#0B1F3A]">
            Gallery Images
          </label>

          <input
            type="file"
            multiple
            onChange={(e) => setGallery(Array.from(e.target.files))}
            className="mb-6"
          />

          {gallery.length > 0 && (
            <div className="grid md:grid-cols-3 gap-5">
              {gallery.map((file, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-2xl overflow-hidden shadow-sm"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-3">
                    <p className="text-sm truncate">{file.name}</p>

                    <button
                      type="button"
                      onClick={() => {
                        const updated = [...gallery];
                        updated.splice(index, 1);
                        setGallery(updated);
                      }}
                      className="mt-2 text-red-500 text-sm font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Save Button */}
        <button
          onClick={saveProject}
          disabled={loading}
          className="w-full bg-[#0B1F3A] hover:bg-[#16345c] text-white py-4 rounded-2xl text-lg font-semibold transition"
        >
          {loading ? "Uploading..." : "Save Project"}
        </button>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
            Existing Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border rounded-2xl overflow-hidden shadow-sm"
              >
                {project.coverImage && (
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-4">
                  <h3 className="font-bold text-lg text-[#0B1F3A]">
                    {project.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">ID: {project.id}</p>

                  <p className="text-sm text-gray-500 mt-2">
                    Images: {project.gallery?.length || 0}
                  </p>

                  <button
                    onClick={() => deleteProject(project.id)}
                    className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                  >
                    Delete Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
