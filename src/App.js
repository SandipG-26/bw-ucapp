import {useState} from 'react';
import React from 'react';
import './App.css';
import Service from './Service/service'

const App = props => {
 const [serviceState, setServiceState] = useState(
   {
      services :[
        {service:"Door-Step" , Name:"Painting", Vendor:"Sandip", Area:"Pune"},
        {service:"Door-Step" , Name:"Repairing", Vendor:"Rohan", Area:"Mumbai"},
        {service:"Door-Step" , Name:"Insalling", Vendor:"Kiran", Area:"Delhi"},
        {service:"Door-Step" , Name:"Cleaning", Vendor:"Akshay", Area:"Agra"}
      ]
    }
 );

  const updateHandler = () => {
    setServiceState({
      services :[
            {service:"Door-Step" , Name:"Painting", Vendor:"a", Area:"Pune"},
            {service:"Door-Step" , Name:"Repairing", Vendor:"b", Area:"Mumbai"},
            {service:"Door-Step" , Name:"Insalling", Vendor:"c", Area:"Delhi"},
            {service:"Door-Step" , Name:"Cleaning", Vendor:"d", Area:"Agra"}
          ]
    });
  }

  
  return (
      <div className="App container-fluid">
        <div className="row">
            <h1>Lists Of Vehicles</h1>
            <div className="buttonDiv">
              <button className="btn btn-primary btn-md buttonUpdate" onClick={updateHandler}>Update List</button>
            </div>
        </div>
        <div className="row">
          <Service service={serviceState.services[0].service} Name={serviceState.services[0].Name} Vendor={serviceState.services[0].Vendor} Area={serviceState.services[0].Area} /> 
          <Service service={serviceState.services[1].service} Name={serviceState.services[1].Name} Vendor={serviceState.services[1].Vendor} Area={serviceState.services[1].Area} />
          <Service service={serviceState.services[2].service} Name={serviceState.services[2].Name} Vendor={serviceState.services[2].Vendor} Area={serviceState.services[2].Area} />
          <Service service={serviceState.services[3].service} Name={serviceState.services[3].Name} Vendor={serviceState.services[3].Vendor} Area={serviceState.services[3].Area} />
        </div>
      </div>
    )  
};

export default App;