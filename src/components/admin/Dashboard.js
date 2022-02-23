import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
 
import Header from "./includes/Header.js";
import Sidebar from "./includes/Sidebar.js";
import Footer from "./includes/Footer.js";

class Dashboard extends React.Component{

    render(){
        return (
            <>
             
            <Header />            
            <Sidebar />
             
             
                 
                       

            <Footer />
            </>
        );
    }
}
export default withRouter(Dashboard);