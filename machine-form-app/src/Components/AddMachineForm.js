import React from 'react';
import '../styles/UserForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, FormControl, Container, Row, Col, Form } from 'react-bootstrap';

class AddMachineForm extends React.Component {
  render() {
        return (
        <div className="AddMachineForm">
            <h2 align="left">Dodaj maszynę</h2>
            <Form>
                <FormControl className="mb-3" type="text" required
                    placeholder="Nazwa maszyny"
                />

                <div class="row">
                    <div class="col">
                        <FormControl className="mb-3" type="text" required
                            placeholder="Producent"
                        />
                    </div>
                    <div class="col">
                        <FormControl className="mb-3" type="text" required 
                            placeholder="Model maszyny"
                        />
                    </div>
                </div>
                <hr />
                <h4 align="left">Podstawowe procesy cięcia</h4>
                <div class="row">
                    <div class="col">
                        <div class="checkbox">
                            <Form.Group controlId="laserCheckbox" >
                                <Form.Check type="checkbox" label="Laser" />
                            </Form.Group>
                        </div>
                        <div class="checkbox">
                            <Form.Group controlId="oxygasCheckbox" >
                                <Form.Check type="checkbox" label="Tlen" />
                            </Form.Group>
                        </div>
                        <div class="checkbox">
                            <Form.Group controlId="plazmaCheckbox" >
                                <Form.Check type="checkbox" label="Plazma" />
                            </Form.Group>
                        </div>
                    </div>
                    <div class="col">
                        <div class="checkbox">
                            <Form.Group controlId="waterjetCheckbox" >
                                <Form.Check type="checkbox" label="Waterjet" />
                            </Form.Group>
                        </div>
                        <div class="checkbox">
                            <Form.Group controlId="routerCheckbox" >
                                <Form.Check type="checkbox" label="Router/Nóż Oscylacyjny" />
                            </Form.Group>
                        </div>
                        <div class="checkbox">
                            <Form.Group controlId="punchCheckbox" >
                                <Form.Check type="checkbox" label="Wykrawanie" />
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <hr />
                <h4 align="left">Dodatkowe procesy</h4>
                <div class="row">
                    <div class="col">
                        <div class="checkbox">
                            <Form.Group controlId="markingCheckbox" >
                                <Form.Check type="checkbox" label="Znakowanie" />
                            </Form.Group>
                        </div>
                        <div class="checkbox">
                            <Form.Group controlId="pointHitCheckbox" >
                                <Form.Check type="checkbox" label="Punktowanie" />
                            </Form.Group>
                        </div>
                    </div>
                    <div class="col">
                        <div class="checkbox">
                            <Form.Group controlId="vaporizingCheckbox" >
                                <Form.Check type="checkbox" label="Odparowanie" />
                            </Form.Group>
                        </div>
                        <div class="checkbox">
                            <Form.Group controlId="drillCheckbox" >
                                <Form.Check type="checkbox" label="Wiercenie" />
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="checkbox">
                            <Form.Group controlId="partRemovalCheckbox" >
                                <Form.Check type="checkbox" label="Automatyczny załadunek/rozładunek" />
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-primary">Dodaj</button>
            </Form>   
        </div>
    );
    }
}

export default AddMachineForm;




