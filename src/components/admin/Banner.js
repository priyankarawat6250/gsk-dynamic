import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
 
import Modal from "react-modal";
const axios = require("axios");

class AdminBanner extends React.Component {

  state = {
    modalIsOpen: false,
    data: [],
    id: "",
    title: "",
    image: "",
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




  openModal = (e) => {
    e.preventDefault()
    this.setState({ modalIsOpen: true })
  }

  closeModal = async (e) => {
    this.setState({ modalIsOpen: false })
  }

  changedata = (e) => {

    if(e.target.name=='banner_title' && e.target.value.length  >30){
        return;
    }

    this.setState({ [e.target.name]: e.target.value })
  }


  componentDidMount = () => {
    this.getBanners();
    this.getSettingsData();

  }

  getSettingsData = () => {
    axios.get(`${config.backend_URL}/admin/getSettings`)
      .then((responseJson) => {
         
        this.setState({
          banner_title: responseJson.data.data.banner_title
        })
         
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getBanners = () => {

    axios.get(`${config.backend_URL}/admin/getBanners`)
      .then((responseJson) => {

        console.log(responseJson.data.data);
        // return
        this.setState({ data: responseJson.data.data })
        console.log(this.state.data);

      })
      .catch((error) => {
        console.error(error);
      });
  }

  mySubmit = e => {
    e.preventDefault();
    let error = 0;
    let arry = "";
    if (this.state.title === "") {

      arry += 'Title can not be empty* <br/>';
      error++;
    }
    console.log(error)

    //this.setState({ errors: arry }) 
    if (error > 0) {
      $('#error').html(arry)
    } else {
      $('#error').html('')

      let newObj = {
        'image': this.state.imageName,
        'title': this.state.title,
      }

      axios.post(`${config.backend_URL}/admin/addBanner`, newObj)
        .then(async data => {
          console.log(data);

          if (data.data.status === true) {

            toast(data.data.message)

            await this.setState(this.initialState)

            this.getBanners();
            // document.getElementById("testi_form").reset();

          } else {
            toast("Something wrong!");
          }
        })
        .catch(err => {
          console.log("error", err)
        })
    }

  }

  bannerTitleSubmit = e => {
      e.preventDefault();
      let newObj = {
        banner_title: this.state.banner_title
      }
 
      axios.post(`${config.backend_URL}/admin/updateSettings`, newObj)
        .then(async data => {  

          if (data.data.status === true) {
            toast('Banner text updated successfull')             
             
          } else {
            toast("Something wrong!");
          }
        })
        .catch(err => {
          console.log("error", err)
        })      

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

  delBanner = (id) => {

    if (window.confirm("Are you sure")) {
      let options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 'id': id })
      }
      fetch(`${config.backend_URL}/admin/delBanner`, options)
        .then(res => {
          //console.log("response",res)
          return res.json();
        })
        .then(data => {
          if (data.status === true) {
            this.getBanners();

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
        <ToastContainer />
        <div class="content-wrapper">
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1> Banner </h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <button onClick={this.openModal} class="pull-right btn btn-success">Add Banner</button>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section class="content">
            <div class="container-fluid">
              <div class="row">


              <div class="col-md-5">
                    <div class="card card-primary">
                      <div class="card-header">
                        <h3 class="card-title">Banner Title</h3>
                      </div>
                      <div class="card-body">
                        
                      <div class="row">
 

                        <div class="form-group col-md-12">
                            <label>Title</label>
                            <input class="form-control" name="banner_title" required onChange={this.changedata} value={this.state.banner_title} placeholder="Enter Banner Title"/> 
                        </div>


                        <div class="form-group col-md-3">
                            <button type="submit" class="btn btn-primary" onClick={this.bannerTitleSubmit}>Update</button>
                        </div>
 
                      </div>

                      
                          
                      </div>
                    </div>
                  </div>


                <div class="col-md-7">
                  <div class="card card-primary">
                    <div class="card-header">
                      <h3 class="card-title">Banners List</h3>
                    </div>
                    <div class="card-body">
                      <table id="exampl e1" class="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th >Sr No.</th>
                            <th>Image</th> 
                            <th >Action</th>
                          </tr>
                        </thead>
                        <tbody>

                          {this.state.data.length > 0 ? this.state.data.map((x, key) => {
                            return (
                              <tr key={key}>
                                <td>{++key}</td>
                                <td><img src={`${config.backend_URL}/${x.image}`} height={100} /></td>
                                <td>
                                  <a class="btn btn-danger btn-sm" href="javascript:void(0)" onClick={() => { this.delBanner(x._id) }}><i class="fas fa-trash"></i></a>
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
            <h2>Add Banner</h2>
            <button type="button" class="btn-close" onClick={this.closeModal}>x</button>
          </div>
          <div class="modal-body">

            <p id="error"></p>
            <form onSubmit={this.mySubmit} encType="multipart/form-data" id="testi_form">
              <div class="row">

                <div class="col-md-6">
                  <input type="file" name='image' id='image' defaultValue={this.state.image} class="form-control" accept="image/*" onChange={this.onFileChange} required />
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
export default withRouter(AdminBanner);