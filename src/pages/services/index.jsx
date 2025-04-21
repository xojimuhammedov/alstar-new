import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';
import Header from './_components/Header';
import Main from './_components/Main';
import Form from './_components/Form';

function Services() {
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
        <Form />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Services;
