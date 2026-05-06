// import React from "react";
// import PageHero from "../components/PageHero";
// import WhyUs from "../components/sections/WhyUs";
// import Testimonials from "../components/sections/Testimonials";
// import ContactCTA from "../components/sections/ContactCTA";
// import { Award, Users, Hammer, Home as HomeIcon } from "lucide-react";

// const STATS = [
//   { n: "200+", l: "Homes Built", Icon: HomeIcon },
//   { n: "15+", l: "Years of Craft", Icon: Hammer },
//   { n: "500+", l: "Happy Families", Icon: Users },
//   { n: "25 yr", l: "Structural Guarantee", Icon: Award },
// ];

// export default function About() {
//   return (
//     <>
//       <PageHero
//         breadcrumb="About"
//         title="Our story is built one home at a time."
//         subtitle="NEST is a boutique Adelaide home builder creating custom homes for families who value honesty, craft and clarity."
//       />

//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <div className="title-accent mb-4 mx-auto block" />
//           <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
//             Our Mission
//           </p>
//           <h2 className="font-[Poppins] text-3xl md:text-4xl font-semibold text-[#0B1F3A] leading-tight">
//             Every NEST home is a quiet promise — built honestly, finished
//             proudly.
//           </h2>
//           <p className="mt-6 text-slate-600 text-lg leading-relaxed">
//             We started NEST because we believed building a home shouldn’t be
//             stressful. It should feel like a story you’ll one day tell your
//             kids. Today we partner with families across South Australia —
//             first-time buyers, growing households, and downsizers — to design
//             and build homes that quietly make life better.
//           </p>
//         </div>
//       </section>
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <div className="title-accent mb-4 mx-auto block" />
//           <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
//             Our vision
//           </p>
//           <h2 className="font-[Poppins] text-3xl md:text-4xl font-semibold text-[#0B1F3A] leading-tight">
//             Every NEST home is a quiet promise — built honestly, finished
//             proudly.
//           </h2>
//           <p className="mt-6 text-slate-600 text-lg leading-relaxed">
//             To build homes that inspire, enrich lifestyles, and create lasting
//             value — delivering every family a place they are proud to call home.
//           </p>
//         </div>
//       </section>

//       <WhyUs preview={false} />

//       <section className="py-20 bg-[#FAFAF7]">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
//           {STATS.map(({ n, l, Icon }) => (
//             <div
//               key={l}
//               className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-100 hover:border-[#F39019]/40 transition-colors"
//             >
//               <div className="h-12 w-12 mx-auto rounded-md bg-[#F39019]/10 grid place-items-center mb-4">
//                 <Icon className="h-5 w-5 text-[#F39019]" />
//               </div>
//               <div className="font-[Poppins] text-4xl font-bold text-[#0B1F3A]">
//                 {n}
//               </div>
//               <div className="text-xs tracking-[0.2em] uppercase text-slate-500 mt-2">
//                 {l}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Testimonials />
//       <ContactCTA />
//     </>
//   );
// }

import React from "react";
import PageHero from "../components/PageHero";
import WhyUs from "../components/sections/WhyUs";
import Testimonials from "../components/sections/Testimonials";
import ContactCTA from "../components/sections/ContactCTA";
import { Award, Users, Hammer, Home as HomeIcon } from "lucide-react";

const STATS = [
  { n: "200+", l: "Homes Built", Icon: HomeIcon },
  { n: "15+", l: "Years of Craft", Icon: Hammer },
  { n: "500+", l: "Happy Families", Icon: Users },
  { n: "25 yr", l: "Structural Guarantee", Icon: Award },
];

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        title="Built on trust, crafted for modern living."
        subtitle="At Nest Homes, we believe a home is more than just four walls and a roof, it’s where life happens. From the first morning coffee to the last goodnights, your home should feel like it was made for you, because with us, it is.
Founded on a simple belief that everyone deserves a home built with integrity and genuine attention to detail, we bring that standard to every project we take on. We are a tight knit company, which means you get a team that is flexible, hands-on, and invested in getting it right.
From your first conversation with us through to final handover, we manage every stage of your build with care and transparency. We are selective about the suppliers and tradespeople we partner with, because we know the quality of your home depends on the strength of the team behind it. Every decision we make is guided by one question: would we be proud to hand over the keys?
We take the time to hear you, understand your lifestyle, and shape your vision into something real, then we help build your dream with the craftmanship and honesty it deserves."
      />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="title-accent mb-4 mx-auto block" />
          <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Our Mission
          </p>
          <h2 className="font-[Poppins] text-3xl md:text-4xl font-semibold text-[#0B1F3A] leading-tight">
            Every NEST home is a quiet promise — built honestly, finished
            proudly.
          </h2>
          {/* NEW CONTENT ADDED */}
          Our mission at NEST is to create homes that go beyond structures,
          becoming meaningful spaces tailored to each client’s lifestyle and
          aspirations. We are committed to delivering exceptional quality,
          luxury craftsmanship, and personalised service in every project. From
          concept to completion, we aim to bring each client’s vision to life
          with precision and care.
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="title-accent mb-4 mx-auto block" />
          <p className="text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Our Vision
          </p>
          <h2 className="font-[Poppins] text-3xl md:text-4xl font-semibold text-[#0B1F3A] leading-tight">
            Building homes that feel as good as they look.
          </h2>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            To build homes that inspire, enrich lifestyles, and create lasting
            value — delivering every family a place they are proud to call home.
          </p>
        </div>
      </section>

      <WhyUs preview={false} />

      {/* Stats Section */}
      {/* <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {STATS.map(({ n, l, Icon }) => (
            <div
              key={l}
              className="bg-white rounded-xl p-8 text-center shadow-sm border border-slate-100 hover:border-[#F39019]/40 transition-colors"
            >
              <div className="h-12 w-12 mx-auto rounded-md bg-[#F39019]/10 grid place-items-center mb-4">
                <Icon className="h-5 w-5 text-[#F39019]" />
              </div>
              <div className="font-[Poppins] text-4xl font-bold text-[#0B1F3A]">
                {n}
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-slate-500 mt-2">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <Testimonials />
      <ContactCTA />
    </>
  );
}
