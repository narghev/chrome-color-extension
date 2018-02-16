import React from 'react';
import ReactDOM from 'react-dom';
import ColorPreview from './components/color_previewer';
import Buttons from './components/buttons';
import IdOrClass from './components/id_or_class_radios';
import { ChromePicker } from 'react-color';

import {createTheSelector} from './helper/selector';

import './style.scss';

class App extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      bgColor: {r: 255, g: 255, b: 255, a: 1},
      fontColor: {r: 0, g: 0, b: 0},
      element: null,
      idOrClass: null
    };
  }

  radioChangeHandler = (event) => {
    this.setState({idOrClass: event.target.value});
  }

  onBgColorChange = color => {
    this.setState({bgColor: color.rgb});
  }

  onFontColorChange = color => {
    this.setState({fontColor: color.rgb});
  }

  cancelClickHandler = () => {
    detachTheColorPicker();
  }

  okClickHandler = () => {
    const {idOrClass, bgColor, fontColor} = this.state;

    const selector = createTheSelector(focusedElement, idOrClass);

    const newStyle = document.createElement('style');
    newStyle.innerHTML = `
      ${selector}{
        background-color: rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a}) !important;
        color: rgb(${fontColor.r}, ${fontColor.g}, ${fontColor.b}) !important;
      }
    `;
    document.head.appendChild(newStyle);

    detachTheColorPicker();
  }

  componentWillMount(){
    const elementId = focusedElement.getAttribute('id') && 'id';
    const elementClass = focusedElement.getAttribute('class') && 'class';
    this.setState({element: focusedElement, idOrClass: elementId || elementClass});
  }

  render(){
    const {bgColor, fontColor, element, idOrClass} = this.state;
    return (
      <div className="extension-color-modifier-app">
        <div className="extension-color-modifier-color-picker-wrapper">
          <ChromePicker {...{color: bgColor, onChange: this.onBgColorChange}}/>
          <ChromePicker {...{
            color: fontColor,
            onChange: this.onFontColorChange,
            disableAlpha: true
          }}
          />
        </div>
        <ColorPreview {...{bgColor, fontColor}} />
        <IdOrClass {...{element, idOrClass, onChange: this.radioChangeHandler}} />
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