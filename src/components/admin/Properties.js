import React from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../../config.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { Container, Row, Col, Form, Button, ProgressBar } from "react-bootstrap"
import ProgressBar from 'react-bootstrap/ProgressBar'
import slugify from 'react-slugify';

const axios = require("axios");

class Properties extends React.Component {

  state = {
    Features: [{ feature: ""} ],
    VirtualTours: [{ virtual_tours_title: "" , virtual_tours_link: "" }],
    Highlights: [{ highlight_icon: "" , highlight_text: "" , highlight_amount: "" }],
    Youtube: [{ youtube_video_heading:"", youtube_video_link:"" }],
    Emails: [{ manager_email:"" }],   
    Blocks: [{ Block_image:"", block_price: "", security_deposit:"", bedroom:"", bathroom:"" }],
    cityData: [],
    city: "",
    categoryData:[],
    category:"",
    imageName:"",
    property_name: "",
    address: "",
    manager_number:"",
    property_image:"",
    property_title:"",
    property_desc:"",
    property_features:[],
    google_rating: "",
    google_page_link: "",
    google_text: "",
    facebook_rating: "",
    facebook_page_link: "",
    facebook_text: "",
    errors: [],
    progress:0
  }

  initialState = {
    Features: [{ feature: ""}],
    VirtualTours: [{ virtual_tours_title: "" , virtual_tours_link: "" }],
    Highlights: [{ highlight_icon: "" , highlight_text: "" , highlight_amount: "" }],
    Youtube: [{ youtube_video_heading:"", youtube_video_link:"" }],
    Emails: [{ manager_email:"" }], 
    Blocks: [{ Block_image:"", block_price: "", security_deposit:"", bedroom:"", bathroom:"" }],
    city: "",
    category:"",
    imageName:"",
    property_name: "",
    address: "",
    manager_number:"",
    property_image:"",
    property_title:"",
    property_desc:"",
    property_features:[],
    google_rating: "",
    google_page_link: "",
    google_text: "",
    facebook_rating: "",
    facebook_page_link: "",
    facebook_text: "",
    errors: [],
    progress:0

  };

  openModal = (e) => {
    e.preventDefault()
    this.setState({ modalIsOpen: true })
  }

  closeModal = async (e) => {
    this.setState({ modalIsOpen: false })
  }


