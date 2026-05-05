import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Sparkles, Wrench, ArrowUpRight } from 'lucide-react';
import { WHY_US, ABOUT_IMAGE } from '../../mock';
import img9 from "../../assets/About_image2.png"

const ICONS = [ShieldCheck, Clock, Sparkles, Wrench];

export default function WhyUs({ preview = false }) {
  return (
    // <section id="why" className="py-24 bg-[#FAFAF7]">
    //   <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    //     <div className="relative">
    //       <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F39019] rounded-lg opacity-10" />
    //       <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-[#0B1F3A]/10 rounded-lg" />
    //       <img
    //         src={ABOUT_IMAGE}
    //         alt="About NEST"
    //         className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
    //       />
    //       {/* <div className="absolute -bottom-8 left-8 bg-white shadow-xl rounded-lg p-5 border-l-4 border-[#F39019] hidden md:block">
    //         <div className="text-3xl font-bold text-[#0B1F3A]">15+</div>
    //         <div className="text-xs tracking-[0.15em] uppercase text-slate-500 mt-1">Years of craft</div>
    //       </div> */}
    //     </div>

    //     <div>
    //       <div className="title-accent mb-4" />
    //       <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">Why Choose NEST</p>
    //       <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold text-[#0B1F3A] leading-tight">
    //         Homes built on honesty, crafted with care.
    //       </h2>
    //       <p className="text-slate-600 mt-5 text-base leading-relaxed">
    //         We treat every build as if it were our own. From first sketch to handover, you’ll work with a team that values detail, integrity, and the small moments that make a house feel like home.
    //       </p>

    //       <div className="mt-8 grid sm:grid-cols-2 gap-5">
    //         {WHY_US.map((item, i) => {
    //           const Icon = ICONS[i % ICONS.length];
    //           return (
    //             <div key={item.title} className="flex gap-4 p-5 bg-white rounded-lg shadow-sm border border-slate-100 hover:border-[#F39019]/40 hover:shadow-md transition-all duration-300">
    //               <div className="h-11 w-11 rounded-md bg-[#F39019]/10 grid place-items-center shrink-0">
    //                 <Icon className="h-5 w-5 text-[#F39019]" />
    //               </div>
    //               <div>
    //                 <div className="font-semibold text-[#0B1F3A] mb-1">{item.title}</div>
    //                 <div className="text-sm text-slate-600 leading-relaxed">{item.desc}</div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>

    //       {preview && (
    //         <Link to="/about" className="btn-outline rounded-md px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 mt-8">
    //           Read Our Story <ArrowUpRight className="h-4 w-4" />
    //         </Link>
    //       )}
    //     </div>
    //   </div>
    // </section>
    <section id="why" className="py-24 bg-[#FAFAF7]">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    {/* <div className="relative">
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F39019] rounded-lg opacity-10" />
      <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-[#0B1F3A]/10 rounded-lg" />
      <img
        src={ABOUT_IMAGE}
        alt="About NEST"
        className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
      />
       <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F39019] rounded-lg opacity-10" />
      <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-[#0B1F3A]/10 rounded-lg" />
      <img
        src={img9}
        alt="About NEST"
        className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
      />
    </div> */}
    <div className="relative flex flex-col gap-8">
  
  {/* Image 1 */}
  <div className="relative">
    <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F39019] rounded-lg opacity-10" />
    <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-[#0B1F3A]/10 rounded-lg" />
    
    <img
      src={img9}
      alt="About NEST"
      className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
    />
  </div>

  {/* Image 2 */}
  <div className="relative">
    <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F39019] rounded-lg opacity-10" />
    <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-[#0B1F3A]/10 rounded-lg" />
    
    <img
      src={ABOUT_IMAGE}
      alt="About NEST"
      className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
    />
  </div>

</div>

    <div>
      <div className="title-accent mb-4" />
      <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
        Why Choose NEST
      </p>

      <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold text-[#0B1F3A] leading-tight">
        Homes built on honesty, crafted with care.
      </h2>

      <p className="text-slate-600 mt-5 text-base leading-relaxed">
        We treat every build as if it were our own. From first sketch to handover, you’ll work with a team that values detail, integrity, and the small moments that make a house feel like home.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-5">
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

      {preview && (
        <Link
          to="/about"
          className="btn-outline rounded-md px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 mt-8"
        >
          Read Our Story <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  </div>
</section>
  );
}
