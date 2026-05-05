import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../mock';

export default function Testimonials() {
  return (
    <></>
    // <section className="py-24 bg-white">
    //   <div className="max-w-7xl mx-auto px-6">
    //     <div className="text-center mb-14">
    //       <div className="title-accent mb-4 mx-auto block" />
    //       <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">Trusted by Homeowners</p>
    //       <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold text-[#0B1F3A] leading-tight max-w-2xl mx-auto">
    //         Kind words from real families.
    //       </h2>
    //     </div>

    //     <div className="grid md:grid-cols-3 gap-7">
    //       {TESTIMONIALS.map((t) => (
    //         <div key={t.name} className="relative p-8 rounded-xl bg-[#FAFAF7] border border-slate-100 hover:shadow-lg transition-shadow duration-300">
    //           <Quote className="absolute top-6 right-6 h-8 w-8 text-[#F39019]/20" />
    //           <div className="flex gap-1 mb-4">
    //             {[...Array(5)].map((_, i) => (
    //               <Star key={i} className="h-4 w-4 fill-[#F39019] text-[#F39019]" />
    //             ))}
    //           </div>
    //           <p className="text-slate-700 leading-relaxed italic">“{t.quote}”</p>
    //           <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-4">
    //             <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover border-2 border-[#F39019]" />
    //             <div>
    //               <div className="font-semibold text-[#0B1F3A]">{t.name}</div>
    //               <div className="text-xs text-slate-500">{t.role}</div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}
