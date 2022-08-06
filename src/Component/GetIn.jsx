import React from 'react'

export default function GetIn() {
  return (
   <section>
   <div className='container-fluid'>
     <div className='row p-4 mt-5 getback'>
       <div className='col-md-6'>
         <img src='./Img/gettouch.png'/>
       </div>
       <div className='col-md-6'>
         <h1>Get In Touch With Us</h1>
         <p className='pcolor'>When unknow printer took a gallery of type and scramblted it to make a<br/> type specimen book</p>
         <form action="#" className='w-100'>
           <input type="text" className='tinput' placeholder='First Name' />
           <input type="text" className='tinput' placeholder='Last Name' /><br/>
           <input type="text" className='tinput' placeholder='Email Address' />
           <input type="text" className='tinput' placeholder='Phone no' /><br/>
           <textarea placeholder='Message' className='tinput1'></textarea>
           <button className=' btn hbtn mt-3 ml-4'>SUBMIT NOW</button>
         </form>
       </div>
     </div>
   </div>
  </section>
  )
}
