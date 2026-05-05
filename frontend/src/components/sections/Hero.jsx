import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { HERO_IMAGE } from '../../mock';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 slow-zoom"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/85 via-[#0B1F3A]/55 to-[#0B1F3A]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl text-white fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[11px] tracking-[0.2em] uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F39019]" />
            Custom Home Builders
          </div>
          <h1 className="font-[Poppins] text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            A Place to <span className="text-[#F39019]">Call Home</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
            Boutique, custom-built homes crafted with honest pricing, timeless design, and genuine craftsmanship — right here in South Australia.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/projects" className="btn-primary rounded-md px-6 py-3.5 font-semibold inline-flex items-center gap-2">
              Explore Homes <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/process" className="rounded-md px-6 py-3.5 font-semibold inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 transition-colors">
              <Play className="h-4 w-4" /> Our Process
            </Link>
          </div>

          {/* <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: '200+', l: 'Homes Built' },
              { n: '25 yr', l: 'Guarantee' },
              { n: '100%', l: 'On-Time' },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-[#F39019] pl-4">
                <div className="text-3xl font-bold text-white">{s.n}</div>
                <div className="text-xs tracking-[0.15em] uppercase text-white/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-[11px] tracking-[0.3em] uppercase animate-pulse">
        Scroll to explore
      </div>
    </section>
  );
}
