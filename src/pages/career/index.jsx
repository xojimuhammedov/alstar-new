import React from "react";
import Header from "./_components/Header";
import Main from "./_components/Main";
import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import { Image, Link } from "@chakra-ui/react";

import CallIcon from '../../assets/call.png'

function Career() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
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

export default Career;
