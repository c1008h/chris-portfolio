import React from 'react';
import {FaArrowDown} from 'react-icons/fa'
import { Link } from 'react-scroll';
import '../styles/header.css'

export default function Header() {
  // const code = `Hi, my name is Chris!`;
  
  // function TypeCode({ code }) {
  //   const [text, setText] = useState("");
  //   let i = 0;
  
  //   setTimeout(() => {
  //     const interval = setInterval(() => {
  //       if (i < code.length) {
  //         setText((prevText) => prevText + code[i]);
  //         i++;
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 50);
  //   }, 1000);
  
  //   return (
  //     <pre className="responsive-headerline" id="name">
  //       <code>{text}</code>
  //     </pre>
  //   );
  // }

  return (
    
    <header id='homepage' className='col-12'>
      <div id='home'>
        <pre className='responsive-headerline' id='name'>
          <code>
            &lt;h1&gt; Hi, my name is Chris! &lt;/h1&gt;
          </code>
        </pre>
        <Link activeClass='active' to='about' spy={true}
          smooth={true} offset={0} duration={500}>
          <FaArrowDown id='downBtn'/>
        </Link>
      </div>
    </header>
  );
  
}
