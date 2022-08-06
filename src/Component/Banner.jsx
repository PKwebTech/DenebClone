import React from 'react'

export default function Banner() {
  return (
   <section>
   <div className='container mb-5'>
     <div className='row justify-content-center mt-4 footbanner'>
       <div className='col-md-10 banner mt-5 banner  p-4 text-white  shadow'>
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
  )
}
