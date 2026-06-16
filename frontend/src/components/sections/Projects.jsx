import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
// import { PROJECTS } from "../../mock";

const TAGS = ["All", "Custom Home", "House & Land", "Luxury", "New Build"];

export default function Projects({ preview = false, hideHeader = false }) {
  const [filter, setFilter] = useState("All");
  const [openImage, setOpenImage] = useState(null);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const galleryRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    fetch("/.netlify/functions/getProjects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // only clickable on /projects page
  const isProjectsPage =
    location.pathname === "/Gallery" || location.pathname.includes("/Gallery/");

  const list = projects;

  // selected project from URL
  const selectedProject = id ? projects.find((p) => p.id === Number(id)) : null;

  // scroll to gallery ONLY on card click
  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToGallery");

    if (shouldScroll === "true" && selectedProject && galleryRef.current) {
      setTimeout(() => {
        galleryRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        sessionStorage.removeItem("scrollToGallery");
      }, 100);
    }
  }, [selectedProject]);

  // BODY SCROLL LOCK
  useEffect(() => {
    if (openImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openImage]);

  // ESC CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpenImage(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6">
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="title-accent mb-4" />

              <p className="text-lg md:text-lg text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
                Our Gallery
              </p>

              <h2 className="font-[Poppins] text-2xl md:text-2xl font-semibold text-[#0B1F3A] leading-tight max-w-2xl">
                A portfolio of homes we’re proud of.
              </h2>
            </div>

            {preview ? (
              <Link
                to="/Gallery"
                className="btn-outline rounded-md px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 self-start"
              >
                View Gallery <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : (
              <div className="flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      filter === t
                        ? "bg-[#0B1F3A] text-white"
                        : "bg-white text-[#0B1F3A] border border-slate-200 hover:border-[#0B1F3A]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {hideHeader && !preview && <></>}
        <div className="relative overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={() => {
              projectsRef.current.scrollBy({
                left: -(300 + 28), // card width + gap
                behavior: "smooth",
              });
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-200 w-12 h-12 rounded-full flex items-center justify-center hover:bg-slate-100 transition"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => {
              projectsRef.current.scrollBy({
                left: 300 + 28, // exact one full card
                behavior: "smooth",
              });
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-200 w-12 h-12 rounded-full flex items-center justify-center hover:bg-slate-100 transition"
          >
            ❯
          </button>

          {/* Cards Container */}
          <div
            ref={projectsRef}
            className="flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {list.map((p) => (
              <article
                key={p.id}
                onClick={() => {
                  if (!isProjectsPage) return;

                  sessionStorage.setItem("scrollToGallery", "true");
                  navigate(`/Gallery/${p.id}`);
                }}
                className={`snap-start flex-shrink-0 w-[300px] project-card bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-lg transition-all duration-300 ${
                  isProjectsPage ? "cursor-pointer" : "pointer-events-none"
                }`}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.coverImage}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-[Poppins] text-xl font-semibold text-[#0B1F3A]">
                    {p.name}
                  </h3>

                  {isProjectsPage ? (
                    <p className="text-sm text-slate-500 mt-2">
                      Click to explore gallery
                    </p>
                  ) : (
                    <p className="text-sm text-slate-500 mt-2">
                      Click “View Gallery” to browse project galleries
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Hide Scrollbar */}
          <style>
            {`
      div::-webkit-scrollbar {
        display: none;
      }
    `}
          </style>
        </div>

        {/* Gallery Section */}
        {selectedProject && (
          <div ref={galleryRef} className="mt-24 scroll-mt-32">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
              <div>
                <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
                  Project Gallery
                </p>

                <h2 className="text-4xl font-bold text-[#0B1F3A]">
                  {selectedProject.name}
                </h2>
              </div>

              <button
                onClick={() => {
                  navigate("/Gallery");

                  setTimeout(() => {
                    projectsRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }, 100);
                }}
                className="inline-flex items-center justify-center bg-white border border-slate-200 hover:border-[#0B1F3A] px-5 py-3 rounded-xl text-sm font-semibold text-[#0B1F3A] transition-all shadow-sm w-fit"
              >
                Close Gallery
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {selectedProject.gallery.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setOpenImage(img)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                      loading="eager"
                      fetchpriority="high"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full Screen Image Modal */}
        {openImage && (
          <div className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-6">
            <button
              onClick={() => setOpenImage(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X className="h-10 w-10" />
            </button>

            <img
              src={openImage}
              alt=""
              className="max-w-full max-h-full object-contain rounded-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
