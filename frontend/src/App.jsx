import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "./components/ui/toaster";
import Packages from "./pages/Packages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<ServicesPage />} />

            {/* IMPORTANT */}
            <Route path="/Gallery" element={<ProjectsPage />} />
            <Route path="/Gallery/:id" element={<ProjectsPage />} />

            <Route path="//Packages" element={<Packages />} />
            {/* <Route path="/process" element={<ProcessPage />} /> */}

            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster />
    </div>
  );
}

export default App;
