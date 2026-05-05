import React from 'react';
import PageHero from '../components/PageHero';
import Process from '../components/sections/Process';
import ContactCTA from '../components/sections/ContactCTA';
import { PROCESS } from '../mock';

export default function ProcessPage() {
  return (
    <>
      <PageHero
        breadcrumb="Process"
        title="How we build, step by step."
        subtitle="A transparent process with no surprises — so you always know what’s next on the road to your new home."
      />

      <Process hideHeader />

      {/* <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {PROCESS.map((p, idx) => (
              <div key={p.step} className="flex gap-6 p-7 bg-white rounded-xl border border-slate-100 hover:border-[#F39019]/50 hover:shadow-md transition-all">
                <div className="shrink-0 h-14 w-14 rounded-full bg-[#0B1F3A] grid place-items-center text-[#F39019] font-[Poppins] font-bold">{p.step}</div>
                <div>
                  <h3 className="font-[Poppins] text-xl font-semibold text-[#0B1F3A] mb-1">{idx + 1}. {p.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <ContactCTA />
    </>
  );
}
