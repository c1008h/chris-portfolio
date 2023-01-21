import React from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import '../styles/skills.css'
import '../styles/index.css'


export default function About() {
    return (
        <section id='skill'>
            <h3 style={{textAlign:'center', fontSizeAdjust:'inherit'}}>Skills</h3>
            <div className='col-12 row' style={{justifyContent:'center'}}>
                <div id='frontend' className='col-4' style={{textAlign:'center', justifyContent:'center'}}>
                    <p>Frontend:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavScript</li>
                        <li>React</li>
                        <li>jQuery</li>
                        <li>Responsive Design</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div id='backend' className='col-4' style={{textAlign:'center'}}>
                    <p>Backend:</p>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySql</li>
                        <li>MongoDB</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};