import React from "react";
import "../App.css"

function Footer() {
  const year = new Date().getFullYear()
   return (
    <div className="footer" >
      <div className="footer-copyright text-center py-3">    
        <div className="container">
           <h6 className="display-6">{year}: Employee Directory</h6>
           <a href="https://github.com/streamingTurtles/19-employee-directory">gitHub Repo</a>        
        </div>
      </div>
   </div>
   )
  }

export default Footer;