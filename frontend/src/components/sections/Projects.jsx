import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Sofa, Car, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../mock';

const TAGS = ['All', 'Custom Home', 'House & Land', 'Luxury', 'New Build'];

export default function Projects({ preview = false, hideHeader = false }) {
  const [filter, setFilter] = useState('All');
  const all = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tag === filter);
  const list = preview ? all.slice(0, 3) : all;

  return (
    <section id="projects" className="py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6">
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="title-accent mb-4" />
              <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">Our Projects</p>
              <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold text-[#0B1F3A] leading-tight max-w-2xl">
                A portfolio of homes we’re proud of.
              </h2>
            </div>

            {preview ? (
              <Link to="/projects" className="btn-outline rounded-md px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 self-start">
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

        {hideHeader && !preview && (
          // <div className="flex flex-wrap gap-2 mb-10">
          //   {TAGS.map((t) => (
          //     <button
          //       key={t}
          //       onClick={() => setFilter(t)}
          //       className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
          //         filter === t
          //           ? 'bg-[#0B1F3A] text-white'
          //           : 'bg-white text-[#0B1F3A] border border-slate-200 hover:border-[#0B1F3A]'
          //       }`}
          //     >
          //       {t}
          //     </button>
          //   ))}
          // </div>
          <></>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {list.map((p) => (
            <article key={p.id} className="project-card bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <div className="relative h-60 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                {/* <div className="absolute top-4 left-4 bg-[#F39019] text-[#0B1F3A] text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                  {p.tag}
                </div> */}
                {/* <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur text-[#0B1F3A] text-sm font-bold px-3 py-1.5 rounded-md">
                  {p.price}
                </div> */}
              </div>
              {/* <div className="p-6">
                <h3 className="font-[Poppins] text-xl font-semibold text-[#0B1F3A]">{p.name}</h3>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </div>
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-100 text-slate-600 text-sm">
                  <div className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-[#F39019]" /> {p.beds}</div>
                  <div className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-[#F39019]" /> {p.baths}</div>
                  <div className="flex items-center gap-1.5"><Sofa className="h-4 w-4 text-[#F39019]" /> {p.living}</div>
                  <div className="flex items-center gap-1.5"><Car className="h-4 w-4 text-[#F39019]" /> {p.garage}</div>
                </div>
                <Link to="/contact" className="mt-6 w-full text-sm font-semibold text-[#0B1F3A] hover:text-[#F39019] inline-flex items-center justify-center gap-2 py-2 border-t border-slate-100">
                  Enquire About This Home <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
