import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Navbar.css'

export class navbar extends Component {

    render() {
        return (
                <>
                  <nav className='menu-bar'>
                  <img src="./logo-removebg-preview.png" alt="logo"/>
                    <span>aptitude</span>
                        <ul>
                        <li><a href="/">aptitude</a></li>
                        <li>numerics</li>
                        <li>aptitude</li>
                        <li>numerics</li>
                        
                        </ul>
                    <input value="search"/>
                        <button>login</button>
                        <button>signup</button>
                  </nav>
                </>         
            )
    }
}

                            export default navbar



// import React from 'react';
// // import './Header.css';

// const Navbar = () => {
//   return (
//     <header className="header">
//       <div className="logo">Aptitude Logo</div>
//       <input type="text" placeholder="Search..." className="search-bar" />
//       <div className="auth-buttons">
//         <button>Login</button>
//         <button>Sign Up</button>
//       </div>
//       <div className="useful-buttons">
//         <button>Useful Links</button>
//         <div className="dropdown">
//           <button className="dropbtn">Options</button>
//           <div className="dropdown-content">
//             <li>
//             <a href="/">Link 1</a>
//             <a href="/">Link 2</a>
//             <a href="/">Link 3</a>
//             </li>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar