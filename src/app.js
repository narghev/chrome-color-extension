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
      color: {r: 255, g: 255, b: 255, a: 1},
      element: null
    };
  }

  onChange = color => {
    this.setState({color: color.rgb});
  }

  cancelClickHandler = () => {
    detachTheColorPicker();
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
    detachTheColorPicker();
  }

  componentWillMount(){
    this.setState({element: focusedElement});
  }

  render(){
    const {color, element} = this.state;
    return (
      <div className="extension-color-modifier-app">
        <ColorPickerWrapper {...{color, onChange: this.onChange}} />
        <ColorPreview {...{color}} />
        <IdOrClass {...{element}} />
        <Buttons {...{cancelClickHandler: this.cancelClickHandler, okClickHandler: this.okClickHandler}} />
      </div>
    ); 
  }
}

attachTheColorPicker = () => {
  // Initialize the styling of color picker
  const colorPickerRootElementStyle = document.createElement('style');
  colorPickerRootElementStyle.innerHTML = `
    #extensionColorModifierColorPickerRootElement {
      position: fixed;
      display: flex;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999999;
      background-color: rgba(33,33,33,0.95);
    }
  `;
  document.head.appendChild(colorPickerRootElementStyle); // append it to the head


  // create the root element where the color picker will be attached
  const colorPickerRootElement = document.createElement('div');
  colorPickerRootElement.id = 'extensionColorModifierColorPickerRootElement';
  document.body.appendChild(colorPickerRootElement);
  ReactDOM.render(<App />, document.getElementById('extensionColorModifierColorPickerRootElement'));
};

detachTheColorPicker = () => {
  const colorPickerRootElement = document.getElementById('extensionColorModifierColorPickerRootElement');
  document.body.removeChild(colorPickerRootElement);
};