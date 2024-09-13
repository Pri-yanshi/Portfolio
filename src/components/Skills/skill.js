import React from 'react';
import './skill.css';
import front from '../../allImgs/front.jpg';
import Responsive from '../../allImgs/Responsive.png';
import database from '../../allImgs/database.png';


const Skill = () => {
  return (
   <>
    <section id="skills">
        <span className='skillTitle'>What I do</span>
        <span className="skillDesc">I am a skilled and passionate frontend web developer with experience such as Developing and maintaining the user interface, Implementing design on mobile websites, Following SEO best practices, Fixing bugs and testing for usability.</span>
 
        <div className="skillBars">

          <div className="skillBar">
           <div className='skillImg'><img src={front} alt="Frontend" className="Img" /></div>
            <div className="skillText">
              <h2>Frontend Developer</h2>
              <p>As front end developer I spend a great deal of their time working in HTML, CSS and JavaScript, making Attractive Websites.</p>
            </div>
          </div>
          <div className="skillBar">
            <div className='skillImg'><img src={Responsive} alt="Responsive" className="Img" /></div>
            <div className="skillText">
              <h2>Responsive Website</h2>
              <p> With a responsive website, someone can browse my website from any device and it will still look and function perfectly.</p>
            </div>
          </div>
          <div className="skillBar">
          <div className='skillImg'><img src={database} alt="Database" className="Img" /></div>
            <div className="skillText">
              <h2>Using Database</h2>
              <p>A website database is an information storage system that allows access through a website. The database stores information.</p>
            </div>
          </div>

        </div>
    </section>
   </>
  )
}

export default Skill
