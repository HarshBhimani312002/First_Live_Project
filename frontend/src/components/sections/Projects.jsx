// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Bed, Bath, Sofa, Car, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
// import { PROJECTS } from '../../mock';

// const TAGS = ['All', 'Custom Home', 'House & Land', 'Luxury', 'New Build'];

// export default function Projects({ preview = false, hideHeader = false }) {
//   const [filter, setFilter] = useState('All');
//   const all = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tag === filter);
//   const list = preview ? all.slice(0, 3) : all;

//   return (
//     <section id="projects" className="py-24 bg-[#FAFAF7]">
//       <div className="max-w-7xl mx-auto px-6">
//         {!hideHeader && (
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
//             <div>
//               <div className="title-accent mb-4" />
//               <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">Our Projects</p>
//               <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold text-[#0B1F3A] leading-tight max-w-2xl">
//                 A portfolio of homes we’re proud of.
//               </h2>
//             </div>

//             {preview ? (
//               <Link to="/projects" className="btn-outline rounded-md px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 self-start">
//                 View All Projects <ArrowUpRight className="h-4 w-4" />
//               </Link>
//             ) : (
//               <div className="flex flex-wrap gap-2">
//                 {TAGS.map((t) => (
//                   <button
//                     key={t}
//                     onClick={() => setFilter(t)}
//                     className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
//                       filter === t
//                         ? 'bg-[#0B1F3A] text-white'
//                         : 'bg-white text-[#0B1F3A] border border-slate-200 hover:border-[#0B1F3A]'
//                     }`}
//                   >
//                     {t}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {hideHeader && !preview && (

//           <></>
//         )}

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
//           {list.map((p) => (
//             <article key={p.id} className="project-card bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
//               <div className="relative h-60 overflow-hidden">

//               </div>

//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect, useRef } from 'react';
import {
  Link,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';

import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../mock';

const TAGS = ['All', 'Custom Home', 'House & Land', 'Luxury', 'New Build'];

export default function Projects({ preview = false, hideHeader = false }) {
  const [filter, setFilter] = useState('All');

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const galleryRef = useRef(null);
  const projectsRef = useRef(null);

  // only clickable on /projects page
  const isProjectsPage =
    location.pathname === '/projects' ||
    location.pathname.includes('/projects/');

  const all =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tag === filter);

  // 3 project groups
  const groupedProjects = [
    {
      id: 1,
      name: 'HUGH Ave Parahills',
      image: all[0]?.image,
      photos: [all[1], all[2], all[3], all[4], all[5], all[6], all[7], all[8],  all[9]].filter(Boolean),
    },
    {
      id: 2,
      name: 'LORAL St. Parahills',
      image: all[10]?.image,
      photos: [all[11], all[12], all[13], all[14], all[15], all[16], all[17], all[18], all[19],].filter(Boolean),
    },
    {
      id: 3,
      name: 'Wendy Ave Valley',
      image: all[20]?.image,
      photos: [all[21], all[22], all[23], all[24], all[25], all[26], all[27], all[28], all[29]].filter(Boolean),
    },
  ];

  const list = preview ? groupedProjects.slice(0, 3) : groupedProjects;

  // selected project from URL
  const selectedProject = id
    ? groupedProjects.find((p) => p.id === Number(id))
    : null;

  // scroll to gallery ONLY on card click
  useEffect(() => {
    const shouldScroll = sessionStorage.getItem('scrollToGallery');

    if (
      shouldScroll === 'true' &&
      selectedProject &&
      galleryRef.current
    ) {
      setTimeout(() => {
        galleryRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        sessionStorage.removeItem('scrollToGallery');
      }, 100);
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6">

        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

            <div>
              <div className="title-accent mb-4" />

              <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
                Our Projects
              </p>

              <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold text-[#0B1F3A] leading-tight max-w-2xl">
                A portfolio of homes we’re proud of.
              </h2>
            </div>

            {preview ? (
              <Link
                to="/projects"
                className="btn-outline rounded-md px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 self-start"
              >
                View All Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : (
              <div className="flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      filter === t
                        ? 'bg-[#0B1F3A] text-white'
                        : 'bg-white text-[#0B1F3A] border border-slate-200 hover:border-[#0B1F3A]'
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
        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {list.map((p) => (
            <article
              key={p.id}
              onClick={() => {
                if (!isProjectsPage) return;

                sessionStorage.setItem('scrollToGallery', 'true');

                navigate(`/projects/${p.id}`);
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
                   Click “View All Projects” to browse project galleries
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Gallery Section */}
        {selectedProject && (
          <div
            ref={galleryRef}
            className="mt-24 scroll-mt-32"
          >

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
                  navigate('/projects');

                  setTimeout(() => {
                    projectsRef.current?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
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
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={img.image}
                      alt=""
                      className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
