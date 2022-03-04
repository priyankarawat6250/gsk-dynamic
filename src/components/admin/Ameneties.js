import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';

import Modal from "react-modal";
const axios = require("axios");

class AdminAmeneties extends React.Component {

  state = {
    modalIsOpen: false,
    data: [],
    id: "",
    title: "",
    image: "",
    amenity_heading: "",
    amenity_desc: "",
    errors: []
  }

  initialState = {
    modalIsOpen: false,
    data: [],
    id: "",
    title: "",
    image: "",
    errors: []

  };

  openModal = (id = '', title = '', image = '') => {
    this.setState({ id: id, title: title, image: image, modalIsOpen: true });
  }

  closeModal = async (e) => {
    this.setState({ modalIsOpen: false })
  }

  changedata = (e) => {
    if (e.target.name == 'amenity_desc' && e.target.value.length > 330) {
      return;
    }
    this.setState({ [e.target.name]: e.target.value })
  }


  componentDidMount = () => {
    this.getAmeneties();
    this.getSettingsData();

  }

  getAmeneties = () => {

    axios.get(`${config.backend_URL}/admin/getAmeneties`)
      .then((responseJson) => {


        this.setState({ data: responseJson.data.data })


      })
      .catch((error) => {
        console.error(error);
      });
  }
  getSettingsData = () => {
    axios.get(`${config.backend_URL}/admin/getSettings`)
      .then((responseJson) => {

        this.setState({
          amenity_heading: responseJson.data.data.amenity_heading,
          amenity_desc: responseJson.data.data.amenity_desc
        })
        // console.log(this.state.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  mySubmit = e => {
    e.preventDefault(); 

      if (this.state.title === "") {
            toast('Title can not be empty');
      }
    
      let newObj = {
        'image': this.state.imageName,
        'title': this.state.title,
      }

    if(this.state.id == ''){
      //Insert Data

        axios.post(`${config.backend_URL}/admin/addAmeneties`, newObj)
        .then(async data => {
          console.log(data);

          if (data.data.status === true) {

            toast(data.data.message)

            await this.setState(this.initialState)

            this.getAmeneties();
             

          } else {
            toast("Something wrong!");
          }
        })
        .catch(err => {
          console.log("error", err)
        })

    }else{
      
      newObj['id'] =  this.state.id;
      //Update Data
      axios.post(`${config.backend_URL}/admin/updateAmeneties`, newObj)
          .then(async data => {

            if (data.data.status === true) {

                toast(data.data.message)
                await this.setState(this.initialState)
                this.getAmeneties();

            }else{
                toast("Something wrong!");
            }
          })
          .catch(err => {
            console.log("error", err)
          })
    }
    

  }

  onFileChange = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
    let newObj = new FormData()
    newObj.append('file', e.target.files[0])

    axios.post(`${config.backend_URL}/admin/upload_single_image`, newObj)
      .then(data => {
        console.log(data.data);
        this.setState({ imageName: data.data.data });
      })
      .catch(err => {
        console.log("error", err)
      })

  };

  delAmenity = (id) => {

    if (window.confirm("Are you sure")) {
      let options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 'id': id })
      }
      fetch(`${config.backend_URL}/admin/delAmeneties`, options)
        .then(res => {
          //console.log("response",res)
          return res.json();
        })
        .then(data => {
          if (data.status === true) {
            this.getAmeneties();

            toast(data.message);
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

  UpdateContent = e => {
    e.preventDefault();
    let error = 0;
    let arry = "";
    if (this.state.amenity_heading === "") {

      toast('Heading can not be empty*');
      error++;
    }

    if (this.state.amenity_desc === "") {
      toast('Description can not be empty*');

      error++;
    }

    console.log(error)

    //this.setState({ errors: arry }) 
    if (error > 0) {
      $('#error').html(arry)
    } else {
      $('#error').html('')

      let newObj = {
        'amenity_heading': this.state.amenity_heading,
        'amenity_desc': this.state.amenity_desc,
      }

      axios.post(`${config.backend_URL}/admin/updateSettings`, newObj)
        .then(async data => {
          console.log(data);

          if (data.data.status === true) {

            toast("Content Updated Successfully")



            this.getSettingsData();


          } else {
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
        <ToastContainer />
        <div class="content-wrapper">
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1> Amenities </h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <button onClick={this.openModal} class="pull-right btn btn-success">Add Amenity</button>
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
                      <h3 class="card-title">Top Content</h3>
                    </div>
                    <div class="card-body">

                      <div class="row">


                        <div class="form-group col-md-6">
                          <label>Heading</label>
                          <textarea class="form-control" name="amenity_heading" onChange={this.changedata} required value={this.state.amenity_heading}></textarea>
                        </div>

                        <div class="form-group col-md-6">
                          <label>Description</label>
                          <textarea class="form-control" rows={5} name="amenity_desc" required onChange={this.changedata} required value={this.state.amenity_desc}></textarea>
                        </div>

                      </div>


                      <button type="submit" class="btn btn-primary" onClick={this.UpdateContent}>Update</button>

                    </div>
                  </div>
                </div>


                <div class="col-md-12">
                  <div class="card card-primary">
                    <div class="card-header">
                      <h3 class="card-title">Amenities List</h3>
                    </div>
                    <div class="card-body">
                      <table id="exampl e1" class="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th width="16%">Sr No.</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th width="20%">Action</th>
                          </tr>
                        </thead>
                        <tbody>

                          {this.state.data.length > 0 ? this.state.data.map((x, key) => {
                            return (
                              <tr key={key}>
                                <td>{++key}</td>
                                <td><img src={`${config.backend_URL}/${x.image}`} height={100} /></td>
                                <td>{x.title}</td>
                                <td>

                                  <a href="javascript:void(0)" onClick={() => { this.openModal(x._id, x.title, x.image) }} class="btn btn-success btn-sm"><i class="fa fa-edit"></i></a> &nbsp;&nbsp;
                                  <a class="btn btn-danger btn-sm" href="javascript:void(0)" onClick={() => { this.delAmenity(x._id) }}><i class="fas fa-trash"></i></a>

                                </td>
                              </tr>
                            )
                          }) :

                            <tr>
                              <td colSpan={4} style={{ color: 'red' }}><center> Result Not Found </center></td>
                            </tr>

                          }
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
          contentLabel="Add Amenities"
          ariaHideApp={false}
        >
          {/* modal */}
          <div class="modal-header">
            <h2>Amenity</h2>
            <button type="button" class="btn-close" onClick={this.closeModal}>x</button>
          </div>
          <div class="modal-body">

            <p id="error"></p>
            <form onSubmit={this.mySubmit} encType="multipart/form-data" id="testi_form">
              <div class="row">
                <div class="col-md-6">
                  <input type="file" name='image' id='image' class="form-control" accept="image/*" onChange={this.onFileChange}  />
                  <br />
                </div>
                <div class="col-md-6">
                  <input class="form-control" placeholder="Enter Title" onChange={this.changedata} value={this.state.title} name="title" type="text" required />
                  <br />
                </div>
              </div>



              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>


        </Modal>

      </>
    );
  }
}
export default withRouter(AdminAmeneties);