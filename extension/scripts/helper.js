const page = document.location.host;

const styleMaker = (element, attribute, value) => {
  const selector = element.id || element.class;
  return `${element} { ${attribute}: ${value} !important;}\n`;
};

let clearConfig = () => {
  chrome.storage.sync.remove(`extensionColorModifierConfig-${page}`);
  
  const styleTag = document.getElementById('extensionColorModifierStyleTag');
  styleTag && styleTag.remove();
};

const save = ({selector, bgColor, fontColor}) => {
  let currentConfig;
  chrome.storage.sync.get(`extensionColorModifierConfig-${page}`, currentConfigObj => {
    currentConfig = {...currentConfigObj[`extensionColorModifierConfig-${page}`]};
    const newConfig = {...currentConfig, [selector]: {bgColor, fontColor}};
    chrome.storage.sync.set({[`extensionColorModifierConfig-${page}`]: newConfig});
  });
};

let attachTheColorPicker;
let detachTheColorPicker = () => {
  const colorPickerRootElement = document.getElementById('extensionColorModifierColorPickerRootElement');
  document.body.removeChild(colorPickerRootElement);
};