import React from "react";
import { Mail } from "lucide-react";

export default function Packages() {
  return (
    <section className="min-h-screen bg-[#0B1F3A] relative overflow-hidden flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#F39019]/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-500/20 blur-[140px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Small Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-white/70 text-xs tracking-[0.25em] uppercase mb-8">
          <span className="h-2 w-2 rounded-full bg-[#F39019]" />
          Nest Homes
        </div>

        {/* Main Title */}
        <h1 className="font-[Poppins] text-6xl md:text-8xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#F39019] via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We’re building something exceptional for Nest Homes.
          A modern experience crafted with luxury, elegance,
          and thoughtful design.
        </p>

        {/* Input */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">

          <div className="relative w-full">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white/10 border border-white/10 focus:border-[#F39019] outline-none text-white placeholder:text-white/40 rounded-xl pl-12 pr-4 py-4 backdrop-blur"
            />
          </div>

          <button className="btn-primary rounded-xl px-8 py-4 font-semibold whitespace-nowrap">
            Notify Me
          </button>
        </div>

        {/* Bottom Text */}
        <p className="mt-8 text-sm tracking-[0.2em] uppercase text-white/40">
          Launching Soon
        </p>

      </div>
    </section>
  );
}