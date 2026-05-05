import heroImg from "./assets/nest-logo.jpeg";
import hero from './assets/hero.png';
import about from "./assets/About_image.png"
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import img8 from './assets/img8.png'
import img9 from './assets/img9.png'

export const HERO_IMAGE =hero
  // "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=2000&q=80";

export const ABOUT_IMAGE =
  // "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1400&q=80";
  about

export const PROJECTS = [
  {
    id: 1,
    // name: "Sunrise Estate",
    // location: "Adelaide Hills, SA",
    // price: "$680,000",
    image:
      // "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?auto=format&fit=crop&w=1200&q=80",
      img1
    // beds: 4,
    // baths: 2,
    // living: 2,
    // garage: 2,
    // tag: "Custom Home",
  },
  {
    id: 2,
    // name: "Marlowe Residence",
    // location: "Glenelg, SA",
    // price: "$820,000",
    image:img2
    //   "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80",
    // beds: 4,
    // baths: 3,
    // living: 2,
    // garage: 2,
    // tag: "House & Land",
  },
  {
    id: 3,
    // name: "The Havenwood",
    // location: "Norwood, SA",
    // price: "$595,000",
    image:img3
    //   "https://images.unsplash.com/photo-1628744448839-a475cc0e90c3?auto=format&fit=crop&w=1200&q=80",
    // beds: 3,
    // baths: 2,
    // living: 1,
    // garage: 2,
    // tag: "Modern Build",
  },
  {
    id: 4,
    // name: "Azure Bay Home",
    // location: "Henley Beach, SA",
    // price: "$910,000",
    image:img4
    //   "https://images.unsplash.com/photo-1706808849827-7366c098b317?auto=format&fit=crop&w=1200&q=80",
    // beds: 5,
    // baths: 3,
    // living: 2,
    // garage: 2,
    // tag: "Luxury",
  },
  {
    id: 5,
    // name: "Willowgrove",
    // location: "Prospect, SA",
    // price: "$720,000",
    image:img5
    //   "https://images.unsplash.com/photo-1706808849803-f61304e024ab?auto=format&fit=crop&w=1200&q=80",
    // beds: 4,
    // baths: 2,
    // living: 2,
    // garage: 2,
    // tag: "New Build",
  },
  {
    id: 6,
    // name: "Redbrick Manor",
    // location: "Unley, SA",
    // price: "$640,000",
    image:img6
    //   "https://images.pexels.com/photos/30163090/pexels-photo-30163090.jpeg?auto=compress&cs=tinysrgb&w=1200",
    // beds: 4,
    // baths: 2,
    // living: 1,
    // garage: 2,
    // tag: "Heritage",
  },
  {
    id: 7,
    // name: "The Archer",
    // location: "West Lakes, SA",
    // price: "$755,000",
    image:img7
    //   "https://images.pexels.com/photos/32666364/pexels-photo-32666364.jpeg?auto=compress&cs=tinysrgb&w=1200",
    // beds: 4,
    // baths: 3,
    // living: 2,
    // garage: 2,
    // tag: "Architectural",
  },
  {
    id: 8,
    // name: "Linden White",
    // location: "Mitcham, SA",
    // price: "$580,000",
    image:img8
    //   "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200",
    // beds: 3,
    // baths: 2,
    // living: 1,
    // garage: 1,
    // tag: "Minimalist",
  },
   {
    id: 9,
    // name: "Linden White",
    // location: "Mitcham, SA",
    // price: "$580,000",
    image:img9
    //   "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200",
    // beds: 3,
    // baths: 2,
    // living: 1,
    // garage: 1,
    // tag: "Minimalist",
  },
];

export const WHY_US = [
  {
    title: "Transparent Pricing",
    desc: "Clear, upfront project pricing with no surprises — built on honesty from day one.",
  },
  {
    title: "On-Time Handover",
    desc: "A proven track record of delivering homes on schedule, every single time.",
  },
  {
    title: "Tailored Designs",
    desc: "Every home is crafted to reflect your lifestyle, land, and personal taste.",
  },
  {
    title: "Trusted Craftsmanship",
    desc: "Premium materials, skilled trades, and a 25-year structural guarantee.",
  },
];

export const SERVICES = [
  { title: 'CUSTOM DESIGNED HOMES', desc: 'Bespoke homes tailored to your lifestyle, needs and budget. Unique designs, functional spaces and quality finishes built to last.', icon: 'Home' },
  { title: 'HOME & LAND PACKAGES', desc: 'Carefully selected locations combined with beautifully designed homes for a seamless and stress-free building experience.', icon: 'MapPin' },
  { title: 'PROJECT MANAGEMENT SERVICES', desc: 'Expert coordination of your project from start to finish, ensuring timelines, budgets and quality are delivered.', icon: 'Hammer' },
  { title: 'KNOCKDOWN & REBUILD', desc: 'Transform your existing property with a brand-new home – more value, modern living and a fresh start in the location you love.', icon: 'ClipboardList' },
  { title: 'SUBDIVISION SERVICES', desc: 'Unlock the potential of your land. We manage the entire subdivision process from planning and approvals to final registration.', icon: 'Map' },
  { title: 'LAND / PROPERTY DEVELOPMENT', desc: 'We identify opportunities and deliver high-quality development solutions that create long-term value and strong returns.', icon: 'PaintBucket' },
  { title: 'INTERIOR DESIGNING', desc: 'Thoughtful interior design that blends style, comfort and functionality to create beautiful, liveable spaces.', icon: 'Map' },
  { title: 'CONSTRUCTION SERVICES', desc: 'High-quality construction delivered with precision, skilled workmanship and a commitment to safety and excellence.', icon: 'PaintBucket' },
];


export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "We listen to your vision, timeline and budget — then map the path forward.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Our architects turn ideas into tailored plans you fall in love with.",
  },
  {
    step: "03",
    title: "Approve",
    desc: "We handle council approvals and paperwork so you don\u2019t have to.",
  },
  {
    step: "04",
    title: "Build",
    desc: "Quality craftsmanship on site, with bi-weekly progress updates.",
  },
  {
    step: "05",
    title: "Handover",
    desc: "Final inspection, keys in hand, and a 25-year structural guarantee.",
  },
];

export const TESTIMONIALS = [
  {
    name: "David Josan",
    role: "Homeowner, Prospect",
    avatar: "https://i.pravatar.cc/120?img=12",
    quote:
      "Truly reliable team. From the first sketch to handover, NEST felt like building with family. Our home is everything we dreamt of.",
  },
  {
    name: "Harman Gill",
    role: "First-time Buyer",
    avatar: "https://i.pravatar.cc/120?img=33",
    quote:
      "The transparent pricing gave us confidence. Completed on time, no hidden costs \u2014 a rare thing these days.",
  },
  {
    name: "Ronnie & Sara",
    role: "Homeowners, Glenelg",
    avatar: "https://i.pravatar.cc/120?img=47",
    quote:
      "Beautiful craftsmanship and genuine communication throughout. They sweat the details so you don\u2019t have to.",
  },
];

export const LOGO = heroImg;
