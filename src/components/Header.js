import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
      
    <>
    <link href="css/font-awesome.css" rel="stylesheet" />
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    
    <link rel="stylesheet" href="css/swiper-bundle.min.css" />
    
    <link href="css/style.css" rel="stylesheet" crossorigin="anonymous" />
    
    <link href="css/responsive.css" rel="stylesheet" crossorigin="anonymous" />

    <header className="mainHeader wrapper">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-auto">
          <div className="hdrLogo">
            <NavLink to="/">
              <img src="images/hdrLogo.png" />
            </NavLink>
          </div>
        </div>
        <div className="col">
          <div className="hdrMenu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/why-choose-us">Why Choose Us</NavLink>
              </li>
              <li>
                <NavLink to="/properties">Properties</NavLink>
                <ul>
                  <li>
                    <NavLink to="/category">Edmonton</NavLink>
                    <ul>
                      <li>
                        <NavLink to="/property-detail">Silverstone Terrace</NavLink>
                      </li>
                      <li>
                        <NavLink to="/property-detail">Chappelle Garden Villas</NavLink>
                      </li>
                      <li>
                        <NavLink to="/property-detail">Chappelle Garden</NavLink>
                      </li>
                      <li>
                        <NavLink to="/property-detail">Nova Villa</NavLink>
                      </li>
                      <li>
                        <NavLink to="/property-detail">Oxford Campus</NavLink>
                      </li>
                      <li>
                        <NavLink to="/property-detail">Oak Tower</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/category">Spruce Grove</NavLink>
                    <ul>
                      <li>
                        <NavLink to="/property-detail">Prescott Place</NavLink>
                      </li>
                      <li>
                        <NavLink to="/property-detail">Spruce Height</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/category">St Alberta</NavLink>
                    <ul>
                      <li>
                        <NavLink to="/property-detail">Riverside Villas</NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/testimonials">Testimonials</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
              <li className="menuBtn">
                <NavLink to="/" className="btnCommon">Book An Appointment</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-auto">
          <div className="hdrScl">
            <NavLink to="https://www.facebook.com/gskproperties" target="_blank">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </header>
    </>
  );
}

export default Header;