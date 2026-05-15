import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const ICONS = [ShieldCheck];

export default function WhyUs({ preview = false }) {
  return (
  <section id="why" className="py-24 bg-[#FAFAF7]">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Header + Button */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
      
      <div>
        <div className="title-accent mb-4" />

        <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
          Why Choose NEST
        </p>

        <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold text-[#0B1F3A] leading-tight max-w-4xl">
          Homes built on honesty, crafted with care.
        </h2>
      </div>

      {preview && (
        <Link
          to="/about"
          className="btn-outline rounded-md px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 self-start"
        >
          Read Our Story <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        {
          title: "Custom-designed premium homes",
          desc: "Every home is uniquely crafted to reflect your vision and lifestyle.",
        },
        {
          title: "Tailored solutions to suit your lifestyle",
          desc: "We design spaces that align perfectly with how you live and grow.",
        },
        {
          title: "High-quality workmanship",
          desc: "Built with precision using top-grade materials and expert craftsmanship.",
        },
        {
          title: "Transparent communication",
          desc: "Clear updates and honest discussions throughout every stage.",
        },
        {
          title: "End-to-end project management",
          desc: "From planning to handover, we handle everything seamlessly.",
        },
        {
          title: "Luxury finishes & thoughtful design",
          desc: "Elegant details and refined finishes that elevate everyday living.",
        },
        {
          title: "Commitment to excellence in every detail",
          desc: "We focus on perfection, ensuring nothing is overlooked.",
        },
      ].map((item, i) => {
        const Icon = ICONS[i % ICONS.length];

        return (
          <div
            key={item.title}
            className="flex gap-4 p-5 bg-white rounded-lg shadow-sm border border-slate-100 hover:border-[#F39019]/40 hover:shadow-md transition-all duration-300"
          >
            <div className="h-11 w-11 rounded-md bg-[#F39019]/10 grid place-items-center shrink-0">
              <Icon className="h-5 w-5 text-[#F39019]" />
            </div>

            <div>
              <div className="font-semibold text-[#0B1F3A] mb-1">
                {item.title}
              </div>

              <div className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
  );
}
