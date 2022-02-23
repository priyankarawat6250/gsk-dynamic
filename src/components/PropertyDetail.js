import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from "./Header.js";
import Footer from "./Footer.js";

 
class PropertyDetail extends React.Component{
 
    render(){
        return (
        <>
        <Header />
    <section>
      <article className="prprtyMainVdoBlock wrapper" style={{backgroundImage: `url("images/novaVillaSlide1.jpg")`}}>
        <div className="prprtyMainVdoTextDiv">
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="prprtyMainVdoText">
                    <h1>Nova Villa</h1>
                    <p><i className="d-inline-block px-2"><img src="images/locIcon.png" /></i> 12615 152 AVE NW, Edmonton, T5X6E9</p>
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
                <div class="col-sm">
                    <div class="prprtyRateCol prprtyBuildCol">
                        <div class="prprtyRateIcon">
                            <span><img src="images/builtIcon.png" /></span>
                        </div>
                        <div class="prprtyRateTtl">
                            <h4><sup>$</sup>2014</h4>
                            <p>Built In</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="prprtyRateCol">
                        <div class="prprtyRateIcon">
                            <span><img src="images/dollarIcon.png" /></span>
                        </div>
                        <div class="prprtyRateTtl">
                            <h4><sup>$</sup>1200</h4>
                            <p>Security Deposit</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="prprtyRateCol">
                        <div class="prprtyRateIcon">
                            <span><img src="images/dollarIcon.png" /></span>
                        </div>
                        <div class="prprtyRateTtl">
                            <h4><sup>$</sup>1200</h4>
                            <p>Rent - 1 Bedroom</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="prprtyRateCol">
                        <div class="prprtyRateIcon">
                            <span><img src="images/dollarIcon.png" /></span>
                        </div>
                        <div class="prprtyRateTtl">
                            <h4><sup>$</sup>1375</h4>
                            <p>Rent - 2 Bedroom & 2 Bath</p>
                        </div>
                    </div>
                </div>
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
                                <h2>Luxury Apartments In <span> North Side Edmonton</span></h2>
                                <div class="hdngBrdrs">
                                    <span class="hdngBrdr1"></span>
                                    <span class="hdngBrdr2"></span>
                                    <span class="hdngBrdr3"></span>
                                </div>
                                <p>1 bedroom and 2 bedroom apartments located in Castle Downs with easy access to Anthony Henday and Yellowhead Trail. Walking distance from the Oxford shopping centre, YMCA, Spray Park and Beaumaris Lake & Mall.</p>
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
                                    <li>
                                        <i><img src="images/checkIcon.png" /></i> Spacious modern suites with open concept living
                                    </li>
                                    <li>
                                        <i><img src="images/checkIcon.png" /></i> Dishwasher and In-suite Laundry.
                                    </li>
                                    <li>
                                        <i><img src="images/checkIcon.png" /></i> YMCA Park within walking distance.
                                    </li>
                                    <li>
                                        <i><img src="images/checkIcon.png" /></i> 6 Appliances.
                                    </li>
                                    <li>
                                        <i><img src="images/checkIcon.png" /></i> Quick access to local shopping; Save on foods, Pet Smart, Michaels, Shoppers, Original Joe’s, Hair saloons, Medicenter.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="prprtyDtlImg" style={{backgroundImage: `url("images/silverstoneTerrace.jpg")`}}>
                            <div class="prprtyCallCol">
                                <div class="prprtyCallInfo">
                                    <div class="prprtyCallIcon">
                                        <img src="images/phone-call1.png" />
                                    </div>
                                    <div class="prprtyCallDes">
                                        <h4>Schedule A Tour</h4>
                                        <p>Or reach us directly at<br/><Link to="tel:587-598-4020">780-406-5218</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </article>
      <article class="prprtyVdoBock wrapper py-80">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-6">
                    <div class="mainHeading headingWhite headingCenter">
                        <h5>Nova Villa</h5>
                        <h2>Check Out Nova Villa's 2 Bed & 2 Bath Luxury Apartment</h2>
                        <div class="hdngBrdrs">
                            <span class="hdngBrdr1"></span>
                            <span class="hdngBrdr2"></span>
                            <span class="hdngBrdr3"></span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="prprtyVdo">
                        <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/pkETiolG0ho?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.gskproperties.ca&amp;widgetid=1"></iframe>
                    </div>
                </div>
            </div>
        </div>
      </article>
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
                <div class="col-md-4">
                    <div class="virtualTourCol">
                        <div class="virtualTourFrame">
                            <iframe loading="lazy" src="https://youriguide.com/one_bedroom_12615_152_ave_nw_edmonton_ab" allowfullscreen="allowfullscreen"></iframe>
                        </div>
                        <div class="virtualTourTtl">
                            <h4>1 Bedroom 1 Bath (Layout A)</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="virtualTourCol">
                        <div class="virtualTourFrame">
                            <iframe loading="lazy" src="https://youriguide.com/layout_b_12615_152_ave_nw_edmonton_ab" allowfullscreen="allowfullscreen"></iframe>
                        </div>
                        <div class="virtualTourTtl">
                            <h4>1 Bedroom 1 Bath (Layout B)</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="virtualTourCol">
                        <div class="virtualTourFrame">
                            <iframe src="https://youriguide.com/furnished_2_bed_12615_152_ave_nw_edmonton_ab" allowfullscreen="allowfullscreen"></iframe>
                        </div>
                        <div class="virtualTourTtl">
                            <h4>2 Bedroom 2 Bath (Layout A)</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="virtualTourCol">
                        <div class="virtualTourFrame">
                            <iframe src="https://youriguide.com/301_12615_152_ave_nw_edmonton_ab" allowfullscreen="allowfullscreen"></iframe>
                        </div>
                        <div class="virtualTourTtl">
                            <h4>2 Bedroom 2 Bath (Layout B)</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="virtualTourCol">
                        <div class="virtualTourFrame">
                            <iframe loading="lazy" src="https://my.matterport.com/show/?m=Zz9KFx9bF4H&amp;referrer=http%3A%2F%2Fgskproperties.ca%2Fnova-villa" allowfullscreen="allowfullscreen"></iframe>
                        </div>
                        <div class="virtualTourTtl">
                            <h4>Lobby</h4>
                        </div>
                    </div>
                </div>
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
                    <div class="col-sm-auto">
                        <div class="reviewRatingDiv">
                            <div class="reviewRatingRow">
                                <div class="rvwRatingCol">
                                    <div class="rvwRatingIcon">
                                        <img src="images/googleIcon.png" />
                                    </div>
                                    <div class="rvwRatingDes">
                                        <div class="rvwRatingTtl">Google Rating</div>
                                        <div class="rvwRatingScore">
                                            <span>4.8</span>
                                            <div class="rvwRatingStars">
                                                <i><img src="images/rateIconOrange.png" /></i>
												<i><img src="images/rateIconOrange.png" /></i>
												<i><img src="images/rateIconOrange.png" /></i>
												<i><img src="images/rateIconOrange.png" /></i>
												<i><img src="images/rateIconOrange.png" /></i>
                                            </div>
                                        </div>
                                        <div class="rvwRatingNote">
                                            <p>Based on 10+ reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="rvwRatingCol">
                                    <div class="rvwRatingIcon">
                                        <img src="images/facebookIcon.png" />
                                    </div>
                                    <div class="rvwRatingDes">
                                        <div class="rvwRatingTtl">Facebook Rating</div>
                                        <div class="rvwRatingScore">
                                            <span>4.8</span>
                                            <div class="rvwRatingStars">
                                                <i><img src="images/rateIconBlue.png" /></i>
												<i><img src="images/rateIconBlue.png" /></i>
												<i><img src="images/rateIconBlue.png" /></i>
												<i><img src="images/rateIconBlue.png" /></i>
												<i><img src="images/rateIconBlue.png" /></i>
                                            </div>
                                        </div>
                                        <div class="rvwRatingNote">
                                            <p>Based on 50+ reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="prprtyRrvwsSliderOuter pt-80">
                <div class="propertyReviewSlider crslCntrls">
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={3}>
                        <SwiperSlide>
                            <div class="prprtyRvwslide">
                                <div class="prprtyRvwAuthor">
                                    <span>
                                        <img src="images/user1.png" />
                                    </span>
                                    <div class="prprtyRvwTitle">
                                        <h4>Nicole Str</h4>
                                    </div>
                                </div>
                                <div class="prprtyRvwsContent">
                                    <p>“Most reliable property company! Lived here for almost 2 years and never had any issues. Great community to live in! Highly recommend for anyone”</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="prprtyRvwslide">
                                <div class="prprtyRvwAuthor">
                                    <span>
                                        <img src="images/user2.png" />
                                    </span>
                                    <div class="prprtyRvwTitle">
                                        <h4>Nicole Str</h4>
                                    </div>
                                </div>
                                <div class="prprtyRvwsContent">
                                    <p>“Most reliable property company! Lived here for almost 2 years and never had any issues. Great community to live in! Highly recommend for anyone”</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="prprtyRvwslide">
                                <div class="prprtyRvwAuthor">
                                    <span>
                                        <img src="images/user3.png" />
                                    </span>
                                    <div class="prprtyRvwTitle">
                                        <h4>Nicole Str</h4>
                                    </div>
                                </div>
                                <div class="prprtyRvwsContent">
                                    <p>“Most reliable property company! Lived here for almost 2 years and never had any issues. Great community to live in! Highly recommend for anyone”</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="prprtyRvwslide">
                                <div class="prprtyRvwAuthor">
                                    <span>
                                        <img src="images/user1.png" />
                                    </span>
                                    <div class="prprtyRvwTitle">
                                        <h4>Nicole Str</h4>
                                    </div>
                                </div>
                                <div class="prprtyRvwsContent">
                                    <p>“Most reliable property company! Lived here for almost 2 years and never had any issues. Great community to live in! Highly recommend for anyone”</p>
                                </div>
                            </div>
                        </SwiperSlide>
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
                        <SwiperSlide>
                            <div class="adtnPrprtyCol">
                                <div class="adtnPrprtyImg" style={{backgroundImage: `url("images/novaVilla1.jpg")`}}></div>
                                <div class="adtnPrprtyDesOuter">
                                    <div class="adtnPrprtyDes">
                                        <div class="adtnPrprtyPrice">
                                            <h3>Rent - Starting from</h3>
                                            <h4><sup>$</sup>1200</h4>
                                        </div>
                                        <div class="adtnPrprtyInfo">
                                            <ul>
                                                <li><i><img src="images/beds.png" /><img src="images/bedsWhite.png" /></i> Beds: 1</li>
                                                <li><i><img src="images/baths.png" /><img src="images/bathsWhite.png" /></i> Baths: 1</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="adtnPrprtyScrty">
                                        <p>Security Deposit - <sup>$</sup>1200</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="adtnPrprtyCol">
                                <div class="adtnPrprtyImg" style={{backgroundImage: `url("images/novaVilla2.jpg")`}}></div>
                                <div class="adtnPrprtyDesOuter">
                                    <div class="adtnPrprtyDes">
                                        <div class="adtnPrprtyPrice">
                                            <h3>Rent - Starting from</h3>
                                            <h4><sup>$</sup>1375</h4>
                                        </div>
                                        <div class="adtnPrprtyInfo">
                                            <ul>
                                                <li><i><img src="images/beds.png" /><img src="images/bedsWhite.png" /></i> Beds: 2</li>
                                                <li><i><img src="images/baths.png" /><img src="images/bathsWhite.png" /></i> Baths: 2</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="adtnPrprtyScrty">
                                        <p>Security Deposit - <sup>$</sup>1200</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
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
                            <form>
                                <div class="cntctBrdrTtl">APPOINTMENT</div>
                                <div class="form-group selectedService">
                                    <label>Property</label>
                                    <i><img src="images/propertyIcon.png" /></i>
                                    <input class="form-control" type="text" id="" name="" value="Nova Villa" readonly />
                                </div>
                                <div class="form-group">
                                    <label>Name *</label>
                                    <i><img src="images/userIcon.png" /></i>
                                    <input class="form-control" type="text" id="" name="" placeholder="Write Name" />
                                </div>
                                <div class="form-group">
                                    <label>Mobile Number *</label>
                                    <i><img src="images/callIcon.png" /></i>
                                    <input class="form-control" type="text" id="" name="" placeholder="+1 _ _ _   _ _ _   _ _ _" />
                                </div>
                                <div class="form-group">
                                    <label>Email*</label>
                                    <i><img src="images/mailIcon.png" /></i>
                                    <input class="form-control" type="email" id="" name="" placeholder="info@example.com" />
                                </div>
                                <div class="form-group">
                                    <label>Subject*</label>
                                    <i><img src="images/subjectIcon.png" /></i>
                                    <input class="form-control" type="text" id="" name="" placeholder="Perfect Home" />
                                </div>
                                <div class="form-group formGroupTextarea">
                                    <label>Message Me*</label>
                                    <textarea class="form-control" type="text" id="" name="" placeholder="Hi, I’m happy with home."></textarea>
                                </div>
                                <div class="form-btn">
                                    <button class="btn btnCommon w-100" type="Submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="bookApointMap h-100">
                        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=%20NOVA%20VILLA%20%E2%80%93%2012615%20152%20AVE%20NW&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="NOVA VILLA – 12615 152 AVE NW" aria-label=" NOVA VILLA – 12615 152 AVE NW"></iframe>
                    </div>
                </div>
            </div>
        </div>
      </article>
    </section>
    <Footer />
    </>
  )
} 
};
export default PropertyDetail;