import React from 'react';
import './index.css';

export default function Contact() {
  return (
    <>
{/************************* * contact  Banner *********************************** */}
  <section>
  <div className='container-fluid'>
    <div className='row cbanner'>
      <div className='col-md-5 ctext'>
        <h1>Contact Us</h1>
        <p className='ml-2 text-warning'><a href='/' className='text-warning'>HOME</a><span className='ml-2'><i class="fas fa-angle-right"></i></span> CONTACT US</p>
      </div>
    </div>
  </div>
  </section>

  {/************************* * contact  form *********************************** */}
  <section>
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-12'>
          <h1 className='font-weight-bold'>Send us a message</h1>
          <p className='pcolor'>When unknow printer took a gallery of type and scramblted it to make a <br/>type specimen book</p>
        </div>
        </div>
        
        <div className='row mb-5'>
  
          <div className='col-md-6'>
            <input type='text' placeholder='First name' className='finput mt-4'/>
          </div>
          <div className='col-md-6'>
            <input type='text' placeholder='Last name' className='finput mt-4'/>
          </div>
          <div className='col-md-6'>
            <input type='text' placeholder='Email' className='finput mt-4'/>
          </div>
          <div className='col-md-6'>
            <input type='text' placeholder='Phone' className='finput mt-4'/>
          </div>
          <div className='col-md-6'>
            <input type='text' placeholder='Project title' className='finput mt-4'/>
          </div>
          <div className='col-md-6'>
            <select  className='finput mt-4'>
              <option>Choose Service</option>
              <option>Web & Graphic Design</option>
              <option>Apps & Web Development</option>
              <option>SEO & Marketing</option>
           </select>
          </div>
          <div className='col-md-12 mt-5'>
            <textarea className='finput p-2' placeholder='Your Message ' style={{height:'130px'}}></textarea>
            <button className='hbtn btn mt-3' type='submit'>SUBMIT NOW</button>
          </div>
        </div>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 p-0'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0524950394515!2d74.72807931442507!3d19.105352856015013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb17ca9d749e5%3A0x516744f9b2f35ec9!2sA2Z%20INFOTECH!5e0!3m2!1sen!2sin!4v1655230680873!5m2!1sen!2sin" width="100%" height="490" style={{border:'none'}}></iframe>
            </div>
      </div>
    </div>
  </section>

           {/****************************** Banner *************************************/}
           <section>
            <div className='container mb-5'>
              <div className='row justify-content-center mt-4'>
                <div className='col-md-10 banner mt-5  banner p-4 text-white shadow'>
                  <h2>Have Any Project in Mind ?</h2>
                  <div className='row'>
                    <div className='col-md-6'> 
                    <p className='mt-4'>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo sed ut nibh feugiat, auctor enim quis.</p></div>
                    <div className='col-md-6 text-right'> 
                    <button className='btn bg-white mr-5'>HIRE US</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  </>
  )
}
