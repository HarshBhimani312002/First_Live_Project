// src/pages/TrustedPartners.jsx

import React from "react";

import partners1 from "../../assets/trusted_Partners1.jpeg";
import partners2 from "../../assets/trusted_Partners2.jpeg";
import partners3 from "../../assets/trusted_Partners3.jpeg";
import partners4 from "../../assets/trusted_Partners4.jpeg";
import partners5 from "../../assets/trusted_Partners5.jpeg";
import partners6 from "../../assets/trusted_Partners6.jpeg";
import partners7 from "../../assets/trusted_Partners7.jpeg";

const partners = [
  {
    name: "Partner 1",
    logo: partners1,
  },
  {
    name: "Partner 2",
    logo: partners2,
  },
  {
    name: "Partner 3",
    logo: partners3,
  },
  {
    name: "Partner 4",
    logo: partners4,
  },
  {
    name: "Partner 5",
    logo: partners5,
  },
  {
    name: "Partner 6",
    logo: partners6,
  },
  {
    name: "Partner 7",
    logo: partners7,
  },
];

export default function TrustedPartners() {
  return (
    <>
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP SECTION */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

            <div>
              {/* Orange Line */}
              <div className="w-14 h-[3px] bg-[#F39019] mb-4" />

              {/* Small Heading */}
              <p className="text-lg md:text-lg text-[#F39019] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
                Our Trusted Partners
              </p>

              {/* Main Heading */}
              <h2 className="font-[Poppins] text-2xl md:text-2xl font-semibold text-[#0B1F3A] leading-tight max-w-2xl">
                Building strong relationships with trusted brands.
              </h2>
            </div>

          </div>

          {/* AUTO SCROLL LOGOS */}
          <div className="relative overflow-hidden py-6">
            <div className="flex items-center gap-20 partner-scroll w-max">

              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center shrink-0"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 w-auto object-contain grayscale-0 hover:grayscale-0 hover:scale-105 transition-all duration-300"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>
        {`
          .partner-scroll {
            animation: scrollPartners 28s linear infinite;
          }

          .partner-scroll:hover {
            animation-play-state: paused;
          }

          @keyframes scrollPartners {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </>
  );
}