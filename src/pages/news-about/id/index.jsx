import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import React from "react";
import Header from "../_components/Header";
import Main from "../_components/Main";
import { newsData } from "../../../api/data";
import { useParams } from "react-router-dom";

function ServiceAbout() {
  const router = useParams();
  const newsAboutData = newsData?.find(
    (item) => item?.id === Number(router?.id)
  );
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header />
      </header>
      <main>
        <Main newsAboutData={newsAboutData} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ServiceAbout;
