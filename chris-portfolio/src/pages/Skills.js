import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/skills.css'
import '../styles/index.css'


export default function About() {

    // const Skills = [{ 'HTML5', 'CSS3',
    // }]

    return (
        <section id='skill'>
            <h3 style={{textAlign:'center', fontSizeAdjust:'inherit'}}>Skills</h3>
            <div id='skillcircles' className='row'>
                <div className='col-md-4 col-sm-6 skill'>
                    <div style={{ width: 200, height: 200 }} className='circles'>
                    <CircularProgressbar value={85} text={`85%`}/>
                    </div>
                    <h4>HTML5/CSS3</h4>
                </div>

                <div className='col-md-4 col-sm-6 skill'>
                    <div style={{ width: 200, height: 200 }} className='circles'>
                    <CircularProgressbar value={50} text={`80%`}/>
                    </div>
                    <h4>JavaScript/jQuery</h4>
                </div>

                <div className='col-md-4 col-sm-6 skill'>
                    <div style={{ width: 200, height: 200 }} className='circles'>
                    <CircularProgressbar value={75} text={`75%`}/>
                    </div>
                    <h4>React</h4>
                </div>

                <div className='col-md-4 col-sm-6 skill'>
                    <div style={{ width: 200, height: 200 }} className='circles'>
                    <CircularProgressbar value={60} text={`60%`}/>
                    </div>
                    <h4>SQL/NoSql</h4>
                </div>

                <div className='col-md-4 col-sm-6 skill'>
                    <div style={{ width: 200, height: 200 }} className='circles'>
                    <CircularProgressbar value={85} text={`80%`}/>
                    </div>
                    <h4>asdf</h4>
                </div>

                <div className='col-md-4 col-sm-6 skill'>
                    <div style={{ width: 200, height: 200 }} className='circles'>
                    <CircularProgressbar value={65} text={`65%`}/>
                    </div>
                    <h4>asfgh</h4>
                </div>

            </div>
        </section>
    )
};