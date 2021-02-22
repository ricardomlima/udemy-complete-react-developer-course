import React from 'react';
import AddOption from './AddOption';

const Actions = (props) => (
    <div>
    <button onClick={props.handlePickOptions} disabled={props.hasOptions}>What should I do?</button>
    <AddOption handleAddOption={props.handleAddOption} />
    </div>
)


export default Actions;