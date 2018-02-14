import React from 'react';
import ReactDOM from 'react-dom';
import ColorPickerWrapper from './components/color_picker_wrapper';
import ColorPreview from './components/color_previewer';

import './style.scss';

class App extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      color: {r: 255, g: 255, b: 255, a:1}
    };
  }

  onChange = color => {
    this.setState({color: color.rgb});
  }

  render(){
    const {color} = this.state;
    return (
      <div>
        <ColorPickerWrapper {...{color, onChange: this.onChange}} />
        <ColorPreview {...{color}} />
      </div>
    ); 
  }
}

ReactDOM.render(<App />, document.getElementById('colorPickerRootElement'));