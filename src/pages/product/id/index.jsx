import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Header from '../_components/Header';
import Main from '../_components/Main';
import Projects from '../_components/Projects';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../api';
import { useParams } from 'react-router-dom';

function Product() {
  const router = useParams()?.id;
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/projects/${router}`)
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
      <section>
        <Projects />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Product;
