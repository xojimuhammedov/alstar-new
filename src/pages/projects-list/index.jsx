import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';
import Header from './_components/Header';
import Main from './_components/Main';
import Section from './_components/Section';

function ProjectList() {
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
        <Section />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ProjectList;
