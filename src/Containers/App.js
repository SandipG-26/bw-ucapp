import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import './App.css';


const App = (props) =>  {
 const [serviceState, setServiceState]= useState (  
   {
      services: [ 
        {Id: "1",service:"Door-Step" , Name:"Painting", Vendor:"Sandip", Area:"Pune"},
        {Id: "2",service:"Door-Step" , Name:"Repairing", Vendor:"Rohan", Area:"Mumbai"},
        {Id: "3",service:"Door-Step" , Name:"Insalling", Vendor:"Kiran", Area:"Delhi"},
        {Id: "4",service:"Door-Step" , Name:"Cleaning", Vendor:"Akshay", Area:"Agra"},       
      ],
      Count: 4,
      showServices: true, 
      showServicesLabel: "Hide Services"
    }
  );


  useEffect(()=>{
    console.log("Component: App | Methods: Useeffect");
  })
  
  

 const addServiceHandler = () => {
    const serviceLists = [ ...serviceState.services];
    const newService = {Id: "5",service: "Door-Step", Name:"Degree", Vendor:"dinesh", Area:"BAngalore"}
    serviceLists.push(newService);

    setServiceState({
            services: serviceLists, 
            Count : serviceState.Count +1,
            showServices: serviceState.showServices,
            showServicesLabel: serviceState.showServicesLabel     
      });
  }

  const deleteServiceHandler = (serviceIndex) => {
    const serviceLists = [ ...serviceState.services];
    serviceLists.splice(serviceIndex, 1); 
    setServiceState({
      services: serviceLists,   
      Count : serviceState.Count -1,
      showServices: serviceState.showServices,
      showServicesLabel: serviceState.showServicesLabel     
    });
  }

  const toggleServicesHandler= () => {
    let toggleService = !serviceState.showServices;
    let label = "";
    
    if(toggleService){ 
      label= "Hide Services";
    }
    else{
      label="Show Services";
    }
    setServiceState({
      services: serviceState.services,
      Count: serviceState.Count,
      showServices: toggleService,
      showServicesLabel: label

    })
  }

  render(){
    let serviceLists= null;
    if(serviceState.showServices)
    {
    serviceLists=(<div className="row">
    {
      serviceState.services.map((serviceItem, index) => 
      {
      return <service 
      service={serviceItem.service}
      Name={serviceItem.Name} 
      Vendor={serviceItem.Vendor}  
      Area={serviceItem.Area}
      onDelete={deleteServiceHandler.bind(this, index)} 
      /> 
      })
    }
    </div>
    );

   return (
    
      <div className="App container-fluid">
        
        <div className="row">
            <div className = "col-lg-6">
              <h1>Lists Of Vehicles l Total Vehicles:{serviceState.Count}</h1>
            </div>
            <div className="buttonDiv col-lg-6">
              <button className="btn btn-primary btn-md buttonUpdate" onClick={addServiceHandler}>Add Service</button>
              <button className="btn btn-secondary btn-md" onClick={toggleServicesHandler}>{serviceState.showServicesLabel}</button>
            </div>
        </div> 
       {serviceLists}
      </div>
   )  
  };
 }
};


export default App;