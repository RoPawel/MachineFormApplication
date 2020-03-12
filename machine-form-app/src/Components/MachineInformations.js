import React from 'react';
import '../styles/MachineForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, FormControl, Container, Row, Col, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import CuttingForm from './CuttingForm'
import PunchingForm from './PunchingForm';
import Clamps from './Clamps';

class MachineInformations extends React.Component {
  render() {
    return (
        <div class="container">
            <Form>
                <div class="row">
                    <div class="col">
                        <h3>Parametry Maszyny</h3>
                    </div>
                </div>
                <div class="row">
                    {/* LEWA STRONA */}
                    <div className="col">
                        <Form.Group controlId="machineControllerForm">
                            <Form.Label>Sterownik maszyny</Form.Label>
                            <Form.Control type="text" placeholder="Sterownik"></Form.Control>
                        </Form.Group>
                
                        <Form.Group controlId="machinPowerSourceForm">
                            <Form.Label>Źródło zasilania</Form.Label>
                            <Form.Control type="text" placeholder="Źródło"></Form.Control>
                        </Form.Group>
                        <div class="row">
                            <div class="col">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-y">Repozycje</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <DropdownButton
                                    as={InputGroup.Prepend}
                                    variant="outline-secondary"
                                    title="Nie"
                                    id="input-group-dropdown-1"
                                    >
                                    <Dropdown.Item eventKey="1">Tak</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Nie</Dropdown.Item>
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

                            </div>
                            <div class="col">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-y">Odcięcie arkusza</InputGroup.Text>
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
                                        <InputGroup.Text id="basic-y">Podprogramy</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <DropdownButton
                                    as={InputGroup.Prepend}
                                    variant="outline-secondary"
                                    title="Nie"
                                    id="input-group-dropdown-1"
                                    >
                                    <Dropdown.Item eventKey="1">Tak</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Nie</Dropdown.Item>
                                    </DropdownButton>
                                </InputGroup>

                            </div>
                        </div>
                            <div class="row">
                                <div class="col">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-y">Mikrozłącza</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <DropdownButton
                                        as={InputGroup.Prepend}
                                        variant="outline-secondary"
                                        title="Automatyczne"
                                        id="input-group-dropdown-1"
                                        >
                                        <Dropdown.Item eventKey="1">Automatyczne</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Manualne</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">3D</Dropdown.Item>
                                        </DropdownButton>
                                    </InputGroup>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-y">Cięcie/wykrawanie na wspólną linię</InputGroup.Text>
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
                           <div class="row">
                                <div class="col">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-y">Rozkład pod zaciskami</InputGroup.Text>
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
                    {/* PRAWA STRONA */}
                    <div className="col">
                        <Form.Label>Wielkość stołu</Form.Label>
                        <div class="row">
                            <div className="col">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-x">X</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl />
                                </InputGroup>
                            </div>
                            <div className="col">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-y">Y</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl />
                                </InputGroup>
                            </div>
                        </div>
                        <Form.Label>Zakres roboczy stołu</Form.Label>
                        <div class="row">
                            <div className="col">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-x">X</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl />
                                </InputGroup>
                            </div>
                            <div className="col">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-y">Y</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl />
                                </InputGroup>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col">
                                <DropdownButton
                                    as={InputGroup.Prepend}
                                    variant="outline-secondary"
                                    title="Jednostki"
                                    id="input-group-dropdown-1"
                                >
                                <Dropdown.Item eventKey="1">Milimetry (MM)</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Cale (inch)</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className="col">
                                <DropdownButton
                                    as={InputGroup.Prepend}
                                    variant="outline-secondary"
                                    title="Ilość palników"
                                    id="input-group-dropdown-1"
                                >
                                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                                <Dropdown.Item eventKey="4">4</Dropdown.Item>
                                <Dropdown.Item eventKey="5">5</Dropdown.Item>
                                <Dropdown.Item eventKey="6">6</Dropdown.Item>
                                <Dropdown.Item eventKey="7">7</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className="col">
                                <DropdownButton
                                    as={InputGroup.Prepend}
                                    variant="outline-secondary"
                                    title="Ilość portali"
                                    id="input-group-dropdown-1"
                                >
                                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                        <div class="row">
                            <Clamps />
                        </div>
                    </div>
                </div>
                <hr></hr>
            </Form>
        </div>
    );
    }
}

export default MachineInformations;
