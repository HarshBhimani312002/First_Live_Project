import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";

const TAGS = ["All", "Custom Home", "House & Land", "Luxury", "New Build"];

export default function Projects({ preview = false, hideHeader = false }) {
  const [filter, setFilter] = useState("All");
  const [openImage, setOpenImage] = useState(null);
  const [projects, setProjects] = useState([]);

  const galleryRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    fetch("/.netlify/functions/getProjects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  const isProjectsPage = false;

  const list = projects;

  const selectedProject = null;

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
                A portfolio of homes we're proud of.
              </h2>
            </div>

            {preview ? (
              <a
                href="/gallery"
                className="btn-outline rounded-md px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 self-start"
              >
                View Gallery <ArrowUpRight className="h-4 w-4" />
              </a>
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

        <div className="relative overflow-hidden">
          <button
            onClick={() =>
              projectsRef.current.scrollBy({
                left: -(300 + 28),
                behavior: "smooth",
              })
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-200 w-12 h-12 rounded-full flex items-center justify-center hover:bg-slate-100 transition"
          >
            ❮
          </button>

          <button
            onClick={() =>
              projectsRef.current.scrollBy({
                left: 300 + 28,
                behavior: "smooth",
              })
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-200 w-12 h-12 rounded-full flex items-center justify-center hover:bg-slate-100 transition"
          >
            ❯
          </button>

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
                className="snap-start flex-shrink-0 w-[300px] project-card bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.coverImage}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-[Poppins] text-xl font-semibold text-[#0B1F3A]">
                    {p.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Click "View Gallery" to browse project galleries
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div ref={galleryRef} className="mt-24"></div>
        )}

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