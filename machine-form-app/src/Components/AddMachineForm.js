import React from 'react';
import '../styles/UserForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';

class AddMachineForm extends React.Component {
  render() {
    return (
      <div className="AddMachineForm">
        <h2 align="left">Dodaj maszynę</h2>

        <InputGroup className="mb-3" type="text" required>
            <FormControl 
                placeholder="Nazwa maszyny"
            />
        </InputGroup>

        <div class="row">
            <div class="col">
                <InputGroup className="mb-3" type="text" required>
                <FormControl 
                    placeholder="Producent"
                />
                </InputGroup>
            </div>
            <div class="col">
                <InputGroup className="mb-3" type="text" required>
                <FormControl 
                    placeholder="Model maszyny"
                />
                </InputGroup>
            </div>
        </div>

        <button type="button" class="btn btn-primary">Dodaj</button>


            {/* <div class="form-group">
            <label for="exampleFormControlSelect1">Wybór procesu</label>
            <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
                </div> */}
            </div>
    );
    }
}

export default AddMachineForm;




