import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

import { ArrowUpRight, X } from "lucide-react";
import { PROJECTS } from "../../mock";

const TAGS = ["All", "Custom Home", "House & Land", "Luxury", "New Build"];

export default function Projects({ preview = false, hideHeader = false }) {
  const [filter, setFilter] = useState("All");
  const [openImage, setOpenImage] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const galleryRef = useRef(null);
  const projectsRef = useRef(null);

  // only clickable on /projects page
  const isProjectsPage =
    location.pathname === "/Gallery" || location.pathname.includes("/Gallery/");

  const all =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  // 5 project groups
  const groupedProjects = [
    {
      id: 1,
      name: "Hugh",
      image: all[0]?.image,
      photos: [
        all[1],
        all[2],
        all[3],
        all[4],
        all[5],
        all[6],
        all[7],
        all[8],
        all[9],
        all[10],
        all[11],
        all[12],
      ].filter(Boolean),
    },
    {
      id: 2,
      name: "Loral",
      image: all[13]?.image,
      photos: [
        all[14],
        all[15],
        all[16],
        all[17],
        all[18],
        all[19],
        all[20],
        all[21],
        all[22],
        all[23],
      ].filter(Boolean),
    },
    {
      id: 3,
      name: "Wendy",
      image: all[24]?.image,
      photos: [
        all[25],
        all[26],
        all[27],
        all[28],
        all[29],
        all[30],
        all[31],
        all[32],
        all[33],
        all[34],
        all[35],
      ].filter(Boolean),
    },
    {
      id: 4,
      name: "Coondoo",
      image: all[36]?.image,
      photos: [
        all[37],
        all[38],
        all[39],
        all[40],
        all[41],
        all[42],
        all[43],
        all[44],
        all[45],
        all[46],
        all[47],
      ].filter(Boolean),
    },
    {
      id: 5,
      name: "Macdonnell",
      image: all[48]?.image,
      photos: [
        all[49],
        all[50],
        all[51],
        all[52],
        all[53],
        all[54],
        all[55],
        all[56],
        all[57],
        all[58],
      ].filter(Boolean),
    },
  ];

  // const list = preview ? groupedProjects.slice(0, 3) : groupedProjects;
  const list = groupedProjects;

  // selected project from URL
  const selectedProject = id
    ? groupedProjects.find((p) => p.id === Number(id))
    : null;

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

        {/* Project Cards */}
        {/* <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7"
        >
          {list.map((p) => (
            <article
              key={p.id}
              onClick={() => {
                if (!isProjectsPage) return;

                sessionStorage.setItem('scrollToGallery', 'true');

                navigate(`/Gallery/${p.id}`);
              }}
              className={`project-card bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-lg transition-all duration-300 ${
                isProjectsPage
                  ? 'cursor-pointer'
                  : 'pointer-events-none'
              }`}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                   loading="lazy"
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
        </div> */}
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
            className="flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory"
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
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
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
              {selectedProject.photos.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setOpenImage(img.image)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="overflow-hidden">
                    <img
                      src={img.image}
                      alt=""
                      className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full Screen Image Modal */}
        {openImage && (
          <div className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-6 overflow-hidden">
            <button
              onClick={() => setOpenImage(null)}
              className="absolute top-6 right-6 text-white hover:text-[#F39019] transition-colors z-10"
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
