import React from 'react';
import ReactDOM from 'react-dom';
import ColorPickerWrapper from './components/color_picker_wrapper';
import ColorPreview from './components/color_previewer';
import Buttons from './components/buttons';

import './style.scss';

class App extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      color: {r: 255, g: 255, b: 255, a: 1}
    };
  }

  onChange = color => {
    this.setState({color: color.rgb});
  }

  cancelClickHandler = () => {
    console.log('cancel');
  }

  okClickHandler = () => {
    console.log('ok');
  }

  render(){
    const {color} = this.state;
    return (
      <div className="extension-color-modifier-app">
        <ColorPickerWrapper {...{color, onChange: this.onChange}} />
        <ColorPreview {...{color}} />
        <Buttons {...{cancelClickHandler: this.cancelClickHandler, okClickHandler: this.okClickHandler}} />
      </div>
    ); 
  }
}

ReactDOM.render(<App />, document.getElementById('extensionColorModifierColorPickerRootElement'));