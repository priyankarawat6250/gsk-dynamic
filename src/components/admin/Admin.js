import React from "react";
import { Link, withRouter,Switch,Route } from "react-router-dom";
import Header from "./includes/Header.js";
import Footer from "./includes/Footer.js";
import Sidebar from "./includes/Sidebar.js";
import {
    Dashboard,
    AdminAmeneties,
    AdminCity,
    AdminBanner,
    AdminProperties,
    AdminProperties_list,
    AdminCategory,
    AdminTestimonials,
    AdminWhychoose,
    AdminAboutus,
    AdminFeedback,
    AdminSocialRating,
    AdminWebsetting,
    Adminsetting,
    Property_Appointment,
    ChangePassword
  } from "../../components";
class Admin extends React.Component{
    render(){
        return(
            <>
            <div class="wrapper">
                <Header/>
                <Sidebar />
                <Switch>
                    <Route path={`${this.props.match.url}/dashboard`} component={Dashboard}></Route>
                    <Route path={`${this.props.match.url}/city`} component={AdminCity}></Route>
                    <Route path={`${this.props.match.url}/category`} component={AdminCategory}></Route>
                    <Route path={`${this.props.match.url}/banner`} component={AdminBanner}></Route>
                    <Route path={`${this.props.match.url}/properties`} component={AdminProperties}></Route>
                    <Route path={`${this.props.match.url}/properties_list`} component={AdminProperties_list}></Route>
                    
                    <Route path={`${this.props.match.url}/testimonials`} component={AdminTestimonials}></Route>
                    <Route path={`${this.props.match.url}/whychoose`} component={AdminWhychoose}></Route>
                    <Route path={`${this.props.match.url}/aboutus`} component={AdminAboutus}></Route>
                    <Route path={`${this.props.match.url}/feedback`} component={AdminFeedback}></Route>
                    <Route path={`${this.props.match.url}/property_appointment`} component={Property_Appointment}></Route>
                    <Route path={`${this.props.match.url}/websetting`} component={AdminWebsetting}></Route>
                    <Route path={`${this.props.match.url}/adminsetting`} component={Adminsetting}></Route>
                    <Route path={`${this.props.match.url}/change_password`} component={ChangePassword}></Route>
                    
                    <Route path={`${this.props.match.url}/ameneties`} component={AdminAmeneties}></Route>
                    <Route path={`${this.props.match.url}/google_fb_rating`} component={AdminSocialRating}></Route>
                    
                </Switch>
                <Footer/>
                </div>
            </>
        )
    }
}
export default withRouter(Admin);