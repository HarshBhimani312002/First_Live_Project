import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";

export default function Admin() {
  const [name, setName] = useState("");
  const [cover, setCover] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);
  const [removedImages, setRemovedImages] = useState([]);

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
  const compressImage = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    return await imageCompression(file, options);
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
    if (editingId) {
      try {
        setLoading(true);

        let coverImage = currentProject.coverImage;
        const galleryUrls = [];

        for (let i = 0; i < gallery.length; i++) {
          const image = gallery[i];

          if (typeof image === "string") {
            galleryUrls.push(image);
            continue;
          }

          const compressedImage = await compressImage(image);
          const imageBase64 = await fileToBase64(compressedImage);

          const upload = await fetch("/.netlify/functions/uploadImage", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fileName: `${currentProject.name}/${Date.now()}-${image.name}`,
              content: imageBase64,
            }),
          });

          const imageData = await upload.json();

          galleryUrls.push(
            `/.netlify/functions/getImage?file=${imageData.fileName}`,
          );
        }

        // નવી image પસંદ કરી હોય તો upload
        if (cover && typeof cover !== "string") {
          const compressedCover = await compressImage(cover);
          const coverBase64 = await fileToBase64(compressedCover);

          const coverUpload = await fetch("/.netlify/functions/uploadImage", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fileName: `${currentProject.name}/cover-${Date.now()}-${cover.name}`,
              content: coverBase64,
            }),
          });

          const coverData = await coverUpload.json();

          coverImage = `/.netlify/functions/getImage?file=${coverData.fileName}`;
        }

        console.log("GALLERY BEFORE SAVE:", gallery);
        const updatedProject = {
          ...currentProject,
          name,
          coverImage,
          gallery: galleryUrls,
          removedImages,
        };

        console.log("UPDATED PROJECT:", updatedProject);

        const response = await fetch("/.netlify/functions/edit-project", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProject),
        });

        const result = await response.json();

        if (result.success) {
          alert("Project Updated Successfully 🎉");

          setEditingId(null);
          setCurrentProject(null);
          setName("");
          setCover(null);
          setGallery([]);
          setRemovedImages([]);
          setCover(null);

          loadProjects();
        }
      } catch (err) {
        console.error(err);
        alert("Update Failed");
      } finally {
        setLoading(false);
      }

      return;
    }
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
      const projectId = Date.now();

      const folderName = name.trim().replace(/\s+/g, "-");

      // Upload Cover Image

      // Upload Cover Image
      const compressedCover = await compressImage(cover);
      const coverBase64 = await fileToBase64(compressedCover);

      const coverUpload = await fetch("/.netlify/functions/uploadImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: `${folderName}/cover-${Date.now()}-${cover.name}`,
          content: coverBase64,
        }),
      });

      const coverData = await coverUpload.json();

      const coverImage = `/.netlify/functions/getImage?file=${coverData.fileName}`;

      // Upload Gallery Images
      const galleryUrls = [];

      for (let i = 0; i < gallery.length; i++) {
        const image = gallery[i];
        const compressedImage = await compressImage(image);
        const imageBase64 = await fileToBase64(compressedImage);

        const upload = await fetch("/.netlify/functions/uploadImage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileName: `${folderName}/${Date.now()}-${image.name}`,
            content: imageBase64,
          }),
        });

        const imageData = await upload.json();

        galleryUrls.push(
          `/.netlify/functions/getImage?file=${imageData.fileName}`,
        );
      }

      const project = {
        id: projectId,
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
          alert("Project Added Successfully 🎉");
          loadProjects();
        }

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
  const editProject = (project) => {
    console.log("EDIT PROJECT:", project);

    setEditingId(project.id);
    setCurrentProject(project);

    setName(project.name);
    setCover(project.coverImage);
    setGallery([...project.gallery]);
    setRemovedImages([]);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        alert("Project Deleted Successfully 🗑️");

        // જો હાલમાં edit થતો project delete થયો હોય
        if (editingId === id) {
          setEditingId(null);
          setCurrentProject(null);
          setName("");
          setCover(null);
          setGallery([]);
          setRemovedImages([]);
        }

        loadProjects();
      }
    } catch (err) {
      console.error(err);
      alert("Delete Failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <p className="text-[#F39019] uppercase tracking-[0.2em] text-sm font-semibold">
              Nest Homes
            </p>

            <h1 className="text-4xl font-bold text-[#0B1F3A] mt-2">
              {editingId ? "Edit Project" : "Add New Project"}
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
            onChange={(e) => {
              setCover(e.target.files[0]);
            }}
            className="mb-4"
          />

          {cover && (
            <div className="w-64 border rounded-xl overflow-hidden">
              <img
                src={
                  typeof cover === "string" ? cover : URL.createObjectURL(cover)
                }
                alt=""
                className="w-full h-48 object-cover"
              />
            </div>
          )}
        </div>

        {/* {cover image} */}
        <div className="mb-10">
          <label className="block mb-3 font-semibold text-[#0B1F3A]">
            Gallery Images
          </label>

          <input
            key={editingId || "new"}
            type="file"
            multiple
            onChange={(e) => {
              const newFiles = Array.from(e.target.files);
              setGallery((prev) => [...prev, ...newFiles]);

              e.target.value = "";
            }}
            className="mb-6"
          />

          {gallery.length > 0 && (
            <div className="grid md:grid-cols-3 gap-5">
              {gallery.map((file, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-2xl overflow-hidden shadow-sm"
                >
                  {/* Save Button */}

                  <img
                    src={
                      typeof file === "string"
                        ? file
                        : file instanceof File
                          ? URL.createObjectURL(file)
                          : ""
                    }
                    alt=""
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-3">
                    <p className="text-sm truncate">
                      {typeof file === "string" ? "Gallery Image" : file?.name}
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        const confirmDelete =
                          window.confirm("Remove this image?");

                        if (!confirmDelete) return;

                        if (typeof gallery[index] === "string") {
                          setRemovedImages((prev) => [...prev, gallery[index]]);
                        }

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

        {/* Gallery Images */}

        {/* Save Button */}
        <button
          onClick={saveProject}
          disabled={loading}
          className="w-full bg-[#0B1F3A] hover:bg-[#16345c] text-white py-4 rounded-2xl text-lg font-semibold transition"
        >
          {loading
            ? "Uploading..."
            : editingId
              ? "Update Project"
              : "Save Project"}
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
                    {/* <pre>{JSON.stringify(project.gallery, null, 2)}</pre> */}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => editProject(project)}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProject(project.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
