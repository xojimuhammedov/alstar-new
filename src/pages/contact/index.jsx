import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';
import Header from './_components/Header';
import Form from './_components/Form';

function Contact() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header />
      </header>
      <main>
        <Form />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Contact;
