import React from 'react';
import { PROCESS } from '../../mock';

export default function Process({ hideHeader = false }) {
  return (
    <section id="process" className="py-24 bg-[#0B1F3A] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F39019]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F39019]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        {!hideHeader && (
          <div className="text-center mb-16">
            <div className="title-accent mb-4 mx-auto block" />
            <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">How It Works</p>
            <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold leading-tight max-w-2xl mx-auto">
              Your journey, in five honest steps.
            </h2>
          </div>
        )}

        <div className="grid md:grid-cols-5 gap-6 relative">
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#F39019]/30 via-[#F39019] to-[#F39019]/30" />
          {PROCESS.map((p) => (
            <div key={p.step} className="relative text-center group">
              <div className="relative mx-auto h-20 w-20 rounded-full bg-[#0B1F3A] border-2 border-[#F39019] grid place-items-center mb-5 group-hover:bg-[#F39019] transition-colors duration-300">
                <span className="font-[Poppins] font-bold text-xl text-[#F39019] group-hover:text-[#0B1F3A] transition-colors">{p.step}</span>
              </div>
              <h3 className="font-[Poppins] text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
