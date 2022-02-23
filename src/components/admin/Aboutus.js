import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';

import Header from "./includes/Header.js";
import Sidebar from "./includes/Sidebar.js";
import Footer from "./includes/Footer.js";
import Modal from "react-modal";
const axios = require("axios");

class AdminAboutus extends React.Component {

  state = {
    modalIsOpen: false,
    data: [],
    id: "",
    main_heading: "",
    main_title: "",
    sub_heading: "",
    sub_description: "",
    title: "",
    image: "",
    description: "",
    errors: []
  }

  initialState = {
    modalIsOpen: false,
    data: [],
    id: "",
    main_heading: "",
    main_title: "",
    sub_heading: "",
    sub_description: "",
    title: "",
    image: "",
    description: "",
    errors: []
  };

  openModal = (e) => {
    e.preventDefault()
    this.setState({ modalIsOpen: true })
  }

  closeModal = async (e) => {
    this.setState({ modalIsOpen: false })
  }

  changedata = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  componentDidMount = () => {
    this.getAboutUs();

  }

  getAboutUs = () => {
    axios.get(`${config.backend_URL}/admin/getAboutUs`)
      .then((responseJson) => {
        console.log("sdsds",responseJson.data.data);
        this.setState(responseJson.data.data)
        // console.log(this.state.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  mySubmit = e => {
    e.preventDefault();
      let newObj = {
        bkg_image: this.state.bkg_image,
        main_title: this.state.main_title,
        main_heading: this.state.main_heading,
        sub_heading: this.state.sub_heading,
        sub_description: this.state.sub_description,
      }
      console.log("newObj",newObj)
      axios.post(`${config.backend_URL}/admin/updateAboutUs`, newObj)
        .then(async data => {
          console.log("sdsD",data);
          if (data.data.status === true) {
            toast(data.data.message)
            await this.setState(this.initialState)
            this.getAboutUs();
          } else {
            toast("Something wrong!");
          }
        })
        .catch(err => {
          console.log("error", err)
        })
    

  }

  addMultipleData = e => {
    e.preventDefault();
    let error = 0;
    let arry = "";
    if (this.state.title === "") {
      arry += 'Title can not be empty* <br/>';
      error++;
    }
    if (this.state.description === "") {
      arry += 'Description can not be empty* <br/>';
      error++;
    }
   
    console.log(error)
    if (error > 0) {
      $('#error').html(arry)
    } else {
      $('#error').html('')

      let newData = this.state.data
      newData.push({
        id:(Math.random() + 1).toString(36).substring(10),
        title: this.state.title,
        image: this.state.image,
        description: this.state.description,
        timestamp:Date.now()
      })
      axios.post(`${config.backend_URL}/admin/updateAboutUs`, {data:newData})
        .then(async data => {
          console.log("sdsD-->",data);
          if (data.data.status === true) {
            toast(data.data.message)
            await this.setState({data:newData,image:"",title:"",description:"",modalIsOpen:false})
            this.getAboutUs();
          } else {
            toast("Something wrong!");
          }
        })
        .catch(err => {
          console.log("error", err)
        })
    }

  }

  onFileChange = (e) => {
      ///this.setState({ selectedFile: e.target.files[0] });
      let newObj = new FormData()

      newObj.append('file', e.target.files[0])

      axios.post(`${config.backend_URL}/admin/upload_single_image`, newObj)
      .then(data => {
        console.log(data.data);

        this.setState({ [e.target.name]: data.data.data });

      })

      .catch(err => {
        console.log("error", err)
      })

  };

  delAboutUs = (id) => {
    if (window.confirm("Are you sure")) {
      let options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 'id': id })
      }
      fetch(`${config.backend_URL}/admin/delAboutUs`, options)
        .then(res => {
          //console.log("response",res)
          return res.json();
        })
        .then(data => {
          if (data.status === true) {
            this.getAboutUs();

            toast(data.message);
            //this.setState(this)
          }
          else {
            toast("Something wrong!");
          }
        })
        .catch(err => {
          console.log("error", err)
        })
    }
  }



  render() {


    const customStyles = {
      content: {
        width: '50%',
        top: '50%',
        left: '55%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    return (
      <>
        <div class="wrapper">
          <Header />
          <Sidebar />
          <ToastContainer />
          <div class="content-wrapper">
            <section class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1>About Us </h1>
                  </div>
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                      <button onClick={this.openModal} class="pull-right btn btn-success">Add About Us</button>
                    </ol>
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
                        <h3 class="card-title">Main Content</h3>
                      </div>
                      <div class="card-body">
                        
                      <div class="row">

                      <div class="col-md-6">
                        <label>Background Image</label>
                        <input type="file" name='bkg_image' defaultValue={this.state.image} class="form-control" accept="image/*" onChange={this.onFileChange} required />
                        <br />
                      </div>

                          <div class="form-group col-md-2" >
                            <center><img src={`${config.backend_URL}/`+this.state.bkg_image} height='100px' width='110px' /></center><br />
                            </div>

                        <div class="form-group col-md-6">
                          <label>Title</label>
                          <textarea class="form-control" name="main_title" required onChange={this.changedata} value={this.state.main_title}></textarea>
                        </div>

                        <div class="form-group col-md-6">
                          <label>Heading</label>
                          <textarea class="form-control" name="main_heading" onChange={this.changedata} required value={this.state.main_heading}></textarea>
                        </div>
                      </div>

                      <button type="submit" class="btn btn-primary" onClick={this.mySubmit}>Update</button>
                          
                      </div>
                    </div>
                  </div>


                  <div class="col-md-12">
                    <div class="card card-info">
                      <div class="card-header">
                        <h3 class="card-title">Sub Content</h3>
                      </div>
                      <div class="card-body">
                        
                      <div class="row">
                        

                        <div class="form-group col-md-6">
                          <label>Heading</label>
                          <textarea class="form-control" name="sub_heading" onChange={this.changedata} required value={this.state.sub_heading} ></textarea>
                        </div>

                        <div class="form-group col-md-6">
                          <label>Description</label>
                          <textarea class="form-control" name="sub_description" onChange={this.changedata} required value={this.state.sub_description} ></textarea>
                        </div>

                      </div>
                      <button type="submit" class="btn btn-info" onClick={this.mySubmit} >Update</button>

                      </div>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="card card-primary">
                      <div class="card-header">
                      <div class='row'>
                         
                          
                         <div class='col-md-2'>
                        <button onClick={this.openModal} class="pull-right btn btn-warning" style={{'background-color': 'white',
    'color': '#007bff'}}><b>Add More </b></button>
                        </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <table id="exampl e1" class="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th width="8%">Sr No.</th>
                              <th>Image</th>
                              <th>Title</th>
                              <th>Description</th>
                              <th width="8%">Action</th>
                            </tr>
                          </thead>
                          <tbody>

                            {this.state.data && this.state.data.map((x, key) => {
                              return (
                                <tr key={key}>
                                  <td>{++key}</td>
                                  <td><img src={`${config.backend_URL}/${x.image}`} height={100} /></td>
                                  <td>{x.title}</td>
                                  <td>{x.description}</td>
                                  <td>
                                    <a class="btn btn-danger btn-sm" href="javascript:void(0)" onClick={() => { this.delAboutUs(x.id) }}><i class="fas fa-trash"></i></a>
                                  </td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>


          <Modal
            isOpen={this.state.modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Add About Us"
            ariaHideApp={false}
          >
            {/* modal */}
            <div class="modal-header">
              <h2>Add About Us</h2>
              <button type="button" class="btn-close" onClick={this.closeModal}>x</button>
            </div>
            <div class="modal-body">

              <p id="error"></p>
              <form onSubmit={this.addMultipleData} encType="multipart/form-data" id="testi_form">
                <div class="row">
                  <div class="col-md-6">
                    <input type="file" name='image' id='image' defaultValue={this.state.image} class="form-control" accept="image/*" onChange={this.onFileChange} required />
                    <br />
                  </div>
                  <div class="col-md-6">
                    <input class="form-control" placeholder="Name" onChange={this.changedata} value={this.state.title} name="title" type="text" required />
                    <br />
                  </div>
                  <div class="col-md-12">
                    <textarea class="form-control" placeholder="Description" onChange={this.changedata} value={this.state.description} name="description" type="text" required > </textarea>
                    <br />
                  </div>
                </div>



                <button type="submit" class="btn btn-success">Submit</button>
              </form>
            </div>


          </Modal>

          <Footer />
        </div>
      </>
    );
  }
}
export default withRouter(AdminAboutus);