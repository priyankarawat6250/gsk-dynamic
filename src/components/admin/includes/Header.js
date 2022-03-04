import React from "react";
import { Link, withRouter } from "react-router-dom";
import Links from "./Links.js";

class Header extends React.Component{
    
    render(){
        return (
            <>
            <Links />    

            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                 
                <ul class="navbar-nav">                    
                    
                    <li class="nav-item d-none d-sm-inline-block">
                        <Link to="/admin/category"><a href="#!" class="nav-link">Logout</a></Link>
                    </li>

                </ul>  
            </nav>
                 
            </>
        );
    }
}
export default withRouter(Header);
