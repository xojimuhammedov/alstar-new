import Navbar from './../../components/Navbar';
import Footer from './../../components/Footer';
import React from 'react';
import Header from './_components/Header';
import Main from './_components/Main';
import Section from './_components/Section';

function ColourSamples() {
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
      <section>
        <Section />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ColourSamples;
