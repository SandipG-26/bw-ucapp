import React from 'react';
import './App.css';
import Service from './Service/service'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      services :[
        {service:"Door-Step" , Name:"Painting", Vendor:"Sandip", Area:"Pune"},
        {service:"Door-Step" , Name:"Repairing", Vendor:"Rohan", Area:"Mumbai"},
        {service:"Door-Step" , Name:"Insalling", Vendor:"Kiran", Area:"Delhi"},
        {service:"Door-Step" , Name:"Cleaning", Vendor:"Akshay", Area:"Agra"}
      ]
    }
  }

  updateHandler = () => {
    this.state = {
      services :[
        {service:"Door-Step" , Name:"Painting", Vendor:"Sandip", Area:"Pune"},
        {service:"Door-Step" , Name:"Repairing", Vendor:"Rohan", Area:"Mumbai"},
        {service:"Door-Step" , Name:"Insalling", Vendor:"Kiran", Area:"Delhi"},
        {service:"Door-Step" , Name:"Cleaning", Vendor:"Akshay", Area:"Agra"}
      ]
    }
  }

  render(){
    
    return (
      <div className="App container-fluid">
        <div className="row">
            <h1>Lists Of Vehicles</h1>
            <div className="buttonDiv">
              <button className="btn btn-primary btn-md buttonUpdate" onClick="">Update List</button>
            </div>
        </div>
        <div className="row">
          <Service service={this.state.services[0].service} Name={this.state.services[0].Name} Vendor={this.state.services[0].Vendor} Area={this.state.services[0].Area} /> 
          <Service service={this.state.services[1].service} Name={this.state.services[1].Name} Vendor={this.state.services[1].Vendor} Area={this.state.services[1].Area} />
          <Service service={this.state.services[2].service} Name={this.state.services[2].Name} Vendor={this.state.services[2].Vendor} Area={this.state.services[2].Area} />
          <Service service={this.state.services[3].service} Name={this.state.services[3].Name} Vendor={this.state.services[3].Vendor} Area={this.state.services[3].Area} />
        </div>
      </div>
    )
  }
  
}

export default App;