import './service.css'

const service = (props) => {
 return(<div className="service type col-lg-3">
      <h1>Service: {props.service}</h1>
      <p>Vendor: {props.Vendor} </p>
      <p>Area: {props.Area}</p>
      <button className="btn btn-danger btn-sm" onClick={props.onDelete}> Delete</button>
    </div>)
};

export default service;