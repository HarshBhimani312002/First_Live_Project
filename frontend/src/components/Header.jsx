import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, House } from "lucide-react";

import { LOGO } from "../mock";
import ContactCTA from "./sections/ContactCTA";

const NAV = [
  { label: "Home", to: "/", icon: <House className="w-5 h-5" /> },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/Gallery" },
  { label: "Home & Land packages", to: "/Packages" },

  // { label: 'Process', to: '/process' },
  // { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // MODAL STATE
  const [openQuoteModal, setOpenQuoteModal] = useState(false);

  const { pathname } = useLocation();

  const transparent = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // PREVENT BACKGROUND SCROLL
  useEffect(() => {
    if (openQuoteModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openQuoteModal]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? "bg-white/95 backdrop-blur shadow-sm py-2"
            : "bg-white/95 backdrop-blur shadow-sm py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={LOGO}
              alt="NEST"
              className="h-12 w-12 object-contain rounded-md"
            />
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-link text-sm font-medium tracking-wide transition-colors text-[#0B1F3A] ${
                    isActive ? "text-[#F39019]" : ""
                  }`
                }
              >
                {item.icon ? item.icon : item.label}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP BUTTON */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setOpenQuoteModal(true)}
              className="btn-primary rounded-md px-5 py-2.5 text-sm font-semibold"
            >
              Get a Touch
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded text-[#0B1F3A]"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-md">
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  className="text-[#0B1F3A] font-medium"
                >
                  <span className="flex items-center gap-2">
                    {item.icon ? item.icon : item.label}
                  </span>
                </NavLink>
              ))}

              {/* MOBILE GET QUOTE */}
              <button
                onClick={() => {
                  setOpen(false);
                  setOpenQuoteModal(true);
                }}
                className="btn-primary rounded-md px-5 py-2.5 text-sm font-semibold text-center"
              >
                Get a Touch
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MODAL */}
      {openQuoteModal && (
        <ContactCTA isModal={true} onClose={() => setOpenQuoteModal(false)} />
      )}
    </>
  );
}