import React from 'react';
import '../styles/UserForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import UserInformations from './UserInformations.js'
import MachineList from './MachineList';
import AddMachineForm from './AddMachineForm';

class UserForm extends React.Component {
  render() {
    return (
        <div class="container">
            <UserInformations />
            <hr></hr>

            <div class="row">
                <div class="col">
                    <MachineList />

                </div>
                <div class="col">
                    <AddMachineForm />
                </div>
            </div>
        </div>
    );
    }
}

export default UserForm;
