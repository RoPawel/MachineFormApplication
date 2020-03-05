import React from 'react';
import '../styles/UserForm.css';
import MachineCard from './MachineCard';
import machines from './DummyData.js';

class MachineList extends React.Component {
  render() {
    const machineslist = machines.map((machine) => (
        <MachineCard 
            key={'machine' + machine.id}
            machineName={machine.machineName}
            producer={machine.producer}
            model={machine.model}
            processes={machine.processes}
        />
        ));
    return (
      <div className="MachineList">
        <h2 align="left">Lista Maszyn</h2>
            <div id="machines">
                {machineslist}
            </div>
            
      </div>
    );
    }
}

export default MachineList;


