import {useState, useEffect} from 'react';
import './App.css';
import Services from '../Components/Services/services';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import service from '../Components/Services/Service/service';
import services from '../Components/Services/services';



const  App = (props) => {
  const [serviceState, setServiceState] = useState(
   {
      services: [],  
      count: 0,
      showServices: true, 
      showServicesLabel: "Hide Services"
    }
  );
   
  const [reloadState, setReloadState] = useState(false);
  const [show, setShow] = useState(false);
  const [editedservicestate, seteditedservicestate] = useState(0);
  const { register, handleSubmit, setValue} = useForm();

  useEffect(() => {
      axios.get('http://localhost:49698/api/Service/getallservices')
      .then(response =>{
        console.log(response);
      let serviceLists = { ...serviceState};
      serviceLists.services = response.data; 
      serviceLists.count = response.data.length;
          setServiceState(serviceLists);
      });
    },[reloadState]); 

 
  // const addServiceHandler = () => { 
  //   const newService = {
  //     id: 7,
  //     servicePolicy: "percentage",
  //     serviceSubType: "AC",
  //     serviceType: "Reparing",
  //     vendorId: 0,
  //     warranty: "30"
  //   }
    
  //   axios.post('http://localhost:49698/api/Service/add', newService)
  //   .then(response=>{
  //     console.log(response);
  //     setServiceState({
  //       services: serviceLists, 
  //       Count : serviceState.Count +1,
  //       showServices: serviceState.showServices,
  //       showServicesLabel: serviceState.showServicesLabel     
  //     });
  // });
 

    
  // }

  const deleteServiceHandler = (serviceId) => {
    axios.delete('http://localhost:49698/api/service/delete/' + serviceId)
      .then(response =>{
        setReloadState(!reloadState);
      });
  }

  const editServiceHandler = (Services) => {
    axios.get('http://localhost:49698/api/service/update/' + Services)
      .then(response =>{
        setReloadState(!reloadState);
        setShow(true);
        setTimeout(() => {
          seteditedservicestate(services.id)
          setValue("ServiceType", Services.ServiceType );
          setValue("ServiceSubType", Services.ServiceSubType);
          setValue("ServicePolicy", Services.ServicePolicy);
          setValue("warranty",Services.warranty );

        }, 1000);
      });
  }

  // const editServiceHandler = (serviceIndex) => {
  //   const serviceLists = [ ...serviceState.services];
  //   serviceLists.splice(serviceIndex, 1); 
  //   setServiceState({
  //     services: serviceLists,   
  //     Count : serviceState.Count -1,
  //     showServices: serviceState.showServices,
  //     showServicesLabel: serviceState.showServicesLabel     
  //   });
  // }

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

  let serviceLists= null;
  if(serviceState.showServices){
    serviceLists=(<div className="row">
    {
      <Services 
        services = {serviceState.services}
        onDelete = {() => deleteServiceHandler}
        onEdit = {() => editServiceHandler}
      />
    }
    </div>
    );
  }

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = data => {
    if(editedservicestate == 0){
      axios.post('http://localhost:49698/api/Service/add', data)
      .then(response=>{
      setReloadState(!reloadState);
        setShow(false);
      });
    }
    else{
      data.id= editedservicestate;
      axios.put('http://localhost:49698/api/Service/add', data)
      .then(response=>{
      setReloadState(!reloadState);
      seteditedservicestate(0);
        setShow(false);
      });
    }
  }

  return (
    <div className="App container-fluid">
      <div className="row">
          <div className = "col-lg-6">
              <h1 style={{color:'red'}}>Lists Of Vehicles l Total Vehicles:{serviceState.count}</h1>
          </div>
          <div className="buttonDiv col-lg-6">
              <button className="btn btn-primary btn-md buttonUpdate" onClick={handleShow}>Add Service</button>
              <button className="btn btn-secondary btn-md" onClick={toggleServicesHandler}>{serviceState.showServicesLabel}</button>
          </div>
        </div> 
       {serviceLists}

       <Modal show={show} onHide={handleClose} animation={false}>
       <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="ServiceType">ServiceType: </label>
            <input className="form-control" name="ServiceType" type="text" placeholder="ServiceType" ref={register({ required: true })} />
          </div>
          <div>
            <label htmlFor="ServiceSubType">ServiceSubType: </label>
            <input className="form-control" name="ServiceSubType" type="text" placeholder="ServiceSubType" ref={register({ required: true })} />
          </div>
          <div>
            <label htmlFor="ServicePolicy">ServicePolicy: </label>
            <input className="form-control" name="ServicePolicy" type="text" placeholder="ServicePolicy" ref={register({ required: true })} />
          </div>
          <div>
            <label htmlFor="warranty">warranty: </label>
            <input className="form-control" name="warranty" type="text" placeholder="warranty" ref={register({ required: true })} />
          </div>
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="btn btn-primary" type="submit">
            Save 
          </button>
        </Modal.Footer>
        </form>
      </Modal>
    </div>
   );
   
  }


export default App;