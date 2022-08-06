import React from 'react'

export default function Scard(props) {
  return (
   <>
   <div className='card scard text-center'>
    <div className='card-header bg-white' style={{border:'none'}}>
    <img src={props.img} className='simg'/>
    </div>
     <h4 className=' mt-5'>{props.title}</h4>
     <p className='pcolor'>{props.des}</p>
    <span style={{color:'black'}}>{props.icon}<span className='ml-3'>{props.link}</span> </span>
   </div>

   </>
   
  )
}
