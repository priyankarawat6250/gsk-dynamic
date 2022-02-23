import React from "react";
import { Link, withRouter } from "react-router-dom";
 

class Footer extends React.Component{
    
        render(){
            return (
                <>                   
                <footer class="main-footer">
                <strong>Copyright &copy; 2022 </strong>
                All rights reserved.
                </footer>

                </>
            );
        }
}
export default withRouter(Footer);
