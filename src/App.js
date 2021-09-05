import React from 'react';
import NavBar from './NavBar'
import HeroHeader from './HeroHeader';
import AboutMe from './AboutMe';
import Academic from './Academic';
import Projects from './Projects';
import Resume from './Resume';

import ContactMe from './ContactMe';
import samplePDF from "./Heni_Resume.pdf";

function App() {
  
  return (
    <div>
      <NavBar/>
      <div>
        <HeroHeader/>
        <AboutMe/>
        <Academic/>
        <Projects/>
        <Resume pdf={samplePDF} />
        <ContactMe/>
        
      </div>
    </div>
  );
}

export default App;