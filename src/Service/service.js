import './service.css'

const service = props => (
    <div class="type">
      <h1>Service: {props.service}</h1>
      <p>Name: {props.Name} </p>
      <p>Vendor: {props.Vendor} </p>
      <p>Area: {props.Area}</p>
  </div>
);

export default service;