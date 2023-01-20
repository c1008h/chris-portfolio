import React, { Component} from 'react';
import {FaArrowDown} from 'react-icons/fa'
import { Link } from 'react-scroll';
import '../styles/header.css'

export default class Header extends Component {
  render(){
    return (
      
      <header id='homepage' className='head col-12'>
        <div id='home' className='col-12' style={{overflow:'auto'}}>
          <span className='col-3 lefteye'>
            <span className='leftpupil'></span>
          </span>
          <span className='col-3 righteye'>
            <span className='rightpupil'></span>
          </span>
          <h1 className='responsive-headerline' id='name'>Chris Hong</h1>
    
          <Link activeClass='active' to='about' spy={true}
          smooth={true} offset={0} duration={500}>
            <FaArrowDown id='downBtn'/>
          </Link>
        </div>
      </header>
    );
  }
}