  changedata = (e) => {
    if(e.target.name=='property_name'){      
      this.setState({ 'slug': slugify(e.target.value) });
    }
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount = () => {
    this.getCities();
    this.getCategory();
  }

  getCities = () => {    

    axios.get(`${config.backend_URL}/admin/getCities`)
      .then((responseJson) => {
        this.setState({ cityData: responseJson.data.data })
         
      })
      .catch((error) => {
        console.error(error);
      });
  }


  getCategory = () => {
    axios.get(`${config.backend_URL}/admin/getCategories`)
        .then((responseJson) => {

            
            this.setState({ categoryData: responseJson.data.data })
             

        })
        .catch((error) => {
            console.error(error);
        });
  }

    mySubmit = e => {
        e.preventDefault();         
        
        //return ; 
        let newObj = {          
            'property_image':this.state.imageName,
            'property_name':this.state.property_name,
            'slug': slugify(this.state.property_name),
            'cityId':this.state.city,
            'address':this.state.address,
            'categoryId':this.state.category,
            'manager_number':this.state.manager_number,
            'property_title':this.state.property_title,
            'property_desc':this.state.property_desc,
            'property_youtube':this.state.Youtube,
            'google_rating': Number(this.state.google_rating),
            'google_page_link':this.state.google_page_link,
            'google_text':this.state.google_text,
            'facebook_rating': Number(this.state.facebook_rating),
            'facebook_page_link':this.state.facebook_page_link,
            'facebook_text':this.state.facebook_text
            
        }

        let VirtualTours = [];
            this.state.VirtualTours.map(x=>{
            if(x.virtual_tours_title != "" && x.virtual_tours_link != ""){
              VirtualTours.push(x);              
            }
        })
        newObj['property_virtualTours'] = VirtualTours;
      // *****************************************************

        let Features = [];
            this.state.Features.map(x=>{
            if(x.feature != ""){
              Features.push(x);              
            }
        })
        newObj['property_features'] = Features;
      // ***************************************************** 

        let Emails = [];
            this.state.Emails.map(x=>{
            if(x.manager_email != "" ){
              Emails.push(x);              
            }
        })

        newObj['manager_emails'] = Emails;
        // *****************************************************


        let Highlights = [];
            this.state.Highlights.map(x=>{
            if(x.highlight_text != "" && x.highlight_amount != "" ){
                Highlights.push(x);              
            }
        })
        newObj['property_highlights'] = Highlights;
        // *****************************************************


        let Blocks = [];
            this.state.Blocks.map(x=>{
            if(x.highlight_text != "" && x.highlight_amount != "" ){
              Blocks.push(x);              
            }
        })

        newObj['property_blocks'] = Blocks;
        // *****************************************************
        

        axios.post(`${config.backend_URL}/admin/addProperty`, newObj)
          .then(async data => {
              
              if (data.data.status === true) {
                toast(data.data.message)
                await this.setState(this.initialState)
                 
                 
              } else {
                toast(data.data.message);
              }
            })

          .catch(err => {
              console.log("error", err)
          });            
    }


  onFileChange = (e) => {    
    let newObj = new FormData()
    newObj.append('file', e.target.files[0])
      axios.post(`${config.backend_URL}/admin/upload_single_image`, newObj, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: data => {
            //Set the progress value to show the progress bar
            this.setState( {progress :  Math.round((100 * data.loaded) / data.total)})
        },
      })  
      .then(data => {
         
        this.setState({ imageName: data.data.data });
      })
      .catch(err => {
        console.log("error", err)
      })
  };

  onFileChange1 = (e) => {     
    let index = e.target.getAttribute('data-key')
    

    let newObj = new FormData();
    newObj.append('file', e.target.files[0])

    axios.post(`${config.backend_URL}/admin/upload_single_image`, newObj)
      .then(data => {
          
        let Highlights = this.state.Highlights;
            Highlights[index]['highlight_icon'] = data.data.data;
            this.setState({ Highlights });

      })
      .catch(err => {
        console.log("error", err)
      })

  };


  onFileChange2 = (e) => {     
    let index = e.target.getAttribute('data-key')
    

    let newObj = new FormData();
    newObj.append('file', e.target.files[0])

    axios.post(`${config.backend_URL}/admin/upload_single_image`, newObj)
      .then(data => {
          
        let Blocks = this.state.Blocks;
          Blocks[index]['Block_image'] = data.data.data;
            this.setState({ Blocks });

      })
      .catch(err => {
        console.log("error", err)
      })

  };

  
   
  // add More Features 
  addEmailsFields() {
    this.setState(({
      Emails: [...this.state.Emails, { manager_email: "" }]
    }))
  }

  removeEmailsFields(i) {
    let Emails = this.state.Emails;
    Emails.splice(i, 1);
    this.setState({ Emails });
  }

  EmailsChange(i, e) {
    //alert(e.target.value);

      let Emails = this.state.Emails;
      Emails[i][e.target.name] = e.target.value;
      this.setState({ Emails });
  }
   
  // add More Features 
  addFeaturesFields() {
    this.setState(({
      Features: [...this.state.Features, { feature: "" }]
    }))
  }

  removeFeaturesFields(i) {
    let Features = this.state.Features;
    Features.splice(i, 1);
    this.setState({ Features });
  }

  FeaturesChange(i, e) {
    //alert(e.target.value);

      let Features = this.state.Features;
      Features[i][e.target.name] = e.target.value;
      this.setState({ Features });
  }
  
  
  // add More VirtualTours 
  addVirtualToursFields() {
    this.setState(({
      VirtualTours: [...this.state.VirtualTours, { virtual_tours_title:"", virtual_tours_link: "" }]
    }))
  }

