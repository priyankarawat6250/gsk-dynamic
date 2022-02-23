import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import Links from "./includes/Links.js";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';

//import jwt from 'jsonwebtoken'
//const axios = require("axios");

class Login extends React.Component{
    
    state={
         
        formdata: {   
          email: "",
          password: "",
        }
    }

    loginAdmin = e => {
        e.preventDefault();        
        
        let error = 0;
        let arry = "";
        if (this.state.formdata.email === "") {
          toast("Email can not be empty");
          error++;
        }
        
        if(this.state.formdata.password === "") {
            toast("Password can not be empty");
            error++;
        }
        
        if (error > 0) {
            $('#error').html(arry)
          } else {
            $('#error').html('');
             
              let options={
                  method:"POST",
                  headers:{
                  Accept:"application/json",
                    "Content-Type":"application/json"
                  },
                  body:JSON.stringify(this.state.formdata)
                }
                fetch(`${config.backend_URL}/admin/loginRequest`,options)
                .then(res=>{
                  //console.log("response",res)
                  return res.json();
                })
      
                .then(data=>{
                  
                    if(data.status == true){
                        toast("Successfully Login!!");
                        // const user_id = jwt.sign({ expiresInMinutes: 60,user_id:data.data.id }, 'pokemon')
                        // const user_flag = jwt.sign({ expiresInMinutes: 60,user_flag:data.data.flag }, 'pokemon')
                        // const user_name = jwt.sign({ expiresInMinutes: 60,user_name:data.data.name }, 'pokemon')
                        // const user_unicode = jwt.sign({ expiresInMinutes: 60,user_unicode:data.data.student_eng_id }, 'pokemon')
                        // const mainID = jwt.sign({ expiresInMinutes: 60,mainID:data.mainID }, 'pokemon')
                        // const user_img = jwt.sign({ expiresInMinutes: 60,user_img:data.photo }, 'pokemon')
                  
                        // localStorage.setItem("user_id",user_id)
                        // localStorage.setItem("user_flag",user_flag)
                        // localStorage.setItem("user_name",user_name)
                        // localStorage.setItem("user_unicode",user_unicode)
                        // localStorage.setItem("mainID",mainID)
                        // localStorage.setItem("user_img",user_img)
                        this.props.history.push('/admin/dashboard')
                    }else{
                        toast(data.message);
                    }
                })
      
                .catch(err=>{
                  console.log("error",err)
                })         
         }      
      
    }

    changedata=(e)=>{
        this.setState({ formdata: { ...this.state.formdata, [e.target.name]:e.target.value} });        
    }

    render(){
        return (
            <>
            <Links />
            <div class="appHdr" >
               
                <ToastContainer />
                <div class="login-box">
                    <div class="login-logo">
                        <a href=""><b>GSK Properties </b></a>
                    </div>
                
                    <div class="card">
                        <div class="card-body login-card-body">
                            <p class="login-box-msg" >Sign in to start your session</p>

                            <form onSubmit={this.loginAdmin}>
                                <div class="input-group mb-3">
                                    <input type="email" class="form-control" placeholder="Email" name="email"  onChange={this.changedata} value={this.state.formdata.email} required/>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" placeholder="Password" name="password" onChange={this.changedata} value={this.state.formdata.password} required/>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>

                                <p id="errorMsg"></p>

                                <div class="row">
                                    <div class="col-4">
                                        <button type="submit" id="submitBtn" class="btn btn-primary btn-block">Sign In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default withRouter(Login);

//export default Login;