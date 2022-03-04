import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";

import Header from "./Header.js";
import Footer from "./Footer.js";

class Category extends React.Component{

    render(){
        return (
        <>
         
    <section>
      <article className="pageHdrBlock wrapper py-80" style={{backgroundImage: `url("images/subpageBg.jpg")`}}>
        <div className="pageHdrOverlay"></div>
        <div className="container">
            <div className="row align-items-center justify-space-beetween">
                <div className="col-sm">
                    <h3>Category Name</h3>
                </div>
                <div className="col-sm-auto">
                    <div className="pagebrdcrmbs">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/properties">Properties</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Category Name</li>
                        </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </article>
      <article className="propertyCatBlock wrapper pt-80">
        <div className="container">
            <div className="propertyTabsRow">
                <div className="propertyTabsOuter">
                    <Tabs defaultActiveKey="edmonton" id="uncontrolled-tab-example" className="propertyTabs">
                        <Tab eventKey="all" title="All">
                            <div className="propertyCatItems">
                                <div className="row filterMain g-5">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/oakTower.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Oak Tower</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 11635 102 Avenue, Edmonton, Alberta, T5K0R4</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/chappelleGardenVillas.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Chappelle Garden Villas</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 1210 Chappelle BLVD, Edmonton, T6W3L5</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/silverstoneTerrace.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Silverstone Terrace</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 2910 141 Street SW, Edmonton, T6W 3M2</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/chappelleGarden.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Chappelle Garden</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 1071 Chappelle Blvd SW, Edmonton, T6W3M1</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/novaVilla.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Nova Villa</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 12615 152 Ave NW, Edmonton, T5X6E9</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/oxfordCampus.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Oxford Campus</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 16504 130 Street NW, Edmonton, T6V0E9</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/prescottPlace.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Prescott Place</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 320 Pioneer Road, Spruce Grove T7X0Y2</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/spruceHeight.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Spruce Height</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 111 Mclaughlin DR, Spruce Grove T7X0T</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/riversideVillas.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Riverside Villas</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 5 Redspur Drive, St. Albert, Alberta T8N7Y6</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="edmonton" title="Edmonton">
                            <div className="propertyCatItems">
                                <div className="row filterMain g-5">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/oakTower.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Oak Tower</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 11635 102 Avenue, Edmonton, Alberta, T5K0R4</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/chappelleGardenVillas.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Chappelle Garden Villas</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 1210 Chappelle BLVD, Edmonton, T6W3L5</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/silverstoneTerrace.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Silverstone Terrace</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 2910 141 Street SW, Edmonton, T6W 3M2</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/chappelleGarden.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Chappelle Garden</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 1071 Chappelle Blvd SW, Edmonton, T6W3M1</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/novaVilla.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Nova Villa</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 12615 152 Ave NW, Edmonton, T5X6E9</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/oxfordCampus.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Oxford Campus</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 16504 130 Street NW, Edmonton, T6V0E9</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="spruce-grove" title="Spruce Grove">
                            <div className="propertyCatItems">
                                <div className="row filterMain g-5">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/prescottPlace.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Prescott Place</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 320 Pioneer Road, Spruce Grove T7X0Y2</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/spruceHeight.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Spruce Height</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 111 Mclaughlin DR, Spruce Grove T7X0T</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="st-alberta" title="St Alberta">
                            <div className="propertyCatItems">
                                <div className="row filterMain g-5">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                        <div className="prprtyItem">
                                            <a href="/property-detail">
                                                <div className="prprtyBadge">For Rent</div>
                                                <div className="prprtyImg" style={{backgroundImage: `url("images/riversideVillas.jpg")`}}>
                                                    <div className="prprtyOverlay"></div>
                                                </div>
                                                <div className="prprtyInfo">
                                                    <h4>Riverside Villas</h4>
                                                    <p><i><img src="images/locIcon.png" /></i> 5 Redspur Drive, St. Albert, Alberta T8N7Y6</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>			    
            </div>
        </div>
      </article>
    </section>

     
    </>
  )
} };

export default Category;