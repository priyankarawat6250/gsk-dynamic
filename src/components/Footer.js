import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component{
 

render(){
  return (
    <footer className="ftrBlock wrapper py-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="ftrInfo">
              <div className="ftrScl">

                <a href={`https://${this.props.fblink}`}  target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>

              </div>
            </div>
            <div className="ftrCopy">
              <p>© <span>GSK</span> Properties {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
}

export default Footer;