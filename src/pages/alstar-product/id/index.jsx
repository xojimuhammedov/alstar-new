import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Header from "./_components/Header";
import Main from "./_components/Main";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../api";
import { useParams } from "react-router-dom";

function AlstarProduct() {
  const router = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products/${router?.id}`)
      .then((res) => setProducts(res?.data?.data))
      .catch((err) => console.log(err));
  }, [router]);
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header products={products} />
      </header>
      <main>
        <Main products={products} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AlstarProduct;
