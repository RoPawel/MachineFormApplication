import React from 'react';
import '../styles/UserForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';


class UserInformations extends React.Component {
    render() {
      return (
        <div class="row">
                <div class="col">
                    <h2 align="left">Podstawowe dane</h2>
                    <div class="row">
                        <div class="col">
                            <InputGroup className="mb-3" type="text" required>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Imię</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                            </InputGroup>
                        </  div>
                        <div class="col">
                            <InputGroup className="mb-3" type="text" required>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Nazwisko</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                            </InputGroup>
                        </div>
                    </div> 

                    <div class="row">
                        <div class="col">
                            <InputGroup className="mb-3" type="number" required>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Telefon</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                            </InputGroup>   
                        </div>
                        <div class="col">
                            <InputGroup className="mb-3" type="email" required>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Mail</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                            </InputGroup>   
                        </div>
                    </div> 
                    
                    <hr></hr>
                    
                    <InputGroup className="mb-3" required>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Nazwa firmy</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />
                    </InputGroup>
                    
                    <InputGroup className="mb-3" required>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Ulica</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />
                    </InputGroup>
                    
                    <div class="row">
                        <div class="col">
                            <InputGroup className="mb-3" required>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Kod Pocztowy</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                            </InputGroup>   
                        </div>
                        <div class="col">
                            <InputGroup className="mb-3" required>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Miasto</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                                </InputGroup>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h2 align="left">Dane Technologa</h2>

                    <div class="row">
                        <div class="col">
                            <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Imię</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                //placeholder="Imię"
                            />
                            </InputGroup>
                        </div>
                        <div class="col">
                            <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Nazwisko</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                //placeholder="Nazwisko"
                            />
                            </InputGroup>
                        </div>
                    </div> 

                    <InputGroup className="mb-3" type="number" required>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Telefon</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />
                    </InputGroup>   

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Mail</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Adres e-mail"
                        />
                    </InputGroup>
                </div>
            </div>  
      );
    }
}

export default UserInformations;