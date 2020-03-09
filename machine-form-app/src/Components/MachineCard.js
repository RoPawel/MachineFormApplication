import React from 'react';
import '../styles/MachineCard.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';


class MachineCard extends React.Component {
    render() {
        var listOfProcesses = this.props.processes.map(function(process,i){
            return <li key={i}>{process}</li>}.bind(this))
        
      return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-text">{this.props.machineName}</h5>
                Producent: {this.props.producer} <br/>
                Model: {this.props.model} <br/>
                Procesy: <br />
                <ul class="list-style-1">
                    {listOfProcesses}
                </ul>
            </div>
        </div>
      );
      }
  }
  
  export default MachineCard;
  
  
  