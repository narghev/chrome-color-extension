const styleMaker = (element, attribute, value) => {
  const selector = element.id || element.class;
  return `${element} { ${attribute}: ${value} !important;}\n`;
};


let attachTheColorPicker;
let detachTheColorPicker = () => {
  const colorPickerRootElement = document.getElementById('extensionColorModifierColorPickerRootElement');
  document.body.removeChild(colorPickerRootElement);
};