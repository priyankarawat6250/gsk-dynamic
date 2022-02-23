import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="ftrBlock wrapper py-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="ftrInfo">
              <div className="ftrScl">
                <Link to="https://www.facebook.com/gskproperties" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
            <div className="ftrCopy">
              <p>© <span>GSK</span> Properties 2022</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;