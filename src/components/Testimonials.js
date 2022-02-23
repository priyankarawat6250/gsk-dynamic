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

class Testimonials extends React.Component{
    render(){
        return (
        <>
        <Header />
    <section>
      <article className="pageHdrBlock wrapper py-80" style={{backgroundImage: `url("images/subpageBg.jpg")`}}>
        <div className="pageHdrOverlay"></div>
        <div className="container">
            <div className="row align-items-center justify-space-beetween">
                <div className="col-sm">
                    <h3>Testimonials</h3>
                </div>
                <div className="col-sm-auto">
                    <div className="pagebrdcrmbs">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Testimonials</li>
                        </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </article>
      <article className="testiHeadingBlock wrapper py-60">
        <div className="container">
            <div className="rvwsHdrDiv">
                <div className="row g-5 align-items-center">
                    <div className="col-sm">
                        <div className="mainHeading m-0">
                            <h2>GSK Happy Clients</h2>
                            <div className="hdngBrdrs">
                                <span className="hdngBrdr1"></span>
                                <span className="hdngBrdr2"></span>
                                <span className="hdngBrdr3"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-auto">
                        <div className="reviewRatingDiv">
                            <div className="reviewRatingRow">
                                <div className="rvwRatingCol">
                                    <div className="rvwRatingIcon">
                                        <img src="images/googleIcon.png" />
                                    </div>
                                    <div className="rvwRatingDes">
                                        <div className="rvwRatingTtl">Google Rating</div>
                                        <div className="rvwRatingScore">
                                            <span>4.8</span>
                                            <div className="rvwRatingStars">
                                            <i><img src="images/rateIconOrange.png" /></i>
                                            <i><img src="images/rateIconOrange.png" /></i>
                                            <i><img src="images/rateIconOrange.png" /></i>
                                            <i><img src="images/rateIconOrange.png" /></i>
                                            <i><img src="images/rateIconOrange.png" /></i>
                                            </div>
                                        </div>
                                        <div className="rvwRatingNote">
                                            <p>Based on 10+ reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rvwRatingCol">
                                     <div className="rvwRatingIcon">
                                        <img src="images/facebookIcon.png" />
                                    </div>
                                    <div className="rvwRatingDes">
                                        <div className="rvwRatingTtl">Facebook Rating</div>
                                        <div className="rvwRatingScore">
                                            <span>4.8</span>
                                            <div className="rvwRatingStars">
                                                <i><img src="images/rateIconBlue.png" /></i>
                                                <i><img src="images/rateIconBlue.png" /></i>
                                                <i><img src="images/rateIconBlue.png" /></i>
                                                <i><img src="images/rateIconBlue.png" /></i>
                                                <i><img src="images/rateIconBlue.png" /></i>
                                            </div>
                                        </div>
                                        <div className="rvwRatingNote">
                                            <p>Based on 50+ reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </article>
      <article className="testimonialBlock wrapper">
        <div className="testimonialRow py-60">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                        <div className="testiMainDiv">
                            <div className="mainHeading">
                                <h5>Customers reviews</h5>
                                <h2>About <span>Chappelle Gardens</span></h2>
                                <div className="hdngBrdrs">
                                    <span className="hdngBrdr1"></span>
                                    <span className="hdngBrdr2"></span>
                                    <span className="hdngBrdr3"></span>
                                </div>
                            </div>
                            <div className="testiSliderOuter">
                                <div className="testimonialSlider crslCntrls">
                                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={1}>
                                        <SwiperSlide>
                                            <div className="testiSlide">
                                                <div className="testiContent">
                                                    <p>“The Chappelle Gardens apartment community has been home for the last year and a half, and it was an absolute pleasure living there! The building is beautiful and maintained really well thanks to Joel. I want to thank Sunny for going above and beyond for me and for always being so accommodating. I have nothing but great things to say about my rental experience! Great building, community, and amazing management”</p>
                                                </div>
                                                <div className="testiInfo d-flex align-items-center">
                                                    <div className="testiAuthor">
                                                        <span>
                                                            <img src="images/user1.png" />
                                                        </span>
                                                    </div>
                                                    <div className="testiTitle">
                                                        <h4>Alexys</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testiSlide">
                                                <div className="testiContent">
                                                    <p>“I’ve lived in a one bedroom at Chappelle Gardens for a year now and am happily renewing my lease and transferring to a two bedroom in the same building. The management is helpful, honest and reliable. The community is a great place to live in and my dog loves all the walking trails. And I actually know my neighbours’ names!”</p>
                                                </div>
                                                <div className="testiInfo d-flex align-items-center">
                                                    <div className="testiAuthor">
                                                        <span>
                                                            <img src="images/user2.png" />
                                                        </span>
                                                    </div>
                                                    <div className="testiTitle">
                                                        <h4>Caelea</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
            <div className="testiMainImg" style={{backgroundImage: `url("images/chappelleGarden.jpg")`}}></div>
        </div>
        <div className="testimonialRow py-60">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                        <div className="testiMainDiv">
                            <div className="mainHeading">
                                <h5>Customers reviews</h5>
                                <h2>About <span>Silverstone Terrace</span></h2>
                                <div className="hdngBrdrs">
                                    <span className="hdngBrdr1"></span>
                                    <span className="hdngBrdr2"></span>
                                    <span className="hdngBrdr3"></span>
                                </div>
                            </div>
                            <div className="testiSliderOuter">
                                <div className="testiSliderOuter testimonialSlider crslCntrls">
                                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={1}>
                                        <SwiperSlide>
                                            <div className="testiSlide">
                                                <div className="testiContent">
                                                    <p>“After renting a condo from GSK, I’d rate my experience with them a 5/5 because of my landlord/manager (Sunny) and operator (Joel). These two gentlemen are professional, respectful and relatable. I truly appreciate their kindness and promptness to work with clients.THANK YOU!”</p>
                                                </div>
                                                <div className="testiInfo d-flex align-items-center">
                                                    <div className="testiAuthor">
                                                        <span>
                                                            <img src="images/user1.png" />
                                                        </span>
                                                    </div>
                                                    <div className="testiTitle">
                                                        <h4>Rebekah</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testiSlide">
                                                <div className="testiContent">
                                                    <p>“I lived in the Silverstone Terrace building and would highly recommend living in one of their buildings. Their managers were always quick to respond to any issues. SST was also a really small building so it was mostly quiet.”</p>
                                                </div>
                                                <div className="testiInfo d-flex align-items-center">
                                                    <div className="testiAuthor">
                                                        <span>
                                                            <img src="images/user2.png" />
                                                        </span>
                                                    </div>
                                                    <div className="testiTitle">
                                                        <h4>Krissa</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
            <div className="testiMainImg" style={{backgroundImage: `url("images/silverstoneTerrace.jpg")`}}></div>
        </div>
        <div className="testimonialRow py-60">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                        <div className="testiMainDiv">
                            <div className="mainHeading">
                                <h5>Customers reviews</h5>
                                <h2>About <span>Nova Villa</span></h2>
                                <div className="hdngBrdrs">
                                    <span className="hdngBrdr1"></span>
                                    <span className="hdngBrdr2"></span>
                                    <span className="hdngBrdr3"></span>
                                </div>
                            </div>
                            <div className="testiSliderOuter">
                                <div className="testiSliderOuter testimonialSlider crslCntrls">
                                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={1}>
                                        <SwiperSlide>
                                            <div className="testiSlide">
                                                <div className="testiContent">
                                                    <p>“I enjoyed living in nova villa apartment quiet place to live. We would definitely stay longer, but I was transferred with my work. Definitely recommend this place for future renters!”</p>
                                                </div>
                                                <div className="testiInfo d-flex align-items-center">
                                                    <div className="testiAuthor">
                                                        <span>
                                                            <img src="images/user3.png" />
                                                        </span>
                                                    </div>
                                                    <div className="testiTitle">
                                                        <h4>Ritc</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testiSlide">
                                                <div className="testiContent">
                                                    <p>“Nice management very clean and organized and the landlord. Manager is very easy going person and helpful to tenant I recommend this apartment to those people that are looking to rent.”</p>
                                                </div>
                                                <div className="testiInfo d-flex align-items-center">
                                                    <div className="testiAuthor">
                                                        <span>
                                                            <img src="images/user2.png" />
                                                        </span>
                                                    </div>
                                                    <div className="testiTitle">
                                                        <h4>Mohamed</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
            <div className="testiMainImg" style={{backgroundImage: `url("images/novaVilla.jpg")`}}></div>
        </div>
      </article>
    </section>
    <Footer />
    </>
  )
} 
};

export default Testimonials;