import React from "react";
import { Link, withRouter } from "react-router-dom";
 
class Sidebar extends React.Component{
    
    render(){
        return (
            
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <a href="javascript:void(0)" class="brand-link">
                <span class="brand-text font-weight-light">GSK</span>
                </a>
    
                <div class="sidebar">
      
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <img src="../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div class="info">
                            <a href="javascript:void()" class="d-block">Admin</a>
                        </div>
                    </div>
      
                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            
                            <li class="nav-item has-treeview ">
                                <a href="banner" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Banner</p>
                                </a>
                            </li>
                            
                            <li class="nav-item has-treeview ">
                                <a href="ameneties" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Amenities</p>
                                </a>
                            </li>

                            <li class="nav-item has-treeview ">
                                <a href="city" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>City</p>
                                </a>
                            </li>

                            <li class="nav-item has-treeview ">
                                <a href="add_properties" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Add Property</p>
                                </a>
                            </li>

                            <li class="nav-item has-treeview">
                                <a href="testimonials" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Testimonials</p>
                                </a>
                            </li>

                            <li class="nav-item has-treeview">
                                <a href="whychoose" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Why Choose Us</p>
                                </a>
                            </li>

                            <li class="nav-item has-treeview">
                                <a href="aboutus" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>About Us</p>
                                </a>
                            </li>

                            <li class="nav-item has-treeview">
                                <a href="feedback" class="nav-link">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Feedbacks</p>
                                </a>
                            </li>

                            <li class="nav-item has-treeview">
                                <a href="websetting" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Website Settings</p>
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside>
                 
              
        );
    }
}
export default withRouter(Sidebar);
