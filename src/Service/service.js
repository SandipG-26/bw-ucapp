import './service.css'

const service = props => (
    <div class="type">
      <h1>Service: {props.service}</h1>
      <p onClick="  constructor(props.updateClick">Name: {props.Name} </p>
      <p>Vendor: {props.Vendor} </p>
      <p>Area: {props.Area}</p>
      <button className="btn btn-danger btn-sm" onClick={props.onDelete}> Delete</button>
    </div>
);

export default service;