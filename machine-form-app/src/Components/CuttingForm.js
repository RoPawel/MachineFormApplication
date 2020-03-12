import React from 'react';
import '../styles/MachineForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, FormControl, Container, Row, Col, Form, Dropdown, DropdownButton } from 'react-bootstrap';

class CuttingForm extends React.Component {
  render() {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>Ustawienia cięcia</h3>
                </div>    
            </div>
            <div class="row">
                <div className="col">
                    {/* LEWA STRONA */}
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">Sterowanie kompensacją</InputGroup.Text>
                        </InputGroup.Prepend>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Sterownik"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item eventKey="1">Sterownik</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Kod NC</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">Sterowanie posuwem</InputGroup.Text>
                        </InputGroup.Prepend>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Sterownik"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item eventKey="1">Sterownik</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Kod NC</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
               
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">Uzależnienie jakości cięcia od pola powierzchni</InputGroup.Text>
                        </InputGroup.Prepend>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Tak"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item eventKey="1">Tak</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Nie</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">Rodzaj głowicy ukosującej</InputGroup.Text>
                        </InputGroup.Prepend>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Nie dotyczy"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item eventKey="1">Podwójnie wychylna</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Wychylenie + rotor</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </div>
                {/* PRAWA STRONA */}
                <div className="col">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">Ramping</InputGroup.Text>
                        </InputGroup.Prepend>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Sterownik"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item eventKey="1">Nie</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Na narożach</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Na łukach</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Na wejściach</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Wszystkie powyżej</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">Wstępne przebijanie</InputGroup.Text>
                        </InputGroup.Prepend>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Tak"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item eventKey="1">Tak</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Nie</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">Czujnik wysokości</InputGroup.Text>
                        </InputGroup.Prepend>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Tak"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item eventKey="1">Tak</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Nie</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">Niszczenie ażuru</InputGroup.Text>
                        </InputGroup.Prepend>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Tak"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item eventKey="1">Tak</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Nie</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">Zaokrąglanie naroży</InputGroup.Text>
                        </InputGroup.Prepend>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Tak"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item eventKey="1">Tak</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Nie</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>

                </div>
            </div>
        </div>
        );
    }
}

export default CuttingForm;
