import React from 'react'

var price=[
  {
    img:'./Img/price1.png',
    title:'Basic',
    des:<p>Graphic Design<br/>Web Design <br/>UI/UX<br/>HTML/CSS<br/>SEO Marketing<br/>Business Analysis</p>,
    price1:'$75'

  },
  {
    img:'./Img/price1.png',
    title:'Standard',
    des:<p>Graphic Design<br/>Web Design <br/>UI/UX<br/>HTML/CSS<br/>SEO Marketing<br/>Business Analysis</p>,
    price1:'$95'

  },
  {
    img:'./Img/price1.png',
    title:'premium',
    des:<p>Graphic Design<br/>Web Design <br/>UI/UX<br/>HTML/CSS<br/>SEO Marketing<br/>Business Analysis</p>,
    price1:'$99'

  },
  
]
export default function Price() {
  return (
    <section>
    <div className='container mb-5'>
      <div className='row mt-5'>
        <div className='col-md-12 text-center mt-3'>
          <h1>Afforable Pricing</h1>
          <p className='pcolor mt-3'>When unknow printer took a gallery of type and scramblted it to make a type specimen book</p>
        </div>
        </div>
        <div className='row'>
          {price.map((val)=>{
            return(
              <div className='col-md-4 mt-5'>
              <div className='card scard text-center shadow rounded p-3'>
               <div className='card-header bg-white' style={{border:'none'}}>
                  <img src={val.img} style={{width:'60px'}}/>
                  <h2 className='mt-3'>{val.title}</h2>
                  <p>{val.des}</p>
                  <h3 className='font-weight-bold'><span className='h1'>{val.price1}</span><span className='text-warning'>/ Month</span></h3><br/><br/>
                  <button className=' btn hbtn'>START NOW</button>
                 </div>
                   
                  </div>
              </div>
            )
          })}
         
          
        </div>
     
    </div>
   </section>
  )
}
