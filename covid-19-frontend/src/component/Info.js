import React from "react";
import { useEffect, useState } from "react";

export const Info = () => {
  const [globalData, setGlobaldata] = useState({});
  const [update , setupdate] = useState({});

  useEffect(() => {
    async function getCovidData() {
      try {
        const response = await fetch("https://covid19.mathdro.id/api");
        const data = await response.json();
       
        const covidData = {
          confirmed: data.confirmed,
          recovered: data.recovered,
          deaths: data.deaths,
        };
        const updateDate ={
          lastUpdate:data.lastUpdate,
          
        }
       
        setGlobaldata(covidData);
        setupdate(updateDate);
        
      } catch (err) {
        console.log("error fetching data");
      }
    }
    getCovidData();
  }, []);

 
  return (
    <div className="info-container">
      {Object.keys(globalData).map((val,ind)=>{
          return(
          <div key={ind}>
            <h2> {val}</h2>
            <h3>{globalData[val].value}</h3>
            
          </div>
          )
      })}
      
      <div>
        <h2>Last update</h2>
    <h3>{update.lastUpdate}</h3>
      </div>

      

    </div>
  );
};
