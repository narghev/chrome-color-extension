import React from 'react';
import { Button } from 'antd';

const Buttons = ({cancelClickHandler, okClickHandler}) => (
  <div className="extension-color-modifier-buttons">
    <Button type="danger" onClick={cancelClickHandler} >Cancel</Button>
    <Button type="primary" onClick={okClickHandler} >OK!</Button>
  </div>
);

export default Buttons;