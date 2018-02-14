import React from 'react';

const Buttons = ({cancelClickHandler, okClickHandler}) => (
  <div className="buttons">
    <button onClick={cancelClickHandler}>Cancel</button>
    <button onClick={okClickHandler}>OK!</button>
  </div>
);

export default Buttons;