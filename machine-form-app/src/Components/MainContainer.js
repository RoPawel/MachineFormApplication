import React from 'react';
import '../styles/App.css';
import UserForm from './UserForm.js';
import MachineForm from './MachineForm.js';

class MainContainer extends React.Component {
  render() {
    return (
        <div className="MainContainer">
            {/* <UserForm /> */}
            <MachineForm />
        </div>
    );
    }
}

export default MainContainer;
