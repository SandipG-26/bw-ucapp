import './service.css'

const Service = (props) => {
  return (<div className="service type col-sm-3">
    <h3>serviceType: {props.ServiceType} </h3>
    <p>servicePolicy: {props.ServicePolicy}</p>
    <p>serviceSubType: {props.ServiceSubType}</p>
    <p>warranty: {props.Warranty}</p>
    <button className="btn btn-danger btn-sm buttonUpdate" onClick={props.onDelete}> Delete</button>&nbsp;
    <button className="btn btn-warning btn-sm buttonUpdate" onClick={props.onEdit}> Edit</button>
  </div>)
};

export default Service;