import React from 'react';
import ReactDOM from 'react-dom';
import ColorPreview from './components/color_previewer';
import Buttons from './components/buttons';
import IdOrClass from './components/id_or_class_radios';
import BgOrFont from './components/bg_or_font_switch';
import { ChromePicker } from 'react-color';

import {createTheSelector} from './helper/selector';

import './style.scss';
import 'antd/dist/antd.css';

class App extends React.PureComponent {
  constructor(){
    super();

    const styleTag = document.getElementById('extensionColorModifierStyleTag');
    if (!styleTag){
      this.styleTag = document.createElement('style');
      this.styleTag.id = 'extensionColorModifierStyleTag';
      document.head.appendChild(this.styleTag);
    } else {
      this.styleTag = styleTag;
    }

    const elementId = focusedElement.getAttribute('id') && 'id';
    const elementClass = focusedElement.getAttribute('class') && 'class';

    this.state = {
      bgColor: {r: 255, g: 255, b: 255, a: 1},
      fontColor: {r: 0, g: 0, b: 0},
      element: focusedElement,
      idOrClass: elementId || elementClass,
      backgroundOrFont: 'bg'
    };
  }

  radioChangeHandler = event => {
    this.setState({idOrClass: event.target.value});
  }

  switchChangeHandler = checked => {
    this.setState({backgroundOrFont: checked ? 'bg' : 'font'});
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

    this.styleTag.innerHTML += `
      ${selector}{
        background-color: rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a}) !important;
        color: rgb(${fontColor.r}, ${fontColor.g}, ${fontColor.b}) !important;
      }
    `;

    save({selector, bgColor, fontColor});

    detachTheColorPicker();
  }

  render(){
    const {bgColor, fontColor, element, idOrClass, backgroundOrFont} = this.state;

    const bg = backgroundOrFont === 'bg';
    const colorPickerOptions = {
      color: bg ? bgColor : fontColor,
      onChange: bg ? this.onBgColorChange : this.onFontColorChange,
      disableAlpha: !bg 
    };

    return (
      <div className="extension-color-modifier-app">
        <ChromePicker {...colorPickerOptions}/>
        <BgOrFont {...{onChange: this.switchChangeHandler, backgroundOrFont}}/>
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