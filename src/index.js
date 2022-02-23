import React from "react";
import ReactDOM from "react-dom"; 
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  WhyChooseUs,
  Properties,
  Category,
  PropertyDetail,
  Testimonials,
  Contact,
  Adminlogin,
  Dashboard,
  AdminAmeneties,
  AdminCity,
  AdminBanner,
  AdminProperties,
  AdminTestimonials,
  AdminWhychoose,
  AdminAboutus,
  AdminFeedback,
  AdminWebsetting
} from "./components";

ReactDOM.render(
  <Router>
     
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about-us" component={About } />
      <Route path="/why-choose-us" component={WhyChooseUs } />
      <Route path="/properties" component={Properties } />
      <Route path="/category" component={Category } />
      <Route path="/property-detail" component={PropertyDetail } />
      <Route path="/testimonials" component={Testimonials } />
      <Route path="/contact-us" component={Contact} />

      {/* Admin routes */}
      <Route path="/login" component={Adminlogin} />
      <Route path="/admin/dashboard" component={Dashboard} />
    
       <Route path="/admin/city" component={AdminCity} /> 
      <Route path="/admin/banner" component={AdminBanner} /> 
      <Route path="/admin/properties" component={AdminProperties} /> 
      <Route path="/admin/testimonials" component={AdminTestimonials} /> 
      <Route path="/admin/whychoose" component={AdminWhychoose} /> 
      <Route path="/admin/aboutus" component={AdminAboutus} /> 
      <Route path="/admin/feedback" component={AdminFeedback} /> 
      <Route path="/admin/websetting" component={AdminWebsetting} /> 
       <Route path="/admin/ameneties" component={AdminAmeneties} /> 
      
    </Switch>
         
  </Router>,

  document.getElementById("root")
);