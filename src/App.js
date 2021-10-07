import React from 'react';
import NavBar from './NavBar'
import HeroHeader from './HeroHeader';
import AboutMe from './AboutMe';
import Academic from './Academic';
import Projects from './Projects';
import Resume from './Resume';
import Footer from './Footer';
import ContactMe from './ContactMe';
import samplePDF from "./Heni_Bhungalia.pdf";

function App() {

  return (
    <>
      <NavBar />
      <div>
       
          <HeroHeader />     
          <AboutMe />
        
          <Academic />
       
       
          <Projects />
        
          <Resume pdf={samplePDF} />
        
          <ContactMe />
        
          <Footer />
        

      </div>
    </>
  );
}

export default App;