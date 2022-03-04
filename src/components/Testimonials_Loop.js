import React from "react";
import config from "../config.js";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';

const axios = require("axios");
class Testimonials_Loop extends React.Component {
    
 
    render() {
        return (

            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={1}>
                {this.props.testimonils.length > 0 ? this.props.testimonils.map((x, key) => {
                    let imgPath = config.backend_URL + '/' + x.image;
                    return (
                        <SwiperSlide key={key}>
                            <div className="testiSlide">
                                <div className="testiContent">
                                    <p>“{x.desc}”</p>
                                </div>
                                <div className="testiInfo d-flex align-items-center">
                                    <div className="testiAuthor">
                                        <span>
                                            <img src={imgPath} />
                                        </span>
                                    </div>
                                    <div className="testiTitle">
                                        <h4>{x.name.substring(0, x.name.indexOf(" ") + 2)}</h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }) : ''
                }
            </Swiper>
        )
    }
};

export default Testimonials_Loop;