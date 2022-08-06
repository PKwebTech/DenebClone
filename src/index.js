import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import About from './About';
import Services  from './Services.jsx';
import Portfolio from './Portfolio.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import Footer from './Component/Footer.jsx';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
ReactDOM.render(
   <>
   <Router>
      <Nav/>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/service' element={<Services/>}></Route>
         <Route path='/portfolio' element={<Portfolio/>}></Route>
         <Route path='/blog' element={<Blog/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
   </Router>
   </>,document.getElementById('root')
)