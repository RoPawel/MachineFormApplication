import React from 'react';
import '../styles/MachineForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import AutoRemoval from './AutoRemoval';
import MachineInformations from './MachineInformations'
import CuttingForm from './CuttingForm'
import PunchingForm from './PunchingForm'

class MachineForm extends React.Component {
  render() {
    return (
        <div class="container">
            <div class="row">
                <MachineInformations />
            </div>
            <div class="row">
                <div class="row">
                    <CuttingForm />
                    <PunchingForm />
                {/* <AutoRemoval /> */}
                </div>
            </div>
        </div>
    );
    }
}

export default MachineForm;
