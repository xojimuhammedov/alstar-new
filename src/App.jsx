import { Route, Routes } from "react-router-dom";
import AboutAlstar from "./pages/about-alstar";
import Career from "./pages/career";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Company from "./components/Company";
import Design from "./components/Design";
import News from "./components/News";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ColourSamples from "./pages/colour/index";
import AlstarProduct from "./pages/alstar-product/id";
import Contact from "./pages/contact";
import Service from "./pages/news";
import ServiceList from "./pages/news-list";
import ServiceEvent from "./pages/news-events";
import ServiceAbout from "./pages/news-about/id";
import ServiceDownload from "./pages/service-download";
import Services from "./pages/services";
import Downloads from "./pages/downloads";
import Inspirations from "./pages/inspirations";
import ProjectHight from "./pages/projects-hight";
import ProjectList from "./pages/projects-list";
import Product from "./pages/product/id";

import './App.css'

import CallIcon from './assets/call-icon.png'
import { Flex, Image, Link } from "@chakra-ui/react";
import ConsultationForm from "./components/Consultation";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <nav>
                <Navbar />
              </nav>
              <header>
                <Header />
              </header>
              <main>
                <About />
                <Company />
                <Design />
                <News />
              </main>
              {/* <section>
                <Projects />
              </section> */}
              <ConsultationForm />
              <footer>
                <Footer />
              </footer>
            </>
          }
        />
        <Route path="/about-alstar" element={<AboutAlstar />} />
        <Route path="/career" element={<Career />} />
        <Route path="/colour" element={<ColourSamples />} />
        <Route path="/alstar-product/:id" element={<AlstarProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<Service />} />
        <Route path="/news-list" element={<ServiceList />} />
        <Route path="/news-events" element={<ServiceEvent />} />
        <Route path="/news-about/:id" element={<ServiceAbout />} />
        <Route path="/service-download" element={<ServiceDownload />} />
        <Route path="/services" element={<Services />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/inspirations" element={<Inspirations />} />
        <Route path="/projects-hight" element={<ProjectHight />} />
        <Route path="/projects-list" element={<ProjectList />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

      <Link
        href="tel:+998770008700"
        target="_blank"
        className="position-link">
        <Image w={'50px'} src={CallIcon} alt="CallIcon" />
      </Link>
      <Link
        target="_blank"
        className="position-whatsapp" href="https://wa.me/+998770008700">
        <svg role="presentation" width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 50a25 25 0 100-50 25 25 0 000 50z" fill="#fff"></path><path d="M26.1 12a12.1 12.1 0 00-10.25 18.53l.29.46-1.22 4.46 4.57-1.2.45.27a12.1 12.1 0 106.16-22.51V12zm6.79 17.22c-.3.85-1.72 1.62-2.41 1.72-.62.1-1.4.14-2.25-.14-.7-.22-1.37-.47-2.03-.77-3.59-1.57-5.93-5.24-6.1-5.48-.19-.24-1.47-1.97-1.47-3.76 0-1.79.93-2.67 1.25-3.03.33-.37.72-.46.96-.46.23 0 .47 0 .68.02.22 0 .52-.09.8.62l1.1 2.7c.1.18.16.4.04.64s-.18.39-.36.6c-.18.21-.38.47-.54.64-.18.18-.36.38-.15.74.2.36.92 1.55 1.98 2.52 1.37 1.23 2.52 1.62 2.88 1.8.35.18.56.15.77-.1.2-.23.9-1.05 1.13-1.42.24-.36.48-.3.8-.18.33.12 2.09 1 2.44 1.18.36.19.6.28.69.43.09.15.09.88-.21 1.73z" fill="#27D061"></path><path d="M25 0a25 25 0 100 50 25 25 0 000-50zm1.03 38.37c-2.42 0-4.8-.6-6.9-1.76l-7.67 2 2.05-7.45a14.3 14.3 0 01-1.93-7.2c0-7.92 6.49-14.38 14.45-14.38a14.4 14.4 0 110 28.79z" fill="#27D061"></path></svg>
      </Link>
    </>
  );
}

export default App;
