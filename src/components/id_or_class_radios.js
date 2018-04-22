import React from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

const IdOrClassRadios = ({element, idOrClass, onChange}) => {
  const elementId = element.getAttribute('id');
  const elementClass = element.getAttribute('class');

  if (!element) return null;

  return (
    <div className="extension-color-modifier-id-or-class-radios-wrapper">
      <RadioGroup {...{onChange, value: idOrClass}}>
        <Radio value="id" disabled={!elementId} >Modify this particular element</Radio>
        <Radio value="class" disabled={!elementClass}>Modify this and similar elements</Radio>
      </RadioGroup>
    </div>
  );
};

export default IdOrClassRadios;