import React, { Component } from 'react'
import Scard from './Component/Scard.jsx';
import Why from './Component/Why.jsx';
import Banner from './Component/Banner.jsx';
import Getin from './Component/GetIn.jsx';
import Price from './Component/Price.jsx';
var scard=[
  {
    'img':'https://deneb-reactjs.tortoizthemes.com/assets/icon_1.9993585c.png',
    'title':'Web Solution',
    'des':<p>Aliquam sollicitudin consequat <br/>commodo. Cras bibendum ipsum <br/>eu augue egestas laciniaam eu <br/>ornare ipsum, quis tristique ligula.</p>,
    'icon':<i class="fas fa-play "></i>,
    'link':'READ MORE'

  },
  {
    'img':'https://deneb-reactjs.tortoizthemes.com/assets/icon_2.a4a5bfa0.png',
    'title':'Strategy & Research',
    'des':<p>Aliquam sollicitudin consequat <br/>commodo. Cras bibendum ipsum <br/>eu augue egestas laciniaam eu <br/>ornare ipsum, quis tristique ligula.</p>,
    'icon':<i class="fas fa-play "></i>,
    'link':'READ MORE'

  },
  {
    'img':'https://deneb-reactjs.tortoizthemes.com/assets/icon_2.a4a5bfa0.png',
    'title':'Web development',
    'des':<p>Aliquam sollicitudin consequat <br/>commodo. Cras bibendum ipsum <br/>eu augue egestas laciniaam eu <br/>ornare ipsum, quis tristique ligula.</p>,
    'icon':<i class="fas fa-play "></i>,
    'link':'READ MORE'

  }
]

var project1=[
  {
    img:'http://localhost:3000/Img/pro1.png',
  },
  {
    img:'http://localhost:3000/Img/pro2.png',
  },
  {
    img:'http://localhost:3000/Img/pro3.png',
  }
]

var project2=[
  {
    img:'http://localhost:3000/Img/pro3.png',
    title:'App Development'
  },
  {
    img:'http://localhost:3000/Img/pro2.png',
    title:'Graphics Designer'
  },
  {
    img:'http://localhost:3000/Img/pro1.png',
    title:'Development'
  },
]
var project3=[
  {
    img:'http://localhost:3000/Img/pro1.png',
    title:'Video Editing',
    des:'Editing'
  },
  {
    img:'http://localhost:3000/Img/pro2.png',
    title:'Programming',
    des:'Coding'
  },
  {
    img:'http://localhost:3000/Img/pro3.png',
    title:'Traveling App',
    des:'Traveling'
  },
]

