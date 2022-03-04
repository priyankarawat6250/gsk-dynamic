import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import $ from 'jquery';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import config from "../config.js";
const axios = require("axios");

class PropertyDetail extends React.Component {

    state = {
        testimonials: []
    }

    
  state={
    flag:"property",
      name:"",
      number:"",
      email:"",
      subject:"",
      message:"",
      errors: [],
      testimonials: []
  }

  initialState = {
    flag:"property",
    name:"",
    number:"",
    email:"",
    subject:"",
    message:"",
    errors: [],
    testimonials: []
            
  };

    componentDidMount = () => {
        let slug = this.props.match.params.slug
         
        this.getProperties(slug)
    }


    getTestimonials = (id) => {
        axios.post(`${config.backend_URL}/admin/getTestimonials`, { propertyId: id })
            .then((responseJson) => {
                this.setState({ testimonials: responseJson.data.data })
            })
            .catch((error) => {
                console.error(error);
            });
    }



    getProperties = (slug) => {
        axios.post(`${config.backend_URL}/admin/getProperty`, { slug: slug })
            .then((responseJson) => {
                this.setState(responseJson.data.data)
                this.getTestimonials(responseJson.data.data._id);
                 
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getRatingsStar = (stars, flag) => {
        let html = [];
        for (var i = 0; i < stars; i++) {
            if (flag == 'fb') {
                html.push(<i><img src="images/rateIconBlue.png" /></i>)
            } else {
                html.push(<i><img src="images/rateIconOrange.png" /></i>)
            }
        }
        return html;
    }

     
mySubmit = e => {
    e.preventDefault();
    let error = 0;
    let arry = "";
    if (this.state.name === "") {
      
      arry += 'Name can not be empty* ';
      toast('Name can not be empty* ') 
      error++;
    }  
  
    if (this.state.number === "") {
      
      arry += 'Number can not be empty* ';
      toast('Number can not be empty* ') 
      error++;
    }  
    if (this.state.email === "") {
      
      arry += 'Email can not be empty* ';
      toast('Email can not be empty* ') 
      error++;
    }  
    if (this.state.subject === "") {
      
      arry += 'Subject can not be empty* ';
      toast('Subject can not be empty* ') 
      error++;
    }  
    
    if (this.state.message === "") {
      
      arry += 'Message can not be empty* ';
      toast('Message can not be empty* ') 
      error++;
    } 
    console.log(error)
  
    //this.setState({ errors: arry }) 
    if (error > 0) {
        $('#error').html(arry)
        //toast(arry)          
      } else {
        $('#error').html('')
        
       
        let manager_email = this.state.manager_emails.map(function(elem){
            return elem.manager_email;
        }).join(",");

          let newObj = {
            'propertyId':this.state._id,
            'property_name':this.state.property_name,
            'manager_email': manager_email,
            'flag':this.state.flag,
            'name':this.state.name,
            'number':this.state.number,
            'email':this.state.email,
            'subject':this.state.subject,
            'message':this.state.message
          }
         
          axios.post(`${config.backend_URL}/admin/addFeedbacks`, newObj)                
            .then(async data=>{   
              console.log(data);
  
              if(data.data.status === true){
                
                toast("Thank you for your feedback.")                
                
                await this.setState( this.initialState)
                 
  
              }else{
                toast("Something wrong!");
              }
            })
            .catch(err=>{
              console.log("error",err)
            })        
        }      
  
    }

    getYoutubeCode = (link) =>{
        return link.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
    }

    changedata=(e)=>{
 
            this.setState({[e.target.name]:e.target.value})   
        
        
    } 
    render() {
        let imgPath = config.backend_URL + '/' + this.state.property_image;


        return (
            <>

                <section>
                    <article className="prprtyMainVdoBlock wrapper" style={{ backgroundImage: `url("images/novaVillaSlide1.jpg")` }}>
                        <div className="prprtyMainVdoTextDiv">
                            <div className="container h-100 d-flex align-items-center justify-content-center">
                                <div className="prprtyMainVdoText">
                                    <h1>{this.state.property_name}</h1>
                                    <p><i className="d-inline-block px-2"><img src="images/locIcon.png" /></i>{this.state.address}</p>
                                    <div className="resAppBtn">
                                        <Link to="/" className="btnCommon">Resident's Application</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mainSldrOverlay"></div>
                    </article>
                    <article class="prprtyRatesBock wrapper py-80">
                        <div class="container">
                            <div class="row align-items-center justify-content-center">
                            {this.state.property_highlights && this.state.property_highlights.map(x=>{
                                let imgPath = config.backend_URL + '/' + x.highlight_icon
                                return(
                                    <div class="col-sm">
                                    <div class="prprtyRateCol">
                                        <div class="prprtyRateIcon">
                                            <span><img src={imgPath} /></span>
                                        </div>
                                        <div class="prprtyRateTtl">
                                            <h4><sup></sup>{x.highlight_amount}</h4>
                                            <p>{x.highlight_text}</p>
                                        </div>
                                    </div>
                                    </div>
                                )
                            })}
                                
                            </div>
                        </div>
                    </article>
                    <article class="prprtyDtlBock wrapper">
                        <div class="container">
                            <div class="prprtyDtlRow py-80">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="prprtyDtlContent">
                                            <div class="mainHeading headingSmallNo">
                                                <h2>{this.state.property_title}<span> </span></h2>
                                                <div class="hdngBrdrs">
                                                    <span class="hdngBrdr1"></span>
                                                    <span class="hdngBrdr2"></span>
                                                    <span class="hdngBrdr3"></span>
                                                </div>
                                                <p>{this.state.property_desc}</p>
                                            </div>
                                        </div>
                                        <div class="prprtyFeaItem">
                                            <div class="mainHeading headingSmallNo">
                                                <h2>Property <span>Features</span></h2>
                                                <div class="hdngBrdrs">
                                                    <span class="hdngBrdr1"></span>
                                                    <span class="hdngBrdr2"></span>
                                                    <span class="hdngBrdr3"></span>
                                                </div>
                                            </div>
                                            <div class="infoList infoListFullNo">
                                                <ul>

                                                    {this.state.property_features ? this.state.property_features.map((fe, key) => {

                                                        return (

                                                            <li> <i><img src="images/checkIcon.png" /></i> {fe.feature} </li>

                                                        )
                                                    }) : ''
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="prprtyDtlImg" style={{ backgroundImage: `url(${imgPath})` }}>
                                            <div class="prprtyCallCol">
                                                <div class="prprtyCallInfo">
                                                    <div class="prprtyCallIcon">
                                                        <img src="images/phone-call1.png" />
                                                    </div>
                                                    <div class="prprtyCallDes">
                                                        <h4>Schedule A Tour</h4>
                                                        <p>Or reach us directly at<br /><Link to={`tel:${this.state.manager_number}`}> {this.state.manager_number}</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {this.state.property_youtube? this.state.property_youtube.map((element, key) => {
                        let youTubeLink = this.getYoutubeCode(element.youtube_video_link);

                                    return (
                        <article class="prprtyVdoBock wrapper py-80">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-sm-6">
                                        <div class="mainHeading headingWhite headingCenter">
                                            <h5>{this.state.property_name}</h5>
                                            <h2>{element.youtube_video_heading}</h2>
                                            <div class="hdngBrdrs">
                                                <span class="hdngBrdr1"></span>
                                                <span class="hdngBrdr2"></span>
                                                <span class="hdngBrdr3"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="prprtyVdo">
                                            
                                            <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src={`${youTubeLink}?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.gskproperties.ca&amp;widgetid=1`}></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                          )
                        }) : ''
                    }

                    <article class="virtualTourBlock wrapper py-80">
                        <div class="container">
                            <div class="mainHeading headingCenter">
                                <h2>Checkout Our <span>Virtual Tours</span></h2>
                                <div class="hdngBrdrs">
                                    <span class="hdngBrdr1"></span>
                                    <span class="hdngBrdr2"></span>
                                    <span class="hdngBrdr3"></span>
                                </div>
                            </div>
                            <div class="row g-5 justify-content-center">

                                {this.state.property_virtualTours ? this.state.property_virtualTours.map((tour, key) => {
                                    return (
                                        <div class="col-md-4">
                                            <div class="virtualTourCol">
                                                <div class="virtualTourFrame">
                                                    <iframe loading="lazy" src={`${tour.virtual_tours_link}`} allowFullScreen="allowfullscreen"></iframe>
                                                </div>
                                                <div class="virtualTourTtl">
                                                    <h4>{tour.virtual_tours_title})</h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : ''
                                }

                            </div>
                        </div>
                    </article>
                    <article class="prprtyRvwsBlock wrapper py-80">
                        <div class="container">
                            <div class="prprtyRvwsHdng">
                                <div class="row g-5 align-items-center">
                                    <div class="col-sm">
                                        <div class="mainHeading headingWhite m-0">
                                            <h2>Room Design is all about functionality & comfort.</h2>
                                            <div class="hdngBrdrs">
                                                <span class="hdngBrdr1"></span>
                                                <span class="hdngBrdr2"></span>
                                                <span class="hdngBrdr3"></span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-sm-auto">
                                        <div className="reviewRatingDiv">
                                            <div className="reviewRatingRow">
                                                <a href={this.state.google_page_link}>
                                                    <div className="rvwRatingCol">
                                                        <div className="rvwRatingIcon">
                                                            <img src="images/googleIcon.png" />
                                                        </div>



                                                        <div className="rvwRatingDes">

                                                            <div className="rvwRatingTtl">Google Rating</div>
                                                            <div className="rvwRatingScore">
                                                                <span> {this.state.google_rating} </span>
                                                                <div class="rvwRatingStars">

                                                                    {this.getRatingsStar(this.state.google_rating, 'google')}

                                                                </div>
                                                            </div>


                                                            <div className="rvwRatingNote">
                                                                <p> {this.state.google_text}  </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>


                                                <a href={this.state.facebook_page_link}>
                                                    <div className="rvwRatingCol">
                                                        <div className="rvwRatingIcon">
                                                            <img src="images/facebookIcon.png" />
                                                        </div>
                                                        <div className="rvwRatingDes">
                                                            <div className="rvwRatingTtl">Facebook Rating</div>
                                                            <div className="rvwRatingScore">
                                                                <span>{this.state.facebook_rating}</span>
                                                                <div className="rvwRatingStars">

                                                                    {this.getRatingsStar(this.state.facebook_rating, 'fb')}

                                                                </div>
                                                            </div>
                                                            <div className="rvwRatingNote">
                                                                <p> {this.state.facebook_text}  </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>




                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div class="prprtyRrvwsSliderOuter pt-80">
                                <div class="propertyReviewSlider crslCntrls">
                                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={3}>


                                        {this.state.testimonials.length > 0 ? this.state.testimonials.map((x, key) => {
                                            let imgPath = config.backend_URL + '/' + x.image;
                                            return (
                                                <SwiperSlide>
                                                    <div class="prprtyRvwslide">
                                                        <div class="prprtyRvwAuthor">
                                                            <span>
                                                                <img src={imgPath} />
                                                            </span>
                                                            <div class="prprtyRvwTitle">
                                                                <h4> {x.name.substring(0, x.name.indexOf(" ") + 2)} </h4>
                                                            </div>
                                                        </div>
                                                        <div class="prprtyRvwsContent">
                                                            <p>“{x.desc}”</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        }) : ''
                                        }


                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article class="adtnPrprtyBlock wrapper">
                        <div class="adtnPrprtySldrRow py-80">
                            <div class="container">
                                <div class="adtnPrprtySliderOuter crslCntrls">
                                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={2}>

                                        {this.state.property_blocks && this.state.property_blocks.map((x, key) => {
                                            let imgPath = config.backend_URL + '/' + x.Block_image;
                                            return (
                                                <SwiperSlide>
                                                    <div class="adtnPrprtyCol">
                                                        <div class="adtnPrprtyImg" style={{ backgroundImage: `url(${imgPath})` }}></div>
                                                        <div class="adtnPrprtyDesOuter">
                                                            <div class="adtnPrprtyDes">
                                                                <div class="adtnPrprtyPrice">
                                                                    <h3>Rent - Starting from</h3>
                                                                    <h4><sup>$</sup>{x.block_price}</h4>
                                                                </div>
                                                                <div class="adtnPrprtyInfo">
                                                                    <ul>
                                                                        <li><i><img src="images/beds.png" /><img src="images/bedsWhite.png" /></i> Beds: {x.bedroom}</li>
                                                                        <li><i><img src="images/baths.png" /><img src="images/bathsWhite.png" /></i> Baths: {x.bathroom}</li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <div class="adtnPrprtyScrty">
                                                                <p>Security Deposit - <sup>$</sup>{x.security_deposit}</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                        }

                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="bookApointBlock wrapper py-80">
                        <div class="container">
                            <div class="row g-5">
                                <div class="col-md-5">
                                    <div class="homeCntctDiv">
                                        <div class="homeCntctForm">
                                            <div class="mainHeading headingSmall headingCenter">
                                                <h2>Make an Appointment</h2>
                                                <div class="hdngBrdrs">
                                                    <span class="hdngBrdr1"></span>
                                                    <span class="hdngBrdr2"></span>
                                                    <span class="hdngBrdr3"></span>
                                                </div>
                                                <p>Please fill out the form and our Community Leader will get in contact with you.</p>
                                            </div>
                                            
                                             


                                    <form onSubmit={this.mySubmit} >
                                        <div className="cntctBrdrTtl">APPOINTMENT</div>

                                        <div class="form-group selectedService">
                                            <label>Property</label>
                                            <i><img src="images/propertyIcon.png" /></i>
                                            <input class="form-control" type="text" name="property_name" value={this.state.property_name} readOnly />
                                        </div>


                                        <div className="form-group">
                                        <label>Name *</label>
                                        <i><img src="images/userIcon.png" /></i>
                                        <input className="form-control" type="text" name="name" placeholder="Write Name" onChange={this.changedata} value={this.state.name}/>
                                        </div>
                                        <div className="form-group">
                                        <label>Mobile Number *</label>
                                        <i><img src="images/callIcon.png" /></i>
                                        <input className="form-control number" type="text" name="number" placeholder="+1 _ _ _   _ _ _   _ _ _" onChange={this.changedata} value={this.state.number}/>
                                        </div>
                                        <div className="form-group">
                                        <label>Email*</label>
                                        <i><img src="images/mailIcon.png" /></i>
                                        <input className="form-control" type="email" name="email" placeholder="feedback@gskproperties.ca" onChange={this.changedata} value={this.state.email}/>
                                        </div>
                                        <div className="form-group">
                                        <label>Subject*</label>
                                        <i><img src="images/subjectIcon.png" /></i>
                                        <input className="form-control" type="text" name="subject" placeholder="Perfect Home" onChange={this.changedata} value={this.state.subject}/>
                                        </div>
                                        <div className="form-group formGroupTextarea">
                                        <label>Message Me*</label>
                                        <textarea className="form-control" type="text" name="message" placeholder="Hi, I’m happy with home." onChange={this.changedata} value={this.state.message}></textarea>
                                        </div>
                                        <div className="form-btn">
                                        <button className="btn btnCommon w-100" type="Submit">Submit</button>
                                        </div>
                                    </form>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-7">
                                    <div className="bookApointMap h-100">
                                        {/* <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=%20NOVA%20VILLA%20%E2%80%93%2012615%20152%20AVE%20NW&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="NOVA VILLA – 12615 152 AVE NW" aria-label=" NOVA VILLA – 12615 152 AVE NW"></iframe> */}

                                        <iframe src={`https://maps.google.com/maps?q=${this.state.lat},${this.state.long}&z=15&output=embed`} allowFullScreen="" loading="lazy"></iframe>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

            </>
        )
    }
};
export default PropertyDetail;