import React from 'react';
import { ChromePicker } from 'react-color'

const ColorPickerWrapper = ({onChange, color}) => (
  <div className='color-picker-wrapper-div'>
      <ChromePicker {...{color, onChange}}/>
  </div>
);

export default ColorPickerWrapper;