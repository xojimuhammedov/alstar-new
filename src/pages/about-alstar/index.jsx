import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import React from "react";
import Header from "./_components/Header";
import { Image, Link } from "@chakra-ui/react";

import CallIcon from '../../assets/call.png'

function AboutAlstar() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header />
      </header>
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
  );
}

export default AboutAlstar;
