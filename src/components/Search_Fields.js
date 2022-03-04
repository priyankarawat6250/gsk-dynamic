import React from "react"; 
import { Link, withRouter } from "react-router-dom";
import config from "../config.js"; 

const axios = require("axios");
class Search_Fields extends React.Component{
    state={
        cities:[],
        categories:[],
        cityId:'',
        categoryId:'',
        bedroom:'',
        bathroom:'',
        price_min:'',
        price_max:''
    }

    componentDidMount(){
        this.getCities();
        this.getCategory();
    }

    getCities = () => {
  
        axios.get(`${config.backend_URL}/admin/getCities`)         
          .then((responseJson) => {
               
              this.setState({cities: responseJson.data.data})
                             
          })
          .catch((error) => {
              console.error(error);
          });        
    }

    getCategory = () => {
        axios.get(`${config.backend_URL}/admin/getCategories`)
            .then((responseJson) => {

                 
                this.setState({ categories: responseJson.data.data })
                 

            })
        .catch((error) => {
            console.error(error);
        });
    }

    mySubmit = e => {
      let {categories,cities, ...newObj} = this.state

        this.props.history.push("/SearchResult", newObj)

    }

    changedata=(e)=>{

      if(e.target.name ==='price'){
        var min = e.target[e.target.selectedIndex].getAttribute("data-min")
        var max = e.target[e.target.selectedIndex].getAttribute("data-max")

          this.setState({price_min: Number(min),  price_max:Number(max) }) 
      }else{
          this.setState({[e.target.name]:e.target.value})   
      }
      
    } 

    render(){
        return (
        <>
         
         <article className="homeCallActBlock searchAdvanceBlk wrapper py-40">
        <div className="container">		

        <form className="advncSearchForm" onSubmit={this.mySubmit} >
            <div className="row d-flex align-items-center ">


            <div className="col-md-3">
                <div className="form-group">
                  <label>City</label>
                    <select className="form-select" aria-label="Default select example" name="cityId" onChange={this.changedata} value={this.state.cityId} required>
                        <option value="" selected="">Select City</option>
                        {this.state.cities.length > 0  ? this.state.cities.map((x,key) => {
                        return(
                            <option value={`${x._id}`}> {x.city} </option>
                        )
                        }):	'' }												
                  </select>
                </div>
            </div>

              
              <div className="col-md-3">
                <div className="form-group">
                  <label>Category</label>

                    <select className="form-select" aria-label="Default select example" name="categoryId"  onChange={this.changedata} value={this.state.categoryId} required>
                        <option value="" selected="">Select Category</option>
                        {this.state.categories.length > 0  ? this.state.categories.map((x,key) => {
                        return(
                            <option value={`${x._id}`}> {x.category} </option>
                        )
                        }):	'' }												
                    </select>

                </div>
              </div>

              <div className="col-md-1">
                <div className="form-group">
                  <label>Bedroom</label>
                  <select className="form-select" aria-label="Default select example" name="bedroom"  onChange={this.changedata} value={this.state.bedroom} required>
                    <option value="" selected="">Select</option>
                    <option value="1" selected="">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>															
                  </select>
                </div>
              </div>

              <div className="col-md-1">
                <div className="form-group">
                  <label>Bathroom</label>
                  <select className="form-select" aria-label="Default select example" name="bathroom" onChange={this.changedata} value={this.state.bathroom} required>
                    <option value="" selected="">Select</option>
                    <option value="1" selected="">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>															
                  </select>
                </div>
              </div>


              <div className="col-md-2">
                <div className="form-group">
                  <label>Price Range</label>
                  <select className="form-select" aria-label="Default select example" name="price"  onChange={this.changedata} value={this.state.price} required>
                  <option value="" selected="">Select</option>
                    <option value="1000-5000" selected="" data-min={1000} data-max={5000}>1000 - 5000</option>
                    <option value="5000-10000" data-min={5000} data-max={10000}>5000 - 10000</option>
                    <option value="10000-20000" data-min={10000} data-max={20000}>10000 - 20000</option>
                    <option value="20000-30000" data-min={20000} data-max={30000}>20000 - 30000</option>															
                  </select>
                </div>
              </div>


              <div className="col-md-2">
                  <button className="btnCommon mt-4">Search</button>
              </div>

            </div>		
          </form>		
        </div>
      </article>
     
    </>
  )
} 
};
export default withRouter(Search_Fields); 