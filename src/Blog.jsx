import React from 'react';
import Banner from './Component/Banner.jsx';
var blog=[{
   img:'http://localhost:3000/Img/blog1.png',
   span:<span><i class="fas fa-clock"></i> July 21, 2020  <i class="fas fa-user"></i> By Tortoiz</span>,
   title:'Fitness Mantra To Live Fit Life',
   para:`Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament`,
   icon:<span><i class="fas fa-play "></i><span className='ml-3'>READ MORE</span> </span>
},
{
  img:'http://localhost:3000/Img/blog1.png',
  span:<span><i class="fas fa-clock"></i> May 03, 2020 <i class="fas fa-user"></i> By Tortoiz</span>,
  title:'Beautiful & Special Moment',
  para:`Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at.`,
  icon:<span><i class="fas fa-play "></i><span className='ml-3'>READ MORE</span> </span>
},
{
  img:'http://localhost:3000/Img/blog1.png',
  span:<span><i class="fas fa-clock"></i>  Apr 02, 2020  <i class="fas fa-user"></i> By Tortoiz</span>,
  title:'Beauti lies within special',
  para:`Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at.`,
  icon:<span><i class="fas fa-play "></i><span className='ml-3'>READ MORE</span> </span>
},
{
  img:'http://localhost:3000/Img/blog1.png',
  span:<span><i class="fas fa-clock"></i> Jan 02, 2020  <i class="fas fa-user"></i> By Tortoiz</span>,
  title:'Sliding My Way To Life',
  para:`Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He less do quit evil is`,
  icon:<span><i class="fas fa-play "></i><span className='ml-3'>READ MORE</span> </span>
},
{
  img:'http://localhost:3000/Img/blog1.png',
  span:<span><i class="fas fa-clock"></i> Feb 21, 2020 <i class="fas fa-user"></i> By Tortoiz</span>,
  title:'Memories From Last Summer',
  para:`Purus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortor montes placerat tortor natoque ante volutpat Class class platea hymenaeos. Nibh. Nec Ipsum tincidunt nam cubilia. Quisque aptent, fusce`,
  icon:<span><i class="fas fa-play "></i><span className='ml-3'>READ MORE</span> </span>
}

]
export default function Blog() {
  return (
       <>
        <section>
  <div className='container-fluid'>
    <div className='row cbanner'>
      <div className='col-md-5 ctext'>
        <h1>Blog</h1>
        <p className='ml-2 text-warning'><a href='/' className='text-warning'>HOME</a><span className='ml-2'><i class="fas fa-angle-right"></i></span>Blog</p>
      </div>
    </div>
  </div>
  </section>
  <section>
    <div className='container p-4'>
      <div className='row'>
          <div className='col-md-8 mt-4'>
          <img src={blog[0].img} className='w-100'/>
          <span style={{position:'relative',top:'20px'}}>{blog[0].span}</span>
          <h2 className='mt-5'>{blog[0].title}</h2>
          <p className='pcolor'>{blog[0].para}</p>
          <span style={{color:'black'}}>{blog[0].icon}</span>
        </div>
        <div className='col-md-4'>
          <input type='text' placeholder='Search...' className='finput mt-4'/>
<h3 className='mt-4'>Category</h3>
<div className='row'>
  <div className='col-md-12 mt-4'>
    <span className='float-left'>Design</span> <span className='float-right'>15</span>
  </div>
  <div className='col-md-12 mt-4'>
    <span className='float-left'>Development </span> <span className='float-right'>10</span>
  </div>
  <div className='col-md-12 mt-4'>
    <span className='float-left'>SEO</span> <span className='float-right'>20</span>
  </div>
  <div className='col-md-12 mt-4'>
    <span className='float-left'>App Design</span> <span className='float-right'>8</span>
  </div>
  <div className='col-md-12 mt-4'>
    <span className='float-left'>Branding</span> <span className='float-right'>22</span>
  </div>

</div>
        </div>
 
      </div>
    </div>
  </section>

           <Banner/>
       </>

  )
}
