import React from 'react'
import '../index.css';
export default function Footer() {
  return (
    <div className='container-fluid mt-4 footer'>
      <div className='row p-5 '>
         <div className='col-md-4'>
            <img src='./Img/logo.png'/>
            <p className='pcolor mt-4'>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec tortor praesent consequat urna.</p>
           <span className='sicon'><i class="fab fa-facebook"></i></span>
           <span className='sicon'><i class="fab fa-twitter"></i></span>
           <span className='sicon'><i class="fab fa-instagram"></i></span>
         </div>
         <div className='col-md-4'>
            <h4>Links</h4>
            <li className='flink'>About Us</li>
            <li className='flink'>Services</li>
            <li className='flink'>Portfolios</li>
            <li className='flink'>Contact Us</li>
            <li className='flink'>Blog</li>
         </div>
         <div className='col-md-4'>
            <h4>Contact Us</h4>
            <div className='row'>
               <div className='col-md-1 mt-2'><i class="fas fa-phone-alt mr-3"></i></div>
               <div className='col-md-11 mt-2'><p>1800-121-3637 <br/>+91 924-614-7999</p></div>
               <div className='col-md-1 mt-2'><i class="fas fa-envelope mr-3"></i></div>
               <div className='col-md-11 mt-2'>  <p>info@deneb.com <br/>services@deneb.com</p></div>
               <div className='col-md-1 mt-2'><i class="fas fa-map-marker-alt mr-3"></i></div>
               <div className='col-md-11 mt-2'> <p>125, Park street aven, Brocklyn, <br/>Newyork.</p></div>
            </div>
         </div>
        
      </div>
      <div className='row'>
      <div className='col-md-12 mt-3 p-2 text-center bg-white'>
            <p>Copyright © 2020 <span className='text-warning'>Deneb.</span> All rights reserved.</p>
         </div>
      </div>
    </div>
  )
}
