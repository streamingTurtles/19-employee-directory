import React from "react";

const EmpBoxSearch = function (props){

    return(
        <form>
        <div className="form-group search-widget">
          <div className="input-group mb-3">
                <input
                    onChange={props.searchBarInputMgmt}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder='Employee Directory Search'
                    id="search"
                />
          </div>
        </div>
      </form>
      );
}


export default EmpBoxSearch;
