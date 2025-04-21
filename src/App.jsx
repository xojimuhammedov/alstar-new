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

import CallIcon from './assets/call.png'
import { Flex, Image, Link } from "@chakra-ui/react";

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
              <section>
                <Projects />
              </section>
              <footer>
                <Footer />
              </footer>
              <Link
                href="tel:+998770008700"
                className="position-link">
                <Image w={'30px'} src={CallIcon} alt="CallIcon" />
                +998770008700
              </Link>
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
    </>
  );
}

export default App;
