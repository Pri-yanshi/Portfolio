import React from 'react';
import './style.css';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skill from './components/Skills/skill';
import Work from './components/Works/work';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';




const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <Intro/>
        <Skill/>
        <Work/>
        <Contact/>
        <Footer/>
      
      </div>
      
    </>
  )
}

export default App;
