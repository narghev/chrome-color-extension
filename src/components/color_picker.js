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
    console.log(color.rgb);
    this.setState({color: color.rgb});
  }

  render(){
    const {color} = this.state;
    return (
      <ChromePicker {...{color, onChange: this.onChange}}/>
    );
  }
}