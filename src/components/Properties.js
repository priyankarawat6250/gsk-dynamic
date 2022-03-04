import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import config from "../config.js";

const axios = require("axios");

class Properties extends React.Component{

    state={
        Properties:[], 
        cities:[],
        cityId:'all',
        update:0
    }

    componentDidMount=  ()=>{

        const queryParams = new URLSearchParams(window.location.search);
        const slug = queryParams.get('slug');        

        if(slug!=null){
            this.getSingleCity(slug);           
        }else{
            this.getProperties();  
        }

        this.getCities(); 
    }

    componentDidUpdate(prevProps) {
        console.log("prev",prevProps)
        console.log("param",this.props.match.params)

        if (this.props.match.params.id !== prevProps.match.params.id) {
            console.log("inside")
          this.setState({update:""})
        }
      }

    getSingleCity =   (slug) => {
        let newObj = {slug:slug};
         
        axios.post(`${config.backend_URL}/admin/getSingleCity`,newObj)         
        .then((responseJson) => {

            this.setState({ cityId: responseJson.data.data._id})

            this.getProperties(responseJson.data.data._id);  
           
        })
        .catch((error) => {
          console.error(error);
        });
    }


    getProperties =   (key) => {
        
        let newObj = {};
        if(key!='all'){
            newObj = { cityId: key} 
        }

        axios.post(`${config.backend_URL}/admin/getProperties`,newObj)         
        .then((responseJson) => {
        
            
          this.setState({Properties: responseJson.data.data, cityId: key, update:0})
           
           
        })
        .catch((error) => {
          console.error(error);
        });        
    }

    getCities = () => {
  
        axios.get(`${config.backend_URL}/admin/getCities`)         
          .then((responseJson) => {              
               
            this.setState({cities: responseJson.data.data});

               console.log(responseJson.data.data);

          })
        .catch((error) => {
            console.error(error);
        });        
    }

 

    render(){
        return (
        <>
         

    <section>
      <article className="pageHdrBlock wrapper py-80" style={{backgroundImage: `url("images/subpageBg.jpg")`}}>
        <div className="pageHdrOverlay"></div>
        <div className="container">
            <div className="row align-items-center justify-space-beetween">
                <div className="col-sm">
                    <h3>Properties</h3>
                </div>
                <div className="col-sm-auto">
                    <div className="pagebrdcrmbs">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Properties</li>
                        </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </article>

      <article className="propertyCatBlock wrapper pt-80">
        <div className="container">
            <div className="propertyTabsRow">
                <div className="propertyTabsOuter"> 

                    <Tabs id="uncontrolled-tab-example" activeKey={this.state.cityId} className="propertyTabs" onSelect={this.getProperties}>
 
                        <Tab eventKey="all" title="All" >
                            <div className="propertyCatItems">
                                <div className="row filterMain g-5">
                                
                                {this.state.Properties.length > 0  ? this.state.Properties.map((x,key) => {
                                    let imagePath = `${config.backend_URL}/${x.property_image}`;
                                    imagePath = (x.property_image=='')?`${config.backend_URL}/default.jpg`:imagePath
                                    return(

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div className="prprtyItem">

                                                <Link to={`/${x.slug}`}>
                                                <a href="#!">
                                                    <div className="prprtyBadge">For Rent</div>
                                                    <div className="prprtyImg" style={{backgroundImage: `url(${imagePath})`}}>
                                                        <div className="prprtyOverlay"></div>
                                                    </div>
                                                    <div className="prprtyInfo">
                                                        <h4>{x.property_name}</h4>
                                                        <p><i><img src="images/locIcon.png" /></i>{x.address}</p>
                                                    </div>
                                                </a>
                                                </Link>

                                            </div>
                                        </div>
                                    )
                                }):<> <center><h3>Coming Soon...</h3></center> </>
                                }
    
                                </div>
                            </div>
                        </Tab>

                    {this.state.cities.length > 0  ? this.state.cities.map((x,key) => {
                        return(
                            x.propertyCount > 0 ?
                            <Tab eventKey={x._id} title={x.city} >
                                <div className="propertyCatItems">
                                    <div className="row filterMain g-5">
                                        
                                    {this.state.Properties.length > 0  ? this.state.Properties.map((x,key) => {
                                        let imagePath = `${config.backend_URL}/${x.property_image}`;
                                        imagePath = (x.property_image=='')?`${config.backend_URL}/default.jpg`:imagePath
                                        return(

                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                <div className="prprtyItem">

                                                <Link to={`/${x.slug}`}>
                                                    <a href="#!">
                                                        <div className="prprtyBadge">For Rent</div>
                                                        <div className="prprtyImg" style={{backgroundImage: `url(${imagePath})`}}>
                                                            <div className="prprtyOverlay"></div>
                                                        </div>
                                                        <div className="prprtyInfo">
                                                            <h4>{x.property_name}</h4>
                                                            <p><i><img src="images/locIcon.png" /></i>{x.address}</p>
                                                        </div>
                                                    </a>
                                                    </Link>

                                                </div>
                                            </div>
                                        )
                                    }): <> <center><h3>Coming Soon...</h3></center> </>
                                    }

                                    </div>
                                </div>
                            </Tab> :''
                        )
                        }):<></>
                    }

                    </Tabs>
                </div>				    
            </div>
        </div>
      </article>
    </section>
     
    </>
  )
} 
};

export default Properties;