  removeVirtualToursFields(i) {
    let VirtualTours = this.state.VirtualTours;
    VirtualTours.splice(i, 1);
    this.setState({ VirtualTours });
  }
  
  VirtualToursChange(i, e) {
    let VirtualTours = this.state.VirtualTours;
    VirtualTours[i][e.target.name] = e.target.value;
    this.setState({ VirtualTours });
  }
  
  //Youtube
  addYoutubeFields() {
    this.setState(({
      Youtube: [...this.state.Youtube, { virtual_tours_title:"", virtual_tours_link: "" }]
    }))
  }

  removeYoutubeFields(i) {
    let Youtube = this.state.Youtube;
    Youtube.splice(i, 1);
    this.setState({ Youtube });
  }
  
  YoutubeChange(i, e) {
    let Youtube = this.state.Youtube;
    Youtube[i][e.target.name] = e.target.value;
    this.setState({ Youtube });
  }

  // add More Highlight 
  addHighlightsFields() {
    this.setState(({
      Highlights: [...this.state.Highlights, { highlight_icon:"", highlight_text: "", highlight_amount:"" }]
    }))
  }

  removeHighlightsFields(i) {
    let Highlights = this.state.Highlights;
    Highlights.splice(i, 1);
    this.setState({ Highlights });
  }

  HighlightsChange(i, e) {
    let Highlights = this.state.Highlights;
    Highlights[i][e.target.name] = e.target.value;
    this.setState({ Highlights });
  }

  

  // add More Blocks
  addBlocksFields() {     
    this.setState(({
        Blocks: [...this.state.Blocks, { Block_image:"", block_price: "", security_deposit:"", bedroom:"", bathroom:"" }]
    }))
  }

  removeBlocksFields(i) {
    let Blocks = this.state.Blocks;
    Blocks.splice(i, 1);
    this.setState({ Blocks });
  }