var blog=[
  {
    img:'https://tarettis.sirv.com/Images/blog_09.jpg',
    date:'July 21, 2020',
    title:'Fitness Mantra To Live Fit Life',
    des:<p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament Conveying concluded newspaper rapturou.</p>

  },
  {
    img:'https://tarettis.sirv.com/Images/blog_05.jpg',
    date:'May 03, 2020',
    title:'Beautiful & Special Moment',
    des:<p>Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at.</p>

  },
  {
    img:'https://tarettis.sirv.com/Images/blog_06.jpg',
    date:'Apr 02, 2020',
    title:'Beautiful & Special Moment',
    des:<p>Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at.</p>

  },
]
export default class Home extends Component {
  constructor(){
    super();
    this.state={
      pro1:true,
      pro2:false,
      pro3:false,
      pro4:false
    }
  }
  pro1(){
    this.setState({
      pro1:!this.state.pro1,
      pro2:false,
      pro3:false,
      pro4:false,
    })
    document.getElementById('pbtn1').classList.add('btnactive');
    document.getElementById('pbtn2').classList.remove('btnactive');
    document.getElementById('pbtn3').classList.remove('btnactive');
    document.getElementById('pbtn4').classList.remove('btnactive');
  }
  pro2(){
    this.setState({
      pro2:!this.state.pro2,
      pro1:false,
      pro3:false,
      pro4:false,
      
    })
    document.getElementById('pbtn2').classList.add('btnactive');
    document.getElementById('pbtn1').classList.remove('btnactive');
    document.getElementById('pbtn3').classList.remove('btnactive');
    document.getElementById('pbtn4').classList.remove('btnactive');
  }
  pro3(){
    this.setState({
      pro3:!this.state.pro3,
      pro1:false,
      pro2:false,
      pro4:false,
    })
    document.getElementById('pbtn3').classList.add('btnactive');
    document.getElementById('pbtn1').classList.remove('btnactive');
    document.getElementById('pbtn2').classList.remove('btnactive');
    document.getElementById('pbtn4').classList.remove('btnactive');
  }
  pro4(){
    this.setState({
      pro4:!this.state.pro4,
      pro1:false,
      pro2:false,
      pro3:false,
    })
    document.getElementById('pbtn4').classList.add('btnactive');
    document.getElementById('pbtn1').classList.remove('btnactive');
    document.getElementById('pbtn2').classList.remove('btnactive');
    document.getElementById('pbtn3').classList.remove('btnactive');
  }
  render() {
    return (
      <>

     {/* ------------------------------Slider------------------------------------------------ */}

<section>
    <div className='container-fluid'>
      <div className='row mt-3 '>
        <div className='col-md-12'>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
     <div className='row '>
      <div className='col-md-6 slider1 mt-5'>
        <div className='slidertext'>
      <h1>We Are Creative</h1>
      <h1 className='stext'>Deneb Agency</h1>
      <h5 className='mt-4'>We Are Professional Freelance Web Designer</h5>
      <p className='mt-3'>Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.</p>
      <button className='btn hbtn'>HIRE US</button>
      </div>
      </div>
      <div className='col-md-6'>
        <img src='http://localhost:3000/Img/slider2.png' className='w-100 simg1'/>
      </div>
     </div>
    </div>
    <div class="carousel-item ">
     <div className='row '>
      <div className='col-md-6 slider1 mt-5'>
        <div className='slidertext'>
      <h1>We Are Creative</h1>
      <h1 className='stext'>Deneb Agency</h1>
      <h5 className='mt-4'>We Are Professional Freelance Web Designer</h5>
      <p className='mt-3'>Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.</p>
      <button className='btn hbtn'>HIRE US</button>
      </div>
      </div>
      <div className='col-md-6'>
        <img src='http://localhost:3000/Img/slider3.png' className='w-100 simg1'/>
      </div>
     </div>
    </div>
    <div class="carousel-item">
     <div className='row '>
      <div className='col-md-6 slider1 mt-5'>
        <div className='slidertext'>
      <h1>We Are Creative</h1>
      <h1 className='stext'>Deneb Agency</h1>
      <h5 className='mt-4'>We Are Professional Freelance Web Designer</h5>
      <p className='mt-3'>Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.</p>
      <button className='btn hbtn'>HIRE US</button>
      </div>
      </div>
      <div className='col-md-6'>
        <img src='http://localhost:3000/Img/slider1.png' className='w-100 simg1'/>
      </div>
     </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
        </div>
       
      </div>
    </div>

    </section>

    {/* ------------------------------Our Services------------------------------------------------ */}
   <section>
    <div className='container-fluid mb-5'>
      <div className='row mt-5 justify-content-center p-5'>
        <div className='col-md-12 text-center'>
        <img src='./Img/icon.png' className='iconimg'/>
        <h1 className='font-weight-bold'>Our Service</h1>
        <p className='mt-3 pcolor'>When unknow printer took a gallery of type and scramblted it to makea <br/> type specimen book</p>
        </div>
        {scard.map((val)=>{
          return(
           <div className='col-md-4  sbox mt-5'>
             <Scard
               img={val.img}
               title={val.title}
               des={val.des}
               icon={val.icon}
               link={val.link}
             />
           </div>
          )
        })}
       
      </div>
    </div>

    </section>

    {/************************ * Why You Hire us **********************************************************/}

    <section>
      <div className='container'>
        <div className='row hbox'>
          <div className='col-md-6'>
            <img src='http://localhost:3000/Img/hireus.png'/>
          </div>
          <div className='col-md-6'>
          <img src='http://localhost:3000/Img/icon.png' className='iconimg' style={{left:'10px'}}/>

            <h1 className='font-weight-bold'>Why You Hire Us?</h1>
            <p className='pcolor mt-5'>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.</p>
            <p className='pcolor mt-3'>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p>
            <button className='btn hbtn mt-4'>READ MORE</button>
          </div>
        </div>
      </div>
    </section>

  {/***************************** * Record section *****************************************/}
  <section>
    <div className='container-fluid mt-3 mb-5 rbox'>
      <div className='row mt-5 p-3 justify-content-center '>
        <div className='col-md-5 mt-5'>
          
          <h1 className='font-weight-bold'>Over 500+ Completed <br/>work & Still Counting</h1>
          <p className='pcolor mt-4'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at orci non risus luctus commodo. Ut nibh tellus, faucibus nec gravida.</p>
          <p className='pcolor mt-3'>Duis quis ipsum leo. Praesent vitae tellus ac ante porta mattis vel non ex. Quisque a finibus justo.</p>
        </div>
        <div className='col-md-6  '>
          <div className='row justify-content-center p-4 '>
            <div className=' text-center rbox1 shadow'>
              <img src='http://localhost:3000/Img/r1.png' className='mt-4'/>
              <h2 className='mt-4 text-warning'>300+</h2>
              <p className='pcolor'>Projects Done</p>
            </div>
            <div className=' text-center rbox1 shadow ml-4 mt-4'>
              <img src='http://localhost:3000/Img/r2.png' className='mt-4'/>
              <h2 className='mt-4 text-warning'>250+</h2>
              <p className='pcolor'>Projects Done</p>
            </div>
          </div>
          <div className='row justify-content-center p-4'>
            <div className=' text-center rbox1 shadow'>
              <img src='http://localhost:3000/Img/r3.png' className='mt-4'/>
              <h2 className='mt-4 text-warning'>200+</h2>
              <p className='pcolor'>Active Projects</p>
            </div>
            <div className=' text-center rbox1 shadow ml-4 mt-4'>
              <img src='http://localhost:3000/Img/r4.png' className='mt-4'/>
              <h2 className='mt-4 text-warning'>5+</h2>
              <p className='pcolor'>Years Exerience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/****************************** Leatest Project *************************************/}
  <section>
    <div className='container projectback mb-5'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h1 className='font-weight-bold'>Our Latest Projects</h1>
          <p className='pcolor mt-3'>When unknow printer took a gallery of type and scramblted it to makea<br/> type specimen book</p>
        </div>
        </div>
        <div className='row mt-4'>
          <div className='col-md-12 text-center'>
          <button className='btn btnactive' id='pbtn1' onClick={()=>this.pro1()}>DEVELOPMENT</button>
          <button className='btn' id='pbtn2'onClick={()=>this.pro2()}>WEB DESIGN</button>
          <button className='btn' id='pbtn3'onClick={()=>this.pro3()}>APPS DEVEOPMENT</button>
          <button className='btn' id='pbtn4'onClick={()=>this.pro4()}>MARKETING</button>
          </div>
          {this.state.pro1 ? project1.map((val)=>{
            return(
              <div className='col-md-4 mt-5'>
              <div className='card pcard'style={{border:'none'}}>
              <div className='card-header p-0'>
              <img src={val.img} className='w-100 pcardimg'/>
              </div>
                <h4 className='mt-3 ml-2'>Design & Develop</h4>
                <p className='pcolor ml-2 mb-2'>Design</p>
              </div>
            </div>
            )
          })
       :null}

       {this.state.pro2 ? project2.map((val)=>{
            return(
              <div className='col-md-4 mt-5'>
              <div className='card pcard'style={{border:'none'}}>
              <div className='card-header p-0'>
              <img src={val.img} className='w-100 pcardimg'/>
              </div>
                <h4 className='mt-3 ml-2'>{val.title}</h4>
                <p className='pcolor ml-2 mb-2'>Design</p>
              </div>
            </div>
            )
          }) : null}
         
         {this.state.pro3 ?  project3.map((val)=>{
            return(
              <div className='col-md-4 mt-5'>
              <div className='card pcard'style={{border:'none'}}>
              <div className='card-header p-0'>
              <img src={val.img} className='w-100 pcardimg'/>
              </div>
                <h4 className='mt-3 ml-2'>{val.title}</h4>
                <p className='pcolor ml-2 mb-2'>{val.des}</p>
              </div>
            </div>
            
            )
          }):null}
          
          {this.state.pro4 ?  
          project3.map((val)=>{
            return(
              <div className='col-md-4 mt-5 '>
              <div className='card pcard'style={{border:'none'}}>
              <div className='card-header p-0'>
              <img src={val.img} className='w-100 pcardimg'/>
              </div>
                <h4 className='mt-3 ml-2'>{val.title}</h4>
                <p className='pcolor ml-2 mb-2'>{val.des}</p>
              </div>
            </div>
            
            )
          }) : null}
       
         

        </div>
      
    </div>
  </section>


   {/****************************** Afforable Pricing *************************************/}
    <Price/>

     {/****************************** What pepole say *************************************/}
     <Why/>

      {/****************************** Latest Blog *************************************/}
      <section>
        <div className='container'>
          <div className='row'>
           <div className='col-md-12 text-center'>
           <h1 className='mt-5'>Latest Blog</h1>
           <p className='pcolor'>When unknow printer took a gallery of type and scramblted it to make a <br/> type specimen book</p>
           </div>
           <div className='row'>
           {blog.map((val)=>{
            return(
              <div className='col-md-4 mt-4 mb-5'>
              <div className='card blogcard w-100'style={{border:'none'}}>
              <div className='card-header bg-white p-0' >
                <img src={val.img} className='w-100'style={{height:'250px'}}/>
                <div className='card-body'>
                <p className='text-warning mt-2'>{val.date}</p>
                <h5>{val.title}</h5>
                <p className='pcolor'>{val.des}</p>
                <span style={{color:'black'}}><i class="fas fa-play "></i><span className='ml-3'>READ MORE</span> </span>
                </div>
              </div>
              </div>
            </div>
            )
           })}
           </div>
          </div>
        </div>
      </section>

         {/****************************** Get in Touch *************************************/}
         <Getin/>

          {/****************************** Banner *************************************/}
        <Banner/>
    </>
    )
  }
}
