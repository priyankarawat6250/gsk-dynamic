import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
  
const axios = require("axios");

class Socialrating extends React.Component {

  state = {
        google_rating: "",
        google_page_link: "",
        google_text: "",
        facebook_rating: "",
        facebook_page_link: "",
        facebook_text: ""
  }

  changedata = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount = () => {
      this.getSettingsData();

  }
  
  getSettingsData = () => {
    axios.get(`${config.backend_URL}/admin/getSettings`)
      .then((responseJson) => {
        
        this.setState({
          google_rating: responseJson.data.data.google_rating,
          facebook_rating: responseJson.data.data.facebook_rating,
          google_page_link: responseJson.data.data.google_page_link,
          facebook_page_link: responseJson.data.data.facebook_page_link,
          google_text: responseJson.data.data.google_text,
          facebook_text:responseJson.data.data.facebook_text
        })
         
      })
      .catch((error) => {
        console.error(error);
      });
  }

  mySubmit = e => {
    e.preventDefault();
   
      // let newObj = {
      //   'google_rating': this.state.google_rating,
      //   'title': this.state.title,
      //   'description': this.state.description,
      // }

      axios.post(`${config.backend_URL}/admin/updateSettings`, this.state)
        .then(async data => {
          console.log(data);

          if (data.data.status === true) {

            toast(data.data.message) 
          } else {
            toast("Something wrong!");
          }
        })
        .catch(err => {
          console.log("error", err)
        })
    

  }
  


  render() {
 
    return (
      <>
          <ToastContainer />

                <div class="content-wrapper">
                  <section class="content-header">
                    <div class="container-fluid">
                      <div class="row mb-2">
                        <div class="col-sm-6">
                          <h1> Google, Facebook Rating </h1>
                        </div>
                        <div class="col-sm-6">

                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="content">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="card card-primary">
                            <div class="card-header">
                              <h3 class="card-title">Google, Facebook Rating </h3>
                            </div>

                            <form onSubmit={this.mySubmit}>
                              <div class="card-body"> 

                                <div class="row">
                                  
                                  <div class="form-group col-md-7">
                                      <label>Google Page Link</label>
                                      <input type="text" class="form-control" name="google_page_link" placeholder="Enter Google Page Link" required value={this.state.google_page_link} onChange={this.changedata} />
                                  </div>

                                  <div class="form-group col-md-2">
                                    <label>Google Rating</label>
                                    <input type="number" min='0' max='5' class="form-control number" name="google_rating" placeholder="eg 5" required value={this.state.google_rating} onChange={this.changedata} />
                                  </div>

                                  <div class="form-group col-md-3">
                                    <label>Text For Google Rating</label>
                                    <input type="text" class="form-control" name="google_text" placeholder="eg Based on 10+ reviews" value={this.state.google_text} onChange={this.changedata} />
                                  </div>


                                  <div class="form-group col-md-7">
                                      <label>Facebook Page Link</label>
                                      <input type="text" class="form-control" name="facebook_page_link" placeholder="Enter Facebook Page Link" required value={this.state.facebook_page_link} onChange={this.changedata} />
                                  </div>

                                  <div class="form-group col-md-2">
                                    <label>Facebook Rating</label>
                                    <input type="number" min='0' max='5' class="form-control number" name="facebook_rating" placeholder="eg 5" required value={this.state.facebook_rating} onChange={this.changedata} />
                                  </div>

                                  <div class="form-group col-md-3">
                                    <label>Text For Facebook Rating</label>
                                    <input type="text" class="form-control" name="facebook_text" placeholder="eg Based on 10+ reviews" value={this.state.facebook_text} onChange={this.changedata} />
                                  </div>  


                                  <div class="form-group col-md-2">
                                    <label>&nbsp;&nbsp;&nbsp;</label>
                                    <button type="submit" class="btn btn-primary"> Update</button>
                                  </div>

                                </div>

                              

                                </div>
                            </form>

                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                 

 
      </>
    );
  }
}
export default withRouter(Socialrating);