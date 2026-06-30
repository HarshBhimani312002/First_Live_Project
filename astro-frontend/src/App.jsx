import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "../../frontend/src/pages/Home";
import About from "../../frontend/src/pages/About";
import ServicesPage from "../../frontend/src/pages/ServicesPage";
import ProjectsPage from "../../frontend/src/pages/ProjectsPage";
import Packages from "../../frontend/src/pages/Packages";
import ContactPage from "../../frontend/src/pages/ContactPage";
import Admin from "../../frontend/src/pages/Admin"; // NEW
import Login from "../../frontend/src/pages/Login";

import Layout from "../../frontend/src/components/Layout";
import ScrollToTop from "../../frontend/src/components/ScrollToTop";
import { Toaster } from "../../frontend/src/components/ui/toaster";

function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/Gallery/")) {
      document.title = "Gallery | Nest Homes";
      return;
    }

    switch (location.pathname) {
      case "/":
        document.title = "Nest Homes SA | A Place to call Home";
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

      case "/admin":
        document.title = "Admin | Nest Homes SA";
        break;

      case "/login ":
        document.title = "login | Nest Homes SA";
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

        <TitleManager />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<ServicesPage />} />

            <Route path="/Gallery" element={<ProjectsPage />} />
            <Route path="/Gallery/:id" element={<ProjectsPage />} />

            <Route path="/Packages" element={<Packages />} />

            <Route path="/contact" element={<ContactPage />} />

            {/* NEW ADMIN ROUTE */}
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </div>
  );
}

export default App;
