import React from 'react';

import { ChromePicker } from 'react-color'

export default
class ColorPickerWrapper extends React.PureComponent {

  constructor(){
    super();
    this.state = {
      color: '#fff'
    };
  }

  onChange = color => {
    this.setState({color: color.rgb});
  }

  render(){
    const {color} = this.state;
    return (
      <div className='color-picker-wrapper-div'>
        <ChromePicker {...{color, onChange: this.onChange}}/>
      </div>
    );
  }
}