  BlocksChange(i, e) {

    let Blocks = this.state.Blocks;
    Blocks[i][e.target.name] = Number(e.target.value);
    this.setState({ Blocks });

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
                  <h1> Add Properties </h1>
                </div>

                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                   
                    <Link to="/admin/properties_list"><button class="pull-right btn btn-success">Property List</button></Link>
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
                      <h3 class="card-title">Add Properties</h3>
                    </div>
                    <form onSubmit={this.mySubmit} encType="multipart/form-data">
                      <div class="card-body">
                        <div class="row">

                          <div class="form-group col-md-3">
                            <label>City</label>
                            <select class="form-control" name="city" onChange={this.changedata} value={this.state.city} required>
                              <option value="">Select City</option>
                              {
                                this.state.cityData && this.state.cityData.map(x => {
                                  return (
                                    <>
                                      <option value={x._id}>{x.city}</option>
                                    </>
                                  )
                                })
                              }

                            </select>
                          </div>
                          
                          <div class="form-group col-md-3">
                            <label>Category</label>
                            <select class="form-control" name="category" onChange={this.changedata} value={this.state.category} required>
                              <option value="">Select Category</option>
                              {
                                this.state.categoryData && this.state.categoryData.map(x => {
                                  return (
                                    <>
                                      <option value={x._id}>{x.category}</option>
                                    </>
                                  )
                                })
                              }

                            </select>
                            {/* <input type="file" name='image' id='image' defaultValue={this.state.image} class="form-control" accept="image/*" onChange={this.onFileChange} /> */}
                          </div>

                          <div class="form-group col-md-6">
                          <label>Property Name</label>
                          <input type="text" class="form-control" name="property_name" required value={this.state.property_name} onChange={this.changedata} />
                        </div>
                        
                        <div class="form-group col-md-12">
                          <label>Address</label>
                          <input type="text" class="form-control" name="address" value={this.state.address} onChange={this.changedata} required/>
                        </div>
                            

                        <div class="form-group col-md-4">
                            <label>Property Video</label>
                            <input type="file" class="form-control" name="video" onChange={this.onVideoChange}/>
                          </div>



                        <div class="form-group col-md-3">
                          <label>Manager Contact Number</label>
                          <input type="text" class="form-control number" name="manager_number" required value={this.state.manager_number} onChange={this.changedata} />
                        </div>

                        
                        </div>

                        <hr  style={{  backgroundColor: 'rgb(0 123 255 / 42%)', height: 1.5 }}/> 
                        {this.state.Emails.map((element, index) => ( 
                            <div class="row" key={index}>

                                <div class="form-group col-md-3">
                                    <label>Manager Email</label>
                                    <input type="email" class="form-control" name="manager_email" value={element.manager_email} onChange={e => this.EmailsChange(index, e)} />
                                </div>

                              {(index == 0) ?
                                  <div class="form-group col-md-1">
                                      <label>&nbsp;&nbsp;&nbsp;</label>
                                      <button type="button" class="btn btn-warning btn-sm " onClick={() => this.addEmailsFields()}> <i class='fa fa-plus'></i> </button>
                                  </div>
                              :

                                  <div class="form-group col-md-1">
                                      <label>&nbsp;&nbsp;&nbsp;</label>
                                      <button type="button" class="btn btn-warning btn-sm " onClick={() => this.removeEmailsFields(index)}> <i class='fa fa-minus'></i> </button>
                                  </div>
                              }
                            </div>
                        ))}


                     

                      <hr  style={{  backgroundColor: 'rgb(0 123 255 / 42%)', height: .5 }}/> 

                        {this.state.Highlights.map((element, index) => ( 
                            <div class="row" key={index}>
                              <div class="form-group col-md-12">
                                    <b>Year And Amount Details</b>
                              </div>
                              <br />

                            <div class="form-group col-md-3">
                              <label>Icon</label>
                              <input type="file" class="form-control" name="file" data-key={index} onChange={this.onFileChange1}/>
                            </div>

                            <div class="form-group col-md-5">
                              <label>Text</label>
                              <input type="text" class="form-control" name="highlight_text" value={element.highlight_text} onChange={e => this.HighlightsChange(index, e)}/>
                            </div>

                            <div class="form-group col-md-2">
                              <label>Value</label>
                              <input type="text" class="form-control" name="highlight_amount" value={element.highlight_amount} onChange={e => this.HighlightsChange(index, e)}/>
                            </div>

                            {(index == 0) ?
                                  <div class="form-group col-md-1">
                                    <label>&nbsp;&nbsp;&nbsp;</label>
                                    <button type="button" class="btn btn-warning btn-sm " onClick={() => this.addHighlightsFields()}> <i class='fa fa-plus'></i> </button>
                                  </div>
                              :

                                <div class="form-group col-md-1">
                                  <label>&nbsp;&nbsp;&nbsp;</label>
                                  <button type="button" class="btn btn-warning btn-sm " onClick={() => this.removeHighlightsFields(index)}> <i class='fa fa-minus'></i> </button>
                                </div>
                            }

                            </div>
                        ))}

                      <hr  style={{  backgroundColor: 'rgb(0 123 255 / 42%)', height: 1.5 }}/>


                        <div class="row">

                            <div class="form-group col-md-6">
                              <label>Property Image</label>
                              <input type="file" class="form-control" name="file" onChange={this.onFileChange} required/>
                            </div>
                            
                           
                           
                            {<ProgressBar animated now={45} />}

                            <div class="form-group col-md-6">
                              <label>Property Title</label>
                              <input type="text" class="form-control" name="property_title" placeholder="Enter Title" value={this.state.property_title} onChange={this.changedata} required/>
                            </div>


                            <div class="form-group col-md-12">
                              <label>Description</label>
                              <textarea class="form-control" name="property_desc" placeholder="Enter Description" value={this.state.property_desc} onChange={this.changedata} required/>
                            </div>
                        </div>

                        {this.state.Features.map((element, index) => (

                           <div class="row" key={index}>
                              <div class="form-group col-md-11">
                                  <label>Property Features {index+1}</label>
                                  <input type="text" class="form-control" name="feature" value={element.feature} onChange={e => this.FeaturesChange(index, e)} />
                              </div>

                                {(index == 0) ?
                                    <div class="form-group col-md-1">
                                      <label>&nbsp;&nbsp;&nbsp;</label>
                                      <button type="button" class="btn btn-warning btn-sm " onClick={() => this.addFeaturesFields()} > <i class='fa fa-plus'></i> </button>
                                    </div>
                                :

                                  <div class="form-group col-md-1">
                                    <label>&nbsp;&nbsp;&nbsp;</label>
                                    <button type="button" class="btn btn-warning btn-sm " onClick={() => this.removeFeaturesFields(index)}> <i class='fa fa-minus'></i> </button>
                                  </div>
                                }

                            </div>

                        ))}
                        
                        
                        
                        <hr  style={{  backgroundColor: 'rgb(0 123 255 / 42%)', height: 1.5 }}/>

                        {this.state.Youtube.map((element, index) => ( 

                          <div class="row" key={index}>

                              <div class="form-group col-md-5">
                                <label>Youtube Video Heading</label>
                                <input type="text" class="form-control" name="youtube_video_heading" value={element.youtube_video_heading} onChange={e => this.YoutubeChange(index, e)} />
                              </div>

                            <div class="form-group col-md-5">
                                <label>Youtube Video Link</label>
                                <input type="text" class="form-control" name="youtube_video_link" value={element.youtube_video_link} onChange={e => this.YoutubeChange(index, e)} />
                            </div>

                            {(index == 0) ?
                                  <div class="form-group col-md-1">
                                    <label>&nbsp;&nbsp;&nbsp;</label>
                                    <button type="button" class="btn btn-warning btn-sm " onClick={() => this.addYoutubeFields()}> <i class='fa fa-plus'></i> </button>
                                  </div>
                              :

                                <div class="form-group col-md-1">
                                  <label>&nbsp;&nbsp;&nbsp;</label>
                                  <button type="button" class="btn btn-warning btn-sm " onClick={() => this.removeYoutubeFields(index)}> <i class='fa fa-minus'></i> </button>
                                </div>
                              }

                          </div>

                        ))}

                        <hr  style={{  backgroundColor: 'rgb(0 123 255 / 42%)', height: 1.5 }}/>

                         
                          {this.state.VirtualTours.map((element, index) => {
                            return (
                            <div class="row" key={index}>
                              
                              <div class="form-group col-md-5">
                                <label>Virtual Tours Title</label>
                                <input type="text" class="form-control" name="virtual_tours_title" value={element.virtual_tours_title} onChange={e => this.VirtualToursChange(index, e)}  />
                              </div>

                              <div class="form-group col-md-5">
                                <label>Virtual Tours link</label>
                                <input type="text" class="form-control" name="virtual_tours_link" value={element.virtual_tours_link} onChange={e => this.VirtualToursChange(index, e)}  />
                              </div>

                              {(index == 0) ?
                                  <div class="form-group col-md-1">
                                    <label>&nbsp;&nbsp;&nbsp;</label>
                                    <button type="button" class="btn btn-warning btn-sm " onClick={() => this.addVirtualToursFields()}> <i class='fa fa-plus'></i> </button>
                                  </div>
                              :

                                <div class="form-group col-md-1">
                                  <label>&nbsp;&nbsp;&nbsp;</label>
                                  <button type="button" class="btn btn-warning btn-sm " onClick={() => this.removeVirtualToursFields(index)}> <i class='fa fa-minus'></i> </button>
                                </div>
                              }

                            </div>
                        )
                      })}

                        <hr  style={{  backgroundColor: 'rgb(0 123 255 / 42%)', height: 1.5 }}/>
                        
                        <div class="row">
                                  
                          <div class="form-group col-md-7">
                              <label>Google Page Link</label>
                              <input type="text" class="form-control" name="google_page_link" placeholder="Enter Google Page Link" value={this.state.google_page_link} onChange={this.changedata} />
                          </div>

                          <div class="form-group col-md-2">
                            <label>Google Rating</label>
                            <input type="number" min='0' max='5' class="form-control number" name="google_rating" placeholder="eg 5" value={this.state.google_rating} onChange={this.changedata} />
                          </div>

                          <div class="form-group col-md-3">
                            <label>Text For Google Rating</label>
                            <input type="text" class="form-control" name="google_text" placeholder="eg Based on 10+ reviews" value={this.state.google_text} onChange={this.changedata} />
                          </div>


                          <div class="form-group col-md-7">
                              <label>Facebook Page Link</label>
                              <input type="text" class="form-control" name="facebook_page_link" placeholder="Enter Facebook Page Link" value={this.state.facebook_page_link} onChange={this.changedata} />
                          </div>

                          <div class="form-group col-md-2">
                            <label>Facebook Rating</label>
                            <input type="number" min='0' max='5' class="form-control number" name="facebook_rating" placeholder="eg 5" value={this.state.facebook_rating} onChange={this.changedata} />
                          </div>

                          <div class="form-group col-md-3">
                            <label>Text For Facebook Rating</label>
                            <input type="text" class="form-control" name="facebook_text" placeholder="eg Based on 10+ reviews" value={this.state.facebook_text} onChange={this.changedata} />
                          </div>  
 

                        </div>


                        {/* Last Section  Start*/}


                        <hr  style={{  backgroundColor: 'rgb(0 123 255 / 42%)', height: 1.5 }}/>
                            {this.state.Blocks.map((element, index) => ( 

                                <div class="row" key={index}>
                                  
                                  <div class="form-group col-md-3">
                                      <label>Block Image</label>
                                      <input type="file" class="form-control" name="file" data-key={index} onChange={this.onFileChange2} />
                                  </div>

                                  <div class="form-group col-md-2">
                                      <label>Price</label>
                                      <input type="number" min='1' class="form-control" name="block_price" value={element.block_price} onChange={e => this.BlocksChange(index, e)} />
                                  </div>

                                  <div class="form-group col-md-2">
                                      <label>Security Deposit</label>
                                      <input type="number" min='1' class="form-control" name="security_deposit" value={element.security_deposit} onChange={e => this.BlocksChange(index, e)} />
                                  </div>

                                  <div class="form-group col-md-2">
                                      <label>Total Bedrooms</label>
                                      <input type="number" min='1' class="form-control" name="bedroom" value={element.bedroom} onChange={e => this.BlocksChange(index, e)} />
                                  </div>

                                  <div class="form-group col-md-2">
                                      <label>Total Bathrooms</label>
                                      <input type="number"  min='1' class="form-control" name="bathroom" value={element.bathroom} onChange={e => this.BlocksChange(index, e)} />
                                  </div>

                                  {(index == 0) ?
                                      <div class="form-group col-md-1">
                                        <label>&nbsp;&nbsp;&nbsp;</label>
                                        <button type="button" class="btn btn-warning btn-sm " onClick={() => this.addBlocksFields()}> <i class='fa fa-plus'></i> </button>
                                      </div>
                                  :

                                    <div class="form-group col-md-1">
                                      <label>&nbsp;&nbsp;&nbsp;</label>
                                      <button type="button" class="btn btn-warning btn-sm " onClick={() => this.removeBlocksFields(index)}> <i class='fa fa-minus'></i> </button>
                                    </div>
                                  }

                                </div>
                            ))}

                          {/* Last Section End*/}

                          

                            <div class="form-group col-md-2">
                              <label>&nbsp;&nbsp;&nbsp;</label>
                              <button type="submit" class="btn btn-primary"> Submit</button>
                            </div>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

 
      </>
    );
  }
}
export default withRouter(Properties);