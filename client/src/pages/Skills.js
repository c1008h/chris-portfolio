import React from 'react';
import '../styles/skills.css'
import '../styles/index.css'
import { DB, FE, BE, TF } from '../constants/skillData';

export default function About() {
    return (
        <section id='skill'>
            <h3 style={{textAlign:'center', fontSizeAdjust:'inherit'}}>Skills</h3>
            <div className='col-12 row' id='container'>
                <div id='feIconContainer'>
                    {FE ? FE.map((item) => (
                        <img src={item.icon} alt=''  />
                    )): null}
                </div>
                <div id='beIconContainer'>
                    {BE ? BE.map((item) => (
                        <img src={item.icon} alt=''  />
                    )): null}
                </div>
                <div id='dbIconContainer'>
                    {DB ? DB.map((item) => (
                        <img src={item.icon} alt=''  />
                    )): null}
                </div>
                <div id='tfIconContainer'>
                    {TF ? TF.map((item) => (
                        <img src={item.icon} alt='' />
                    )): null}
                </div>
            </div>
        </section>
    )
};