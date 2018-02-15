import React from 'react';
import ReactDOM from 'react-dom';
import ColorPickerWrapper from './components/color_picker_wrapper';
import ColorPreview from './components/color_previewer';
import Buttons from './components/buttons';
import IdOrClass from './components/id_or_class_radios';

import {createTheSelector} from './helper/selector';

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
    colorPickerRootElement.style = 'display: none';
  }

  okClickHandler = () => {
    const {r, g, b, a} = this.state.color;
    const selector = createTheSelector(focusedElement);
    const newStyle = document.createElement('style');
    newStyle.innerHTML = `
      ${selector}{
        background-color: rgba(${r}, ${g}, ${b}, ${a}) !important;
      }
    `;
    document.head.appendChild(newStyle);
    colorPickerRootElement.style = 'display: none';
  }

  render(){
    const {color} = this.state;
    return (
      <div className="extension-color-modifier-app">
        <ColorPickerWrapper {...{color, onChange: this.onChange}} />
        <ColorPreview {...{color}} />
        <IdOrClass />
        <Buttons {...{cancelClickHandler: this.cancelClickHandler, okClickHandler: this.okClickHandler}} />
      </div>
    ); 
  }
}

ReactDOM.render(<App />, document.getElementById('extensionColorModifierColorPickerRootElement'));