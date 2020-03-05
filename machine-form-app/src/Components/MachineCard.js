import React from 'react';
import '../styles/UserForm.css';
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
                {this.props.producer} <br/>
                {this.props.model} <br/>
                {listOfProcesses}
            </div>
        </div>
      );
      }
  }
  
  export default MachineCard;
  
  
  