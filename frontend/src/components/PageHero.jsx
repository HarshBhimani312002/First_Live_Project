import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-40 pb-20 bg-[#0B1F3A] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F39019]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F39019]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/60 mb-5">
          <Link to="/" className="hover:text-[#F39019]">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#F39019]">{breadcrumb}</span>
        </div>
        <div className="title-accent mb-4" />
        <h1 className="font-[Poppins] text-5xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-white/80 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
