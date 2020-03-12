import React from 'react';
import '../styles/MachineForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, FormControl, Container, Row, Col, Form, Dropdown, DropdownButton } from 'react-bootstrap';

class Clamps extends React.Component {
  render() {
    return (
        <div class="container">
            <hr></hr>
            <hr></hr>
            <h4>Zaciski</h4>
            <hr></hr>
            <div class="row">
                <div class="col">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-x">Ilość zacisków</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />
                    </InputGroup>
                    {/* TUTAJ BEDZIE LISTA DO WYPELNIENIA NA PODSTAWIE ILOSCI ZACISKOW WPISANEJ POWYZEJ */}
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">2.</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">Rozmiar</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Obrotowa"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item eventKey="1">Obrotowa</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Nieobrotowa</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
    }
}

export default Clamps;
