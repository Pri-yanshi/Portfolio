import React from 'react';
import './work.css';
import Wimg1 from '../../allImgs/Wimg1.png';
import Wimg2 from '../../allImgs/Wimg2.jpg';
import Wimg3 from '../../allImgs/Wimg3.png';
import Wimg4 from '../../allImgs/Wimg4.jpg';
import Wimg5 from '../../allImgs/Wimg5.png';
import Wimg6 from '../../allImgs/Wimg6.png';


const Work = () => {
  return (
    <>
     <section id='works'>
       <h2 className='workTitle'>My Portfolio</h2>
       <span className="workDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achives their  goals and create a strong online presence.</span>
      <div className="workImg">
        <div className='W'><img src={Wimg1} alt="" className="wImg" /></div>
        <div className='W'><img src={Wimg2} alt="" className="wImg" /></div>
        <div className='W'><img src={Wimg3} alt="" className="wImg" /></div>
        <div className='W'><img src={Wimg4} alt="" className="wImg" /></div>
        <div className='W'><img src={Wimg5} alt="" className="wImg" /></div>
        <div className='W'><img src={Wimg6} alt="" className="wImg" /></div>
      
      </div>
      <button className="workBtn">See More</button>
     </section>
    </>
  )
}

export default Work
