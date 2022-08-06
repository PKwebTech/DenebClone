import React from 'react';
import './index.css';
import Why from './Component/Why.jsx';
import Banner from './Component/Banner';
import Getin from './Component/GetIn.jsx';


var project1=[
  {img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_1.68e3f4f2.jpg',},
  {img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_2.65e7f335.jpg',},
  {img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_5.d954e6cb.jpg'},
  {img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_3.3a8d653f.jpg',},
  {img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_4.c4879450.jpg',},
  {img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_5.d954e6cb.jpg',},
  {img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_9.ba24cee9.jpg',},
  {img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_7.34d58648.jpg',},
  {img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_8.bc12e6fa.jpg',},
]

var project2=[
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_8.bc12e6fa.jpg',
    title:'App Development'
  },
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_7.34d58648.jpg',
    title:'Graphics Designer'
  },
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_5.d954e6cb.jpg',
    title:'Development'
    
  },
]
var project3=[
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_2.65e7f335.jpg',
    title:'Video Editing',
    des:'Editing'
  },
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_3.3a8d653f.jpg',
    title:'Programming',
    des:'Coding'
  },
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_4.c4879450.jpg',
    title:'Traveling App',
    des:'Traveling'
  },
]
var project4=[
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_3.3a8d653f.jpg',
    title:'Branding And Marketing',
    des:'Development'
  },
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_6.acef031b.jpg',
    title:'Branding',
    des:'Development'
  },
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_9.ba24cee9.jpg',
    title:'Marketing',
    des:'Development'
  },
]
var project5=[
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_5.d954e6cb.jpg',
    title:'Mobile Apps',
    des:'Development'
  },
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_7.34d58648.jpg',
    title:'Branding',
    des:'Development'
  },
  {
     img:'https://deneb-reactjs.tortoizthemes.com/assets/portfolio_8.bc12e6fa.jpg',
    title:'Marketing',
    des:'Development'
  },
]
export default class Portfolio extends React.Component {
  constructor(){
    super();
    this.state={
      pro1:true,
      pro2:false,
      pro3:false,
      pro4:false,
      pro5:false
    }
  }
  pro1(){
    this.setState({
      pro1:!this.state.pro1,
      pro2:false,
      pro3:false,
      pro4:false,
      pro5:false
    })
    document.getElementById('pbtn1').classList.add('btnactive');
    document.getElementById('pbtn2').classList.remove('btnactive');
    document.getElementById('pbtn3').classList.remove('btnactive');
    document.getElementById('pbtn4').classList.remove('btnactive');
    document.getElementById('pbtn5').classList.remove('btnactive');
  }
  pro2(){
    this.setState({
      pro2:!this.state.pro2,
      pro1:false,
      pro3:false,
      pro4:false,
      pro5:false,
      
    })
    document.getElementById('pbtn2').classList.add('btnactive');
    document.getElementById('pbtn1').classList.remove('btnactive');
    document.getElementById('pbtn3').classList.remove('btnactive');
    document.getElementById('pbtn4').classList.remove('btnactive');
    document.getElementById('pbtn5').classList.remove('btnactive');
  }
  pro3(){
    this.setState({
      pro3:!this.state.pro3,
      pro1:false,
      pro2:false,
      pro4:false,
      pro5:false,
    })
    document.getElementById('pbtn3').classList.add('btnactive');
    document.getElementById('pbtn1').classList.remove('btnactive');
    document.getElementById('pbtn2').classList.remove('btnactive');
    document.getElementById('pbtn4').classList.remove('btnactive');
    document.getElementById('pbtn5').classList.remove('btnactive');
  }
  pro4(){
    this.setState({
      pro4:!this.state.pro4,
      pro1:false,
      pro2:false,
      pro3:false,
      pro5:false,
    })
    document.getElementById('pbtn4').classList.add('btnactive');
    document.getElementById('pbtn1').classList.remove('btnactive');
    document.getElementById('pbtn2').classList.remove('btnactive');
    document.getElementById('pbtn3').classList.remove('btnactive');
    document.getElementById('pbtn5').classList.remove('btnactive');
  }
  pro5(){
    this.setState({
      pro5:!this.state.pro5,
      pro1:false,
      pro2:false,
      pro3:false,
      pro4:false,
    })
    document.getElementById('pbtn5').classList.add('btnactive');
    document.getElementById('pbtn1').classList.remove('btnactive');
    document.getElementById('pbtn2').classList.remove('btnactive');
    document.getElementById('pbtn3').classList.remove('btnactive');
    document.getElementById('pbtn4').classList.remove('btnactive');
  }
  render() {
    return (
         <>
    {/************************* * contact  Banner *********************************** */}
      
      <section>
    <div className='container-fluid'>
    <div className='row cbanner'>
      <div className='col-md-5 ctext'>
        <h1 className='font-weight-bold'>portfolios</h1>
        <p className='ml-2 text-warning'><a href='/' className='text-warning'>HOME</a><span className='ml-2'><i class="fas fa-angle-right"></i></span>portfolios</p>
      </div>
    </div>
  </div>
  </section>

  {/****************************** Leatest Project *************************************/}
  <section>
    <div className='container projectback mb-5 mt-5'>
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
          <button className='btn' id='pbtn3'onClick={()=>this.pro3()}>BRANDING</button>
          <button className='btn' id='pbtn4'onClick={()=>this.pro4()}>SEO</button>
          <button className='btn' id='pbtn5'onClick={()=>this.pro5()}>Apps</button>
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
          project4.map((val)=>{
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
       {this.state.pro5 ?  
          project5.map((val)=>{
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

{/****************************** What pepole say *************************************/}
          <Why/> 
{/****************************** Get in Touch *************************************/}
          <Getin/>
{/****************************** Banner *************************************/}
         <Banner/>
         </>
    )
  }
}
