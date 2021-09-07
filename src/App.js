import React from 'react';
import NavBar from './NavBar'
import HeroHeader from './HeroHeader';
import AboutMe from './AboutMe';
import Academic from './Academic';
import Projects from './Projects';
import Resume from './Resume';
import Footer from './Footer';
import ContactMe from './ContactMe';
import samplePDF from "./Heni_Resume.pdf";

function App() {

  return (
    <div>
      <NavBar />
      <div>
        <div>
          <HeroHeader />
        </div>
        <div>
          <AboutMe />
        </div>
        <div>
          <Academic />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Resume pdf={samplePDF} />
        </div>
        <div>
          <ContactMe />
        </div>
        <div>
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;