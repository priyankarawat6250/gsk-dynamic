import React from "react";
import { withRouter,Switch,Route } from "react-router-dom";
import config from "../config.js";
import {
        Home,
        Header,
        Footer,
        About,
        WhyChooseUs,
        Properties,
        Category,
        PropertyDetail,
        Testimonials,
        Contact,
        SearchResult
  } from "../components";
  
const axios = require("axios");
class Front extends React.Component{

    state={
            facebook_link:"",
            logo:""
    }

    componentDidMount(){
        this.getSettings();  
    }
    
    getSettings = () => {
        axios.get(`${config.backend_URL}/admin/getSettings`)      
          .then(async (responseJson) => {          
                
              // return
              await this.setState({facebook_link: responseJson.data.data.facebook_link, logo: responseJson.data.data.logo})
          })
          .catch((error) => {
              console.error(error);
          });        
    }


    render(){
        return(
            <>
            <div class="wrapper">
                <Header fblink={this.state.facebook_link} logo={this.state.logo}/>  
                <Switch>
                    <Route exact path={`/`} component={Home}></Route>
                    <Route exact path={`/about-us`} component={About}></Route>
                    <Route exact path={`/why-choose-us`} component={WhyChooseUs}></Route>
                    <Route exact path={`/properties`} component={Properties}></Route>
                    <Route exact path={`/category`} component={Category}></Route>
                    <Route exact path={`/property-detail`} component={PropertyDetail}></Route>
                    <Route exact path={`/testimonials`} component={Testimonials}></Route>
                    <Route exact path={`/contact-us`} component={Contact}></Route>
                    <Route exact path={`/SearchResult`} component={SearchResult}></Route>
                    
                    <Route exact path={`/:slug`} component={PropertyDetail}></Route>
                    
                    
                </Switch >
                <Footer fblink={this.state.facebook_link}/>
                </div>
            </>
        )
    }
}
export default withRouter(Front);