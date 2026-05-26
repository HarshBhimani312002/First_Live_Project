import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  FileBadge,
} from "lucide-react";
import { LOGO } from "../mock";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img
              src={LOGO}
              alt="NEST"
              className="h-14 w-14 object-contain bg-white rounded-lg p-1"
            />
            <div>
              <div className="font-semibold text-xl tracking-wider">NEST</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/60">
                A Place to Call Home
              </div>
            </div>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed">
            NEST is a boutique home builder crafting custom homes across South
            Australia. We treat every project as a jewel — with care, craft and
            clarity.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[#F39019]">Useful Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link
                to="/"
                className="hover:text-[#F39019]"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#F39019]"
                onClick={() => window.scrollTo(0, 0)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Gallery"
                className="hover:text-[#F39019]"
                onClick={() => window.scrollTo(0, 0)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-[#F39019]"
                onClick={() => window.scrollTo(0, 0)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/Packages"
                className="hover:text-[#F39019]"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home & Land packages
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[#F39019]">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-[#F39019]" /> 11A Newcombe
              Dr Gilles Plains SA 5086
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-[#F39019]" /> +61417862762
            </li>
            {/* <li className="flex items-start gap-2">
              <MessageCircle className="h-4 w-4 mt-0.5 text-[#F39019]" />{" "}
              +61417862762
            </li> */}
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-[#F39019]" />{" "}
              info@nesthomessa.com.au
            </li>
            <li className="flex items-start gap-2">
              <FileBadge className="h-4 w-4 mt-0.5 text-[#F39019]" />
              BLD354512
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[#F39019]">Newsletter</h4>
          <p className="text-sm text-white/70 mb-4">
            Subscribe for new home designs and building tips.
          </p>

          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-[#F39019] hover:text-[#0B1F3A] transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-[#F39019] hover:text-[#0B1F3A] transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
        <div>© 2026 NEST Homes. All rights reserved.</div>
        <div>Builder License: BLD354512</div>
      </div>
    </footer>
  );
}
