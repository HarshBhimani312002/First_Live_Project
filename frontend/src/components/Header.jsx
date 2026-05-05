import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { LOGO } from '../mock';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const transparent = pathname === '/' && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent py-4' : 'bg-white/95 backdrop-blur shadow-sm py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO} alt="NEST" className="h-12 w-12 object-contain rounded-md" />
          <div className="leading-tight hidden sm:block">
            <div className={`font-semibold tracking-wider text-lg ${transparent ? 'text-white' : 'text-[#0B1F3A]'}`}>NEST</div>
            <div className={`text-[10px] tracking-[0.2em] uppercase ${transparent ? 'text-white/80' : 'text-slate-500'}`}>A Place to Call Home</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `nav-link text-sm font-medium tracking-wide transition-colors ${
                  transparent ? 'text-white' : 'text-[#0B1F3A]'
                } ${isActive ? 'text-[#F39019]' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* <a
            href="tel:+61872257911"
            className={`flex items-center gap-2 text-sm font-medium ${transparent ? 'text-white' : 'text-[#0B1F3A]'}`}
          >
            <Phone className="h-4 w-4" />
            08 7225 7911
          </a> */}
          <Link to="/contact" className="btn-primary rounded-md px-5 py-2.5 text-sm font-semibold">
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded ${transparent ? 'text-white' : 'text-[#0B1F3A]'}`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV.map((item) => (
              <NavLink key={item.label} to={item.to} end={item.to === '/'} className="text-[#0B1F3A] font-medium">
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary rounded-md px-5 py-2.5 text-sm font-semibold text-center">Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
