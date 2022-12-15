import React, { Component} from 'react';
import {FaArrowDown} from 'react-icons/fa'
import './styles/header.css'

export default class Header extends Component {
  render(){
    // const downBtn = document.querySelector('#downBtn')
    // downBtn.onClick()
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
    
          <FaArrowDown id='downBtn'/>
          <p style={{position: 'absolute', textAlign:'center', width:'auto', top:'90%'}}>Learn More</p>

        </div>
      </header>
    );
  }
}
