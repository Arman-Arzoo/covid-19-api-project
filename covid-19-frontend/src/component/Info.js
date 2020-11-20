import React from "react";
import { useEffect, useState } from "react";

export const Info = () => {
  const [globalData, setGlobaldata] = useState({});

  useEffect(() => {
    async function getCovidData() {
      try {
        const response = await fetch("https://covid19.mathdro.id/api");
        const data = await response.json();
        const covidData = {
          confirmed: data.confirmed,
          recovered: data.recovered,
          deaths: data.deaths,
          lastUpdate: data.lastUpdate,
        };
        console.log(covidData);
        setGlobaldata(covidData);
      } catch (err) {
        console.log("error fetching data");
      }
    }
    getCovidData();
  }, []);

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
