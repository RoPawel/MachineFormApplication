import React from 'react';
import '../styles/MachineForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, FormControl, Container, Row, Col, Form, Dropdown, DropdownButton } from 'react-bootstrap';

class PunchingForm extends React.Component {
  render() {
    return ( 
        <div class="container">
            <div class="row">
                <div class="col">
                    <hr></hr>
                    <h3>Ustawienia wykrawania</h3>
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
                            <InputGroup.Text id="basic-y">Obsługa Multitooli</InputGroup.Text>
                        </InputGroup.Prepend>
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Sterownik"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item eventKey="1">Tak</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Nie</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">
                            Lista Narzędzi
                            </span>
                        </div>
                        <div className="custom-file">
                            <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                Wybierz plik
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-x">Ilość stacji</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />
                    </InputGroup>

                    {/* TUTAJ PO WPISANIU LICZBY STACJI ROZWINIE SIĘ OPCJA WYPEŁNIANIA ROZMIARAMI I INDEKSAMI */}
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-y">1.</InputGroup.Text>
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

export default PunchingForm;
