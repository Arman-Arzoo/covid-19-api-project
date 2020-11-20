import React from "react";


export const Info = () => {


  return (
    <div className="info-container">
      {/* {Object.keys(globalData).map((val,ind)=>{
          return(
          <div key={ind}>
            <h2> {val}</h2>
            <h3>{globalData[val].value}</h3>
          </div>
          )
      })} */}

      <div>
        <h2>Confirmed Case</h2>
      </div>
      <div>
      <h2>Recoverd Case</h2>
      </div>
      <div>
      <h2>Deaths Case</h2>
      </div>
      <div>
      <h2>last update</h2>
      </div>
    </div>
  );
};
