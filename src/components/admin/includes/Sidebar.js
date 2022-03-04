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
                                <Link to="/admin/banner"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Banner</p>
                                </a>
                                </Link>
                            </li>
                            
                            <li class="nav-item has-treeview ">
                            <Link to="/admin/ameneties"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Amenities</p>
                                </a>
                                </Link>
                            </li>

                            <li class="nav-item has-treeview ">
                            <Link to="/admin/city"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>City</p>
                                </a>
                                </Link>
                            </li>

                            <li class="nav-item has-treeview ">
                            <Link to="/admin/properties"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Property</p>
                                </a></Link>
                            </li>

                            <li class="nav-item has-treeview ">
                            <Link to="/admin/category"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Category</p>
                                </a></Link>
                            </li>

                            <li class="nav-item has-treeview">
                            <Link to="/admin/testimonials"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Testimonials</p>
                                </a></Link>
                            </li>

                            <li class="nav-item has-treeview">
                            <Link to="/admin/whychoose"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Why Choose Us</p>
                                </a></Link>
                            </li>

                            <li class="nav-item has-treeview">
                            <Link to="/admin/aboutus"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>About Us</p>
                                </a></Link>
                            </li>

                            <li class="nav-item has-treeview">
                            <Link to="/admin/feedback"><a href="#!" class="nav-link">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Contact Feedbacks</p>
                                </a></Link>
                            </li>

                            <li class="nav-item has-treeview">
                                <Link to="/admin/property_appointment"><a href="#!" class="nav-link">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Property Appointment</p>
                                </a></Link>
                            </li>

                            <li class="nav-item has-treeview">
                                <Link to="/admin/google_fb_rating"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Google/Facebook Rating</p>
                                </a></Link>
                            </li>
                            
                            <li class="nav-item has-treeview">
                                <Link to="/admin/websetting"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Website Settings</p>
                                </a></Link>
                            </li>


                            <li class="nav-item has-treeview">
                                <Link to="/admin/adminsetting"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Admin Settings</p>
                                </a></Link>
                            </li>

                            <li class="nav-item has-treeview">
                                <Link to="/admin/change_password"><a href="#!" class="nav-link ">
                                    <i class="nav-icon fas fa-copy"></i>
                                    <p>Change Password</p>
                                </a></Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside>
                 
              
        );
    }
}
export default withRouter(Sidebar);
