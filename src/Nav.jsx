import React from 'react'
import {Link} from 'react-router-dom';
import './index.css';
export default function Nav() {
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-light  mt-4">
   <img src='./Img/logo.png' className='ml-5'/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse mr-5" id="navbarSupportedContent">
    <ul class="navbar-nav  ml-auto">
      <li class="nav-item ">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item ">
        <Link class="nav-link" to="/about">About Us</Link>
      </li>
      <li class="nav-item ">
        <Link class="nav-link" to="/service">Services</Link>
      </li>
      <li class="nav-item ">
        <Link class="nav-link" to="/portfolio">Portfolio</Link>
      </li>
      <li class="nav-item ">
        <Link class="nav-link" to="/blog">Blog</Link>
      </li>
      <li class="nav-item ">
        <Link class="nav-link" to="/contact">Contact Us</Link>
      </li>
      <li class="nav-item ">
       <button className='btn hbtn'>HIRE US</button>
      </li>
   
    </ul>

  </div>
</nav>
   </>
  )
}
