import React from "react";
import { useEffect, useState } from "react";
import Countup from 'react-countup';
import {Bar} from 'react-chartjs-2';


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

  
    const graphdata ={
      labels:[
        "Confirmed",
        "Recovered",
        "Death"
      ],
      datasets:[
        {
          label: "Covid 19",
          backgroundcolor:"blue",
          bordercolor:"yellow",
          hoverBackgroundColor:"lightblue",
          hoverBorderColor:"lightyellow",
          data:[56991301,36593016,1362191]
        }
      ]
    }




  
  return (
    <div>
    <div className="info-container">
      {Object.keys(globalData).map((val,ind)=>{
          return(
          <div key={ind}>
            <h2> {val}</h2>
            <h3>
              <Countup
              start = {0}
              end = {globalData[val].value}
              duration = {2.5}
              separator = ','/>
              
            </h3>
            
          </div>
          )
      })}
      
      <div>
        <h2>Last update</h2>
    <h3>{update.lastUpdate}</h3>
      </div>

      

    </div>
      <Bar
      datas={graphdata}
      width={100}
      height={250}
      options={{
        maintainAspectRatio:false
      }}
      />

    </div>
  );
};
