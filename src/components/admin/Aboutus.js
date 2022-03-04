import React from "react";
import { withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
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

  openModal = (id = '', title = '', image = '', description='') => {
    
    // if(this.state.data.length < 3){
    //   this.setState({ modalIsOpen: true })
    // }
    console.log('ABC',id);
    this.setState({ id: id, title: title, image: image, description: description, modalIsOpen: true });
    
  }

  closeModal = async (e) => {
    this.setState({ modalIsOpen: false })
  }

  changedata = (e) => {
      if(e.target.name=='main_title' && e.target.value.length  >60){
          return;
      }

      if(e.target.name=='main_heading' && e.target.value.length  >67){
        return;
      }

      if(e.target.name=='sub_heading' && e.target.value.length  >35){
        return;
      }

      if(e.target.name=='sub_description' && e.target.value.length  >280){
        return;
      }

      this.setState({ [e.target.name]: e.target.value })
  }


  componentDidMount = () => {
    this.getAboutUs();

  }

  getAboutUs = () => {
    axios.get(`${config.backend_URL}/admin/getAboutUs`)
      .then((responseJson) => {
        
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
       
      axios.post(`${config.backend_URL}/admin/updateAboutUs`, newObj)
        .then(async data => {
           
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
     
    if (this.state.title === "") {
      toast('Title can not be empty');
    }

    if (this.state.description === "") {
      toast('Description can not be empty');       
    }
    
    console.log("Id", this.state.id);

    if(this.state.id == ''){
      //Insert Data

      const min = 10;
      const max = 1000;
      const rand = min + Math.random() * (max - min);

      let newData = this.state.data
      newData.push({
        id:rand,
        title: this.state.title,
        image: this.state.image,
        description: this.state.description,
        timestamp:Date.now()
      })

       
      axios.post(`${config.backend_URL}/admin/updateAboutUs`, {data:newData})
        .then(async data => {
          
          
          if (data.data.status === true) {
            toast(data.data.message)
            await this.setState({data:newData,image:"",title:"",description:"",modalIsOpen:false})
            // this.getAboutUs();
          } else {
            toast("Something wrong!");
          }
        })
        .catch(err => {
          console.log("error", err)
        })
     
      }else{
        
        
      let newData = this.state.data
      newData.map(x=>{
        if(x.id === this.state.id){
          x.title= this.state.title
          x.image= this.state.image
          x.description= this.state.description
        }
      })

        
         //Update Data
          axios.post(`${config.backend_URL}/admin/updateAboutUs`, {data:newData})
          .then(async data => {
            
            
            if (data.data.status === true) {
              toast(data.data.message)
              await this.setState({data:newData, image:"", title:"",description:"", modalIsOpen:false})
              // this.getAboutUs();
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
                      <button  onClick={() => { this.openModal('', '', '', '' ) }} class="pull-right btn btn-success">Add About Us</button>
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
                            <center><img src={`${config.backend_URL}/`+this.state.bkg_image} height='100px' width='200px' /></center><br />
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
                          <textarea class="form-control"  rows={6} name="sub_description" onChange={this.changedata} required value={this.state.sub_description} ></textarea>
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
                         
                          
                         

                        {this.state.data.length < 3 ? 
                            <div class='col-md-2'>
                              <button onClick={() => { this.openModal('', '', '', '' ) }} class="pull-right btn btn-warning" style={{'background-color': 'white','color': '#007bff'}}><b>Add More </b></button>
                              </div>
                        :''
                          
                            
                          
                        }


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
                              <th width="5%">Action</th>
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

                                  <a href="javascript:void(0)" onClick={() => { this.openModal( x.id, x.title, x.image, x.description ) }} class="btn btn-success btn-sm"><i class="fa fa-edit"></i></a> &nbsp;&nbsp;
                                    {/* <a class="btn btn-danger btn-sm" href="javascript:void(0)" onClick={() => { this.delAboutUs(x.id) }}><i class="fas fa-trash"></i></a> */}
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
              <h2>About Us</h2>
              <button type="button" class="btn-close" onClick={this.closeModal}>x</button>
            </div>
            <div class="modal-body">

              <p id="error"></p>
              <form onSubmit={this.addMultipleData} encType="multipart/form-data" id="testi_form">
                <div class="row">
                  <div class="col-md-6">
                    <input type="file" name='image' id='image'  class="form-control" accept="image/*" onChange={this.onFileChange} />
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
      </>
    );
  }
}
export default withRouter(AdminAboutus);