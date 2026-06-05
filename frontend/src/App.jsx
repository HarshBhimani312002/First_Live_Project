import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import Packages from "./pages/Packages";
import ContactPage from "./pages/ContactPage";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "./components/ui/toaster";

function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    // Gallery details page fix
    if (location.pathname.startsWith("/Gallery/")) {
      document.title = "Gallery | Nest Homes";
      return;
    }

    switch (location.pathname) {
      case "/":
        document.title =
          "Nest Homes SA | A Place to call Home";
        break;

      case "/about":
        document.title = "About | Nest Homes SA";
        break;

      case "/services":
        document.title = "Services | Nest Homes SA";
        break;

      case "/Gallery":
        document.title = "Gallery | Nest Homes SA";
        break;

      case "/Packages":
        document.title = "Packages | Nest Homes SA";
        break;

      case "/contact":
        document.title = "Contact | Nest Homes SA";
        break;

      default:
        document.title = "Nest Homes";
    }
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

        {/* Title Manager */}
        <TitleManager />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<ServicesPage />} />

            {/* Gallery Routes */}
            <Route path="/Gallery" element={<ProjectsPage />} />
            <Route path="/Gallery/:id" element={<ProjectsPage />} />

            <Route path="/Packages" element={<Packages />} />

            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster />
    </div>
  );
}

export default App;
