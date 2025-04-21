import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';
import Header from './_components/Header';
import Main from './_components/Main';

function ProjectHight() {
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
    </>
  );
}

export default ProjectHight;
