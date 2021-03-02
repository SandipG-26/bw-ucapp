import { useState, useEffect } from 'react';
import './App.css';
import Services from '../Components/Services/services';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";

const App = (props) => {
  const [serviceState, setServiceState] = useState(
    {
      Services: [],
      count: 0,
      showServices: true,
      showServicesLabel: "Hide Services"
    }
  );

  const [reloadState, setReloadState] = useState(false);
  const [show, setShow] = useState(false);
  const [editedServiceState, setEditedServiceState] = useState(0);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    axios.get('http://localhost:49698/api/Service/getallservices')
      .then(response => {
        console.log(response);
        let serviceLists = { ...serviceState };
        serviceLists.Services = response.data;
        serviceLists.count = response.data.length;
        setServiceState(serviceLists);
      });
  }, []);

  const addServiceHandler = () => {
    const newService = {
      id: 7,
      ServicePolicy: "percentage",
      ServiceSubType: "AC",
      ServiceType: "Reparing",
      VendorId: 0,
      Warranty: "30"
    }

    axios.post('http://localhost:49698/api/Service/add', newService)
      .then(response => {
        // console.log(response.data);
        setServiceState({
          services: serviceLists,
          Count: serviceState.Count + 1,
          showServices: serviceState.showServices,
          showServicesLabel: serviceState.showServicesLabel
        });
      });
  }

  const deleteServiceHandler = (id) => {
    axios.delete('http://localhost:49698/api/Service/delete/' + id)
      .then(response => {
        setReloadState(!reloadState);
      });
  }

  const editServiceHandler = (Services) => {
    setReloadState(!reloadState);
    setShow(true);
    setTimeout(() => {
      // setEditedServiceState(services.id)
      setValue("ServiceType", Services.ServiceType);
      setValue("ServiceSubType", Services.ServiceSubType);
      setValue("ServicePolicy", Services.ServicePolicy);
      setValue("Warranty", Services.Warranty);

    }, 1000);
  }

  let toggleService = !serviceState.showServices;
  const toggleServicesHandler = () => {
    
    let label = "";

    if (toggleService) {
      label = "Hide Services";
    }
    else {
      label = "Show Services";
    }
    setServiceState({
      services: serviceState.Services,
      Count: serviceState.Count,
      showServices: serviceState.toggleService,
      showServicesLabel: label

    })
  }

  let serviceLists = null;
  if (serviceState.showServices) {
    serviceLists = (<div className="row">
      {
        <Services 
          Services={serviceState.Services}
          onDelete={() => deleteServiceHandler}
          onEdit={() => editServiceHandler}
        />
      }
    </div>
    );
  }


  const handleClose = () => setShow(false);
  const handleShow = (addServiceHandler) => setShow(true);

  const onSubmit = data => {
    if (editedServiceState === 0) {
      axios.post('http://localhost:49698/api/Service/addservice', data)
        .then(response => {
          setReloadState(!reloadState);
          setShow(false);
        });
    }
    else {
      data.id = editedServiceState;
      axios.put('http://localhost:49698/api/Service/add', data)
        .then(response => {
          setReloadState(!reloadState);
          setEditedServiceState(0);
          setShow(false);
        });
    }
  }

  return (
    <div>
      <div className="App container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <h1 style={{ color: 'red' }}>Lists Of Vehicles l Total Vehicles:{serviceState.count}</h1>
          </div>
          <div className="buttonDiv col-lg-6">
            <button className="btn btn-primary btn-sm buttonUpdate" onClick={handleShow}>Add Service</button>
            <button className="btn btn-secondary btn-sm " onClick={toggleServicesHandler}>{serviceState.showServicesLabel}</button>
          </div>
        </div>
        {serviceLists}

        <Modal show={show} onHide={handleClose} animation={false}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Service</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <label htmlFor="ServiceType">ServiceType: </label>
                <input className="form-control" name="ServiceType" type="text" placeholder="ServiceType" ref={register({
                  required: true
                })} />
                {/* <select className="form-control" name="Servicetype" type="text" placeholder="Service Type" ref={register({
                  required: true })}
                  {servicetypestate.map(item==>(
                    <option key={item.id} value={item.id}> {item.name} </option>))}  */}
              </div>
              <div className="form-group">
                <label htmlFor="ServiceSubType">ServiceSubType: </label>
                <input className="form-control" name="ServiceSubType" type="text" placeholder="ServiceSubType" ref={register({
                  required: true
                })} />
              </div>
              <div className="form-group">
                <label htmlFor="ServicePolicy">ServicePolicy: </label>
                <input className="form-control" name="ServicePolicy" type="text" placeholder="ServicePolicy" ref={register({
                  required: true
                })} />
              </div>
              <div className="form-group">
                <label htmlFor="Warranty">warranty: </label>
                <input className="form-control" name="Warranty" type="text" placeholder="Warranty" ref={register({
                  required: true
                })} />
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

    </div>
  );

}

export default App;