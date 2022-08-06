import React, { Component } from 'react';
import './index.css';
import Why from './Component/Why.jsx';
import Banner from './Component/Banner.jsx';
import Getin from './Component/GetIn.jsx';

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
export default class About extends Component {
  render() {
    return (
      <>
            {/****************************** About Banner *************************************/}
      <section>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <img src='http://localhost:3000/Img/about.png'/>
          </div>
          <div className='col-md-6 mt-5'>
            <h1 className='font-weight-bold'>Why You Hire Us?</h1>
            <p className='pcolor  mt-4'>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.</p>
            <p className='pcolor mt-4'>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p>
            <div className='row'>
              <div className='coll-md-3'>
                <img src='http://localhost:3000/Img/about1.png'/>
              </div>
              <div className='col-md-5'>
                <img src='http://localhost:3000/Img/sign.png'/>
                <h4 className='text-warning'>Deneb Team</h4>
                <h5>Best Award 2020</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

            {/****************************** Skill *************************************/}

      <section>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-7'>
              <h1 className='font-weight-blod'>Let Know Our Expert Skills</h1>
              <p className='pcolor mt-4'>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo. Sed ut nibh feugiat, auctor enim quis, hendrerit ipsum. Aenean blandit lacinia suscipit. Nunc ut tincidunt massa, eu semper lacus.</p>
              <div className='row'>
                <div className='col-md-5 mt-4'>
                <h5>UI/UX Design</h5>
                </div>
                <div className='col-md-5 text-right mt-4'>
                <h5>85%</h5>
                </div>
                <div className='col-md-11 skill p-0'>
                <div className='subskill'></div>
                </div>

                <div className='col-md-5 mt-4'>
                <h5>Web Design</h5>
                </div>
                <div className='col-md-5 text-right mt-4'>
                <h5>75%</h5>
                </div>
                <div className='col-md-11 skill p-0'>
                <div className='subskill'style={{width:'75%'}}></div>
                </div>
                <div className='col-md-5 mt-4'>
                <h5>HTML/CSS</h5>
                </div>
                <div className='col-md-5 text-right mt-4'>
                <h5>90%</h5>
                </div>
                <div className='col-md-11 skill p-0'>
                <div className='subskill'style={{width:'90%'}}></div>
                </div>
                <div className='col-md-5 mt-4'>
                <h5>Sketch</h5>
                </div>
                <div className='col-md-5 text-right mt-4'>
                <h5>65%</h5>
                </div>
                <div className='col-md-11 skill p-0'>
                <div className='subskill'style={{width:'65%'}}></div>
                </div>
              </div>
            </div>
            <div className='col-md-5'>
              <img src='http://localhost:3000/Img/skill.png'/>
            </div>
          </div>
        </div>
      </section>

            {/****************************** Work Exprience *************************************/}
      <section>
        <div className='container-fluid mt-5'>
          <div className='row p-4 '>
            <div className='col-md-12 text-center mt-5'>
              <h1>Our Work Experience</h1>
              <p className='pcolor'>When unknow printer took a gallery of type and scramblted it to make a<br/> type specimen book</p>
            </div>
            <div className='col-md-5 wbox p-4 shadow mt-3'>
                <p>Mauris dictum eros purus, vitae pharetra risus pulvinar rhoncus. Duis bibendum tristique luctus. Aliquam non urna odio morbi nec lectus tempus lorem vehicula consequat sed eu lectus. Ut maximus nulla a est placer.</p>
              </div>
              <div className='col-md-1 swork  mt-5 ml-3'>
                <div className='swork1'>
                  <h2 className='ml-4 pt-3 text-white'>1.</h2>
                </div>
              </div>
              <div className='col-md-5 text-right mt-5'>
                <h4 className='font-weight-bold'>Graphic Designer</h4>
                <h5 className='text-muted'>JOHN ABRAHAM</h5>
                <h4 className='text-warning'>March 2007- August 2020</h4>
              </div>
              <div className='col-md-5 text-left mt-5'>
                <h4 className='font-weight-bold'>Graphic Designer</h4>
                <h5 className='text-muted'>JOHN ABRAHAM</h5>
                <h4 className='text-warning'>March 2007- August 2020</h4>
              </div>
              <div className='col-md-1 swork mt-5 mr-3 ml-3'>
                <div className='swork1'>
                  <h2 className='ml-4 pt-3 text-white'>2.</h2>
                </div>
              </div>
              <div className='col-md-5 wbox p-4 shadow mt-5'>
                <p>Mauris dictum eros purus, vitae pharetra risus pulvinar rhoncus. Duis bibendum tristique luctus. Aliquam non urna odio morbi nec lectus tempus lorem vehicula consequat sed eu lectus. Ut maximus nulla a est placer.</p>
              </div>
              <div className='col-md-5 wbox p-4 shadow mt-5'>
                <p>Mauris dictum eros purus, vitae pharetra risus pulvinar rhoncus. Duis bibendum tristique luctus. Aliquam non urna odio morbi nec lectus tempus lorem vehicula consequat sed eu lectus. Ut maximus nulla a est placer.</p>
              </div>
              <div className='col-md-1 swork  mt-5 ml-3'>
                <div className='swork1'>
                  <h2 className='ml-4 pt-3 text-white'>3.</h2>
                </div>
              </div>
              <div className='col-md-5 text-right mt-5'>
                <h4 className='font-weight-bold'>Graphic Designer</h4>
                <h5 className='text-muted'>JOHN ABRAHAM</h5>
                <h4 className='text-warning'>March 2007- August 2020</h4>
              </div>
          </div>

        </div>
      </section>
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

