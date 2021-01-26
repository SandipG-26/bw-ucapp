import './service.css'

const service = (props) => {
 return(<div className="service type col-sm-3 " style={{margin: "10px"}}>
     <h2>serviceType: {props.serviceType} </h2>
      <p>servicePolicy: {props.servicePolicy}</p>
      <p>serviceSubType: {props.serviceSubType}</p>
      <p>warranty: {props.warranty}</p>
      <button className="btn btn-danger btn-sm" onClick={props.onDelete}> Delete</button>&nbsp;
      <button className="btn btn-warning btn-sm" onClick={props.onEdit}> Edit</button>
    </div>)
};

export default service;