import React, { useState } from 'react';
import './navbar.css';
import logo1 from '../../allImgs/logo1.png';
import { FaCommentAlt } from 'react-icons/fa';
import {Link} from 'react-scroll';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
     <>
      <nav className="navbar">
        <img src={logo1} alt='logo' className='logo'/>
        <div className='Menu'>
          <Link activeClass='active' to='intro' spy={true}smooth={true} offset={-100} duration={500} className="menuListItem" >Home</Link>
          <Link activeClass='active' to='skills' spy={true}smooth={true} offset={-120} duration={500}  className="menuListItem" >About </Link>
          <Link activeClass='active' to='works' spy={true}smooth={true} offset={-100} duration={500}  className="menuListItem" >Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true}smooth={true} offset={-100} duration={500}  className="menuListItem" >Contact</Link>
        </div>
        <button className='MenuBtn' onClick={()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'});}}><FaCommentAlt className='btnImg'/>Contact Me</button>
        
        <GiHamburgerMenu id='bar' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true}smooth={true} offset={-100} duration={500} className="ListItem">Home</Link>
          <Link activeClass='active' to='skills' spy={true}smooth={true} offset={-120} duration={500}  className="ListItem">About </Link>
          <Link activeClass='active' to='works' spy={true}smooth={true} offset={-100} duration={500}  className="ListItem">Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true}smooth={true} offset={-100} duration={500}  className="ListItem">Client</Link>
          <Link activeClass='active' to='contact' spy={true}smooth={true} offset={-100} duration={500}  className="ListItem">Contact</Link>
        </div>
      </nav>
     </>
  )
}

export default Navbar
