import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { HERO_IMAGE, HERO_IMAGE2, HERO_IMAGE3, HERO_IMAGE4 } from "../../mock";

export default function Hero() {
  const images = [HERO_IMAGE, HERO_IMAGE2, HERO_IMAGE3, HERO_IMAGE4];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${
            index === 2 ? "" : "slow-zoom"
          } transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: index === 2 ? "center top" : "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/60 via-[#0B1F3A]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl text-white fade-up">
          {/* Unique NEST text */}
          <div className="mb-4">
            <span className="font-[Poppins] text-3xl md:text-3xl font-bold tracking-[0.35em] text-white/90">
              NEST
            </span>

            <div className="h-[3px] w-24 bg-[#F39019] mt-2 rounded-full" />
          </div>

          {/* Small heading */}
          <h1 className="font-[Poppins] text-2xl md:text-3xl font-medium leading-tight text-white/90">
            A Place to{" "}
            <span className="text-[#F39019] font-semibold">Call Home</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
            We treat every build as if it were our own. From first sketch to
            handover, you’ll work with a team that values detail, integrity, and
            the small moments that make a house feel like home.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/Gallery"
              className="btn-primary rounded-md px-6 py-3.5 font-semibold inline-flex items-center gap-2"
            >
              Explore homes
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* <Link to="/process" className="rounded-md px-6 py-3.5 font-semibold inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 transition-colors">
              <Play className="h-4 w-4" /> Our Process
            </Link> */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-[11px] tracking-[0.3em] uppercase animate-pulse">
        Scroll to explore
      </div>
    </section>
  );
}
