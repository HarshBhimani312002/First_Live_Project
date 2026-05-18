import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  MapPinned,
  BriefcaseBusiness,
  Hammer,
  Map,
  Building2,
  Sofa,
  HardHat,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "../../mock";

const iconMap = {
  Home,
  MapPinned,
  BriefcaseBusiness,
  Hammer,
  Map,
  Building2,
  Sofa,
  HardHat,
};

export default function Services({ preview = false, hideHeader = false }) {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="title-accent mb-4" />

              <p className="text-lg md:text-lg text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
                What We Do
              </p>

              <h2 className="font-[Poppins] text-2xl md:text-2xl font-semibold text-[#0B1F3A] leading-tight max-w-2xl">
                Services designed around your journey home.
              </h2>
            </div>

            <Link
              to={preview ? "/services" : "/contact"}
              className="btn-outline rounded-md px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 self-start"
            >
              {preview ? "View All Services" : "Enquire Now"}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, idx) => {
            const Icon = iconMap[svc.icon] || Home;

            return (
              <div
                key={svc.title}
                className="group relative p-8 rounded-xl border border-slate-200 bg-white hover:bg-[#0B1F3A] hover:border-[#0B1F3A] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-slate-100 font-[Poppins] text-5xl font-bold group-hover:text-white/10 transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="h-12 w-12 rounded-md bg-[#F39019]/10 group-hover:bg-[#F39019] grid place-items-center mb-5 transition-colors">
                  <Icon className="h-5 w-5 text-[#F39019] group-hover:text-[#0B1F3A]" />
                </div>

                <h3 className="font-[Poppins] text-xl font-semibold text-[#0B1F3A] group-hover:text-white transition-colors relative z-10">
                  {svc.title}
                </h3>

                {/* Description only on Services page */}
                {!preview && (
                  <p className="text-sm text-slate-600 group-hover:text-white/80 leading-relaxed transition-colors relative z-10 mt-2">
                    {svc.desc}
                  </p>
                )}

                <div className="mt-5 text-xs font-semibold tracking-widest uppercase text-[#F39019] inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* <ArrowUpRight className="h-3.5 w-3.5" /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}