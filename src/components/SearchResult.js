import React from "react";
import { Link } from "react-router-dom";
import config from "../config.js";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Feedback_Form from "./Feedback_Form.js"; 
 
const axios = require("axios");
class SearchResult extends React.Component{
  
  componentDidMount(){
    
    const state = this.props.location.state
    console.log('Hiiii',state);
    this.filterProperty();
  
  }

  filterProperty = () => {

    axios.post(`${config.backend_URL}/admin/filterProperty`, this.props.location.state) 
      .then((responseJson) => {
          
          this.setState(responseJson.data.data);
          console.log('result', responseJson.data.data);
      })
      .catch((error) => {
          console.error(error);
      });     

  }
 
   
  
  render(){
    return (
    <>
     
    <ToastContainer />

    <section>
      
    </section>
     
    </>
  )
} };

export default SearchResult;