// import logo from './logo.svg';
// import './App.css';
// import Navbar from './component/Navbar'; 
// import Body from './component/Body'; 
// import Footer from './component/Footer'; 

// function App() {
//   return (
//     <>
//     <Navbar/>
//     <Body/>
//     <Footer/>

//     </>
//   );
// }

// export default App;

import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar'; 

import Body from './component/Body';
import Footer from './component/Footer';

function App() {
    return (

            <div className="App">
              <>
                <Navbar/>
                <Body/>
                <Footer/>
                
              </>
            </div>
    );
}

export default App;