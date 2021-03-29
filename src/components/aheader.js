import React from 'react';
import "../App.css"

function Aheader() {
    return (
    <div>
      <div className="jumbotron jumbotron-fluid" id="jumboTron">
        <div className="container">
          <h1 className="display-6"><i className="fas fa-user-friends"></i> <b>Employee Directory</b></h1>
          <p className="lead">Search employees using First or Last Name</p>
        </div>
      </div>
    </div>
    );
  }

export default Aheader;