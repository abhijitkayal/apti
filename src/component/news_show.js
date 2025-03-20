import React, { Component } from 'react'
import news from './News';

import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  }from "react-router-dom";
  export default class news_shows extends Component {
    render() {
      return (
        
        <Router>
          
          <Routes>
            <Route exact path="/" element={<news key="general" pagesize={5} country="in" category="general" />}></Route>
            <Route exact path="/health" element={<news key="health" pagesize={5} country="in" category="health" />}></Route>
            <Route exact path="/business" element={<news key="business" pagesize={5} country="in" category="business" />}>
          
            
            </Route>
            <Route exact path="/sport" element={<news key="sport" pagesize={5} country="in" category="sport" />}>
            
            </Route>
          </Routes>
          </Router>
        
      )
    }
  }
