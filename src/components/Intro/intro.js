import React from 'react';
import './intro.css';
import pri from '../../allImgs/pri.png';
import Resume_new  from '../../allImgs/Resume_new.pdf';

import { Typewriter } from 'react-simple-typewriter';
import {Link} from 'react-scroll';
import {FaUserTie} from 'react-icons/fa';

const Intro = () => {
  return (
    <>
      <section id='intro'>
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className="introText">I'm <span className="introName">Priyanshi</span><br />{' '}<span style={{color:'yellow'}}><Typewriter
            words={['Frontend Developer', 'React Developer', 'Database Developer', 'Node Developer']}
            loop={true}
            cursor
            cursorFontWeight='200'
            cursorStyle='|'
            typeSpeed={200}
            deleteSpeed={180}
            delaySpeed={1000}
        
          /></span></span>
            <p className="introPara">I am a skilled web Developer with experience in creating visually <br />appealing and user friendly websites.</p>
            <Link><button className="btn"><FaUserTie className='btnImg'/>Hire Me</button></Link>
             <a href={Resume_new}><button className='btn'>Get Resume</button></a>
        </div>
        <img src={pri} alt="Profile" className='introImg'/>

      </section>
    </>
  );
}

export default Intro
