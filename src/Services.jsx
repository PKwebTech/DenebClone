import React from 'react';
import Why from './Component/Why.jsx';
import Getin from './Component/GetIn.jsx';
import Price from './Component/Price.jsx';
var subs=[
  {
    title:'Web Solution',
    img:'./Img/s1.png',
    para1:'Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.',
    para2:'In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.',
    para3:'Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.'
  },
  {
    title:'Strategy & Research',
    img:'./Img/s2.png',
     para1:'Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.',
    para2:'In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.',
    para3:'Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.',

  },
  {
    title:'Web Development',
    img:'./Img/s3.png',
     para1:'Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.',
    para2:'In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.',
    para3:'Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.'
  },
  {
    title:'App Design',
    img:'./Img/s5.png',
     para1:'Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.',
    para2:'In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.',
    para3:'Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.'
  },
  {
    title:'Digital Marketing',
    img:'./Img/s4.png',
     para1:'Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.',
    para2:'In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.',
    para3:'Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.'
  },
  {
    title:'Business Analysis',
    img:'./Img/s6.png',
     para1:'Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan, urna vel finibus sollicitudin, urna sem fringilla nisi.',
    para2:'In vel ante tristique, blandit nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non, luctus ex. Donec molestie consequat velit, id imperdiet arcu sollicitudin.',
    para3:'Praesent ac tempus ipsum, eget consequat ante. Sed consequat, elit euismod finibus faucibus.'
  },
]
var work=[
  {
    
  }
]
export default class Services extends React.Component {
  constructor(){
    super();
    this.state={ ser1:true,ser2:false,ser3:false,ser4:false,ser5:false,
    }
  }
  service1(){
  this.setState({
    ser1:!this.state.ser1,ser2:false,ser3:false,ser4:false,ser5:false,ser6:false,
  })
  }
  service2(){
    this.setState({
    ser2:!this.state.ser2,ser1:false,ser3:false,ser4:false,ser5:false,ser6:false,
    })
    }
  service3(){
    this.setState({
      ser3:!this.state.ser3,ser1:false,ser2:false,ser4:false,ser5:false,ser6:false,
      })
      }
  service4(){
     this.setState({
     ser4:!this.state.ser4,ser1:false,ser3:false,ser2:false,ser5:false,ser6:false,
        })
        }
  service5(){
    this.setState({
   ser5:!this.state.ser5,ser1:false,ser3:false,ser2:false,ser4:false,ser6:false,
     })
     }
  service6(){
    this.setState({
   ser6:!this.state.ser6,ser1:false,ser3:false,ser2:false,ser4:false,ser5:false,
     })
     }
  render() {
    return (
      <>
{/************************* * Services    Banner *********************************** */}
<section>
<div className='container-fluid'>
  <div className='row cbanner'>
    <div className='col-md-5 ctext'>
      <h1>Our Services</h1>
      <p className='ml-2 text-warning'><a href='/' className='text-warning'>HOME</a><span className='ml-2'><i class="fas fa-angle-right"></i></span>OUR SERVICES</p>
    </div>
  </div>
</div>
</section>

{/************************* * Services *********************************** */}
  <section>
    <div className='container'>
      <div className='row  mt-5'>
          <div className='col-md-2 p-2 text-center'>
          <div className='card  service' onClick={()=>this.service1()}>
          <div className='card-header bg-white'style={{border:'none'}}><img src='./Img/sicon1.png' className='serviceimg'/></div>
          <h5 className='font-weight-bold mt-2'><p>Web <br/> Solution</p></h5>
          </div>
        </div>
        <div className='col-md-2 p-2 text-center'>
          <div className='card  service' onClick={()=>this.service2()}>
          <div className='card-header bg-white'style={{border:'none'}}><img src='./Img/sicon2.png' className='serviceimg'/></div>
          <h5 className='font-weight-bold mt-2'><p>Strategy & <br/>Research</p></h5>
          </div>
        </div>
        <div className='col-md-2 p-2 text-center'>
          <div className='card  service' onClick={()=>this.service3()}>
          <div className='card-header bg-white'style={{border:'none'}}><img src='./Img/sicon3.png' className='serviceimg'/></div>
          <h5 className='font-weight-bold mt-2'><p>Web <br/>Development</p></h5>
          </div>
        </div>
        <div className='col-md-2 p-2 text-center'>
          <div className='card  service' onClick={()=>this.service4()}>
          <div className='card-header bg-white'style={{border:'none'}}><img src='./Img/sicon4.png' className='serviceimg'/></div>
          <h5 className='font-weight-bold mt-2'><p>App <br/>Design</p></h5>
          </div>
        </div>
        <div className='col-md-2 p-2 text-center'>
          <div className='card  service' onClick={()=>this.service5()}>
          <div className='card-header bg-white'style={{border:'none'}}><img src='./Img/sicon5.png' className='serviceimg'/></div>
          <h5 className='font-weight-bold mt-2'><p>Digital<br/>Marketing</p></h5>
          </div>
        </div>
        <div className='col-md-2 p-2 text-center'>
          <div className='card  service' onClick={()=>this.service6()}>
          <div className='card-header bg-white'style={{border:'none'}}><img src='./Img/sicon6.png' className='serviceimg'/></div>
          <h5 className='font-weight-bold mt-2'><p>Business <br/>Analysis</p></h5>
          </div>
        </div>
      </div>
      </div>
      <div className='container-fluid mt-4'>
      <div className='row p-5'>

          <>
          {this.state.ser1 ? <>
            <div className='col-md-6 mt-4'>
          <h1 className='font-weight-bold'>{subs[0].title}</h1>
          <p className='pcolor mt-4'>{subs[0].para1}</p>
          <p className='pcolor mt-4'>{subs[0].para2}</p>
          <p className='pcolor mt-4'>{subs[0].para3}</p>
        </div>
        <div className='col-md-5 shadow p-0 mt-4'>
          <img src={subs[0].img} className='subserviceimg'/>
        </div>
          </>
          :null}

         {this.state.ser2 ? <>
            <div className='col-md-6 mt-4'>
          <h1 className='font-weight-bold'>{subs[1].title}</h1>
          <p className='pcolor mt-4'>{subs[1].para1}</p>
          <p className='pcolor mt-4'>{subs[1].para2}</p>
          <p className='pcolor mt-4'>{subs[1].para3}</p>
        </div>
        <div className='col-md-5 shadow p-0 mt-4'>
          <img src={subs[1].img} className='subserviceimg'/>
        </div>
          </>
          :null}
             {this.state.ser3 ? <>
            <div className='col-md-6 mt-4'>
          <h1 className='font-weight-bold'>{subs[2].title}</h1>
          <p className='pcolor mt-4'>{subs[2].para1}</p>
          <p className='pcolor mt-4'>{subs[2].para2}</p>
          <p className='pcolor mt-4'>{subs[2].para3}</p>
        </div>
        <div className='col-md-5 shadow p-0 mt-4'>
          <img src={subs[2].img} className='subserviceimg'/>
        </div>
          </>
          :null}
             {this.state.ser4 ? <>
            <div className='col-md-6 mt-4'>
          <h1 className='font-weight-bold'>{subs[3].title}</h1>
          <p className='pcolor mt-4'>{subs[3].para1}</p>
          <p className='pcolor mt-4'>{subs[3].para2}</p>
          <p className='pcolor mt-4'>{subs[3].para3}</p>
        </div>
        <div className='col-md-5 shadow p-0 mt-4'>
          <img src={subs[3].img} className='subserviceimg'/>
        </div>
          </>
          :null}
             {this.state.ser5 ? <>
            <div className='col-md-6 mt-4'>
          <h1 className='font-weight-bold'>{subs[4].title}</h1>
          <p className='pcolor mt-4'>{subs[4].para1}</p>
          <p className='pcolor mt-4'>{subs[4].para2}</p>
          <p className='pcolor mt-4'>{subs[4].para3}</p>
        </div>
        <div className='col-md-5 shadow p-0 mt-4'>
          <img src={subs[4].img} className='subserviceimg'/>
        </div>
          </>
          :null}
             {this.state.ser6 ? <>
            <div className='col-md-6 mt-4'>
          <h1 className='font-weight-bold'>{subs[5].title}</h1>
          <p className='pcolor mt-4'>{subs[5].para1}</p>
          <p className='pcolor mt-4'>{subs[5].para2}</p>
          <p className='pcolor mt-4'>{subs[5].para3}</p>
        </div>
        <div className='col-md-5 shadow p-0 mt-4'>
          <img src={subs[5].img} className='subserviceimg'/>
        </div>
          </>
          :null}
          </>

      </div>
    </div>
  </section>

  {/************************* * Our Work Flow *********************************** */}
   <section>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center mt-4'>
          <h1 className='font-weight-bold'>Our Work Flow</h1>
          <p className='pcolor'>When unknow printer took a gallery of type and scramblted it to make a <br/>type specimen book</p>
        </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <img src='https://deneb-reactjs.tortoizthemes.com/assets/service_1.9cc8925f.png' className='w-100'/>
          </div>
          <div className='col-md-6 text-right mt-5 mb-5'>
             <div className='row justify-content-end'>
             <div className='work shadow col-md-2 text-center'>
           <img src='./Img/work2.png' className=''/>
           </div>
             </div>
            <h3 className='mt-5 font-weight-bold'>Analysis</h3>
            <p className='pcolor'>Morbi vel tortor at metus malesuada convallis. Nam diam magna, laoreet ac libero quis, laoreet semper sem. Etiam erat quam, suscipit in orci ut, aliquet finibus tortor. Nullam dui leo, convallis quis diam eget, aliquam feugiat nunc. Vivamus quis volutpat dui.</p>
          </div>

          <div className='col-md-6 text-left mt-5 mb-5'>
             <div className='row justify-content-start'>
             <div className='work shadow col-md-2 text-center'>
           <img src='./Img/work4.png' className=''/>
           </div>
             </div>
            <h3 className='mt-5 font-weight-bold'>Development</h3>
            <p className='pcolor'>Morbi vel tortor at metus malesuada convallis. Nam diam magna, laoreet ac libero quis, laoreet semper sem. Etiam erat quam, suscipit in orci ut, aliquet finibus tortor. Nullam dui leo, convallis quis diam eget, aliquam feugiat nunc. Vivamus quis volutpat dui.</p>
          </div>
          <div className='col-md-6'>
            <img src='https://deneb-reactjs.tortoizthemes.com/assets/service_2.161cbd64.png' className='w-100'/>
          </div>
          <div className='col-md-6'>
            <img src='https://deneb-reactjs.tortoizthemes.com/assets/service_3.bd7ab6ca.png' className='w-100'/>
          </div>
          <div className='col-md-6 text-right mt-5 mb-5'>
             <div className='row justify-content-end'>
             <div className='work shadow col-md-2 text-center'>
           <img src='./Img/work6.png' className=''/>
           </div>
             </div>
            <h3 className='mt-5 font-weight-bold'>Launch</h3>
            <p className='pcolor'>Morbi vel tortor at metus malesuada convallis. Nam diam magna, laoreet ac libero quis, laoreet semper sem. Etiam erat quam, suscipit in orci ut, aliquet finibus tortor. Nullam dui leo, convallis quis diam eget, aliquam feugiat nunc. Vivamus quis volutpat dui.</p>
          </div>
        </div>
     
    </div>
   </section>


 {/****************************** Afforable Pricing *************************************/}
   <Price/>
{/****************************** What pepole say *************************************/}
    <Why/>
{/****************************** Get in Touch *************************************/}
    <Getin/>

  </>
    )
  }
}

  
