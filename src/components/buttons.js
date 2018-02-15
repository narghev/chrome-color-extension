import React from 'react';

const Buttons = ({cancelClickHandler, okClickHandler}) => (
  <div className="extension-color-modifier-buttons">
    <button className="extension-color-modifier-button" onClick={cancelClickHandler}>Cancel</button>
    <button className="extension-color-modifier-button" onClick={okClickHandler}>OK!</button>
  </div>
);

export default Buttons;