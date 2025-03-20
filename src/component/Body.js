// import React from 'react';
// import Section from './Section';

// const Body = () => {
//   return (
//     <main className="main-content">
//       <Section title="General Aptitude" />
//       <Section title="Interview" />
//       <Section title="Online Test" />
//       <Section title="Technical MCQs" />
//       <Section title="Current Affairs" />
//       <Section title="Language" />
//       <Section title="Latest News" />
//       <Section title="Notice Board" />
//     </main>
//   );
// };

// export default Body

import React from 'react';
import './Body.css'
import Newsitem from './Newsitem';
import news_shows from './news_show';
const Body = () => {
    return (
        <>
        <div className="container1">
 <div className="items">
    <div className="items-1">
    <div className="item-1">
       <h1>General Aptitude</h1>
       <ul>
        <li><a href="" >Arithmetic Aptitude</a></li>
        <li><a href="" >Data Interpretation</a></li>
        <li><a href="">Online Aptitude Test</a></li>
        <li><a href="" >Data Interpretation Test</a></li>
       </ul>
    </div>
    <div className="item-2">
        <h1>Interview</h1>
        <ul> 
            <li><a href="./database/current_affairs.html" >Current Affair</a></li>
            <li><a href="./database/indian_politics.html" >Indian Politics</a></li>
            <li><a href="./database/gk.html" >G.K</a></li>
            <li><a href="./database/general_science.html">General Science</a></li>
           </ul>
    </div>
   
</div>
<div className="items-2">
    <div className="item-3">
       <h1>Online Test</h1>
       <ul>
        <li><a href="">Aptitude Test</a></li>
        <li><a href="">Verbal Ability Test</a></li>
        <li><a href="./logicalquestion.html">Logical Reasoning Test</a></li>
        <li><a href="./database/java.html">Java Programming Test</a></li>
       </ul>
    </div>
    <div className="item-4">
        <h1>Technical MCQs</h1>
        <ul>
            <li><a href="./database/networking.html">Networking Questions</a></li>
            <li><a href="./database/digitalelectronics.html" >Database Questions</a></li>
            <li><a href="./database/basicelectronic.html" >Basic Electronics</a></li>
            <li><a href="./database/digitalelectronics.html">Digital Electronics</a></li>
           </ul>
    </div>
    
    
</div>
<div className="items-3">
    <div className="item-5">
        <h1>Current Affair & GK</h1>
        <ul>
            <li><a href="">Arithmetic Aptitude</a></li>
            <li><a href="">Data Interpretation</a></li>
            <li><a href="">Online Aptitude Test</a></li>
            <li><a href="" >Data Interpretation Test</a></li>
           </ul>
    </div>
    
    <div className="item-6">
        <h1>Language</h1>
        <ul>
         <li><a href="./database/cprogramming.html">C</a></li>
         <li><a href="./database/c++.html">C++</a></li>
         <li><a href="./database/java.html">Java</a></li>
         <li><a href="./database/python.html">Python</a></li>
        </ul>
     </div>
</div>
</div>
<div className="news-and-notice">
    <h1>news and notice</h1>
<div className="main">
    <h1>Latest News</h1>
    
<hr/>
<div className="all-notice">
    <h1>notice</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, minus!</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, eveniet.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, eveniet.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, eveniet.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, eveniet.</p>
</div>
</div>
</div>
</div>
<br/>
<div className="notice">
    <hr/>
    <h1 className="ani">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, omnis vocere sed eligeno, perferendis esse quas praesentium assumenda illo animi fugiat iusto?</h1>

    <h1 className="ani">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, omnis vocere sed eligeno, perferendis esse quas praesentium assumenda illo animi fugiat iusto?</h1>
<hr/>
</div>
{/* </div> */}
</>
    );
};

export default Body;