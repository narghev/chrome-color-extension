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

const initConfigs = () => {
  chrome.storage.sync.get(`extensionColorModifierConfig-${page}`, currentConfigObj => {

    const styleTag = document.createElement('style');
    styleTag.id = 'extensionColorModifierStyleTag';

    const configs = currentConfigObj[`extensionColorModifierConfig-${page}`];
    for (let selector in configs){
      const {fontColor, bgColor} = configs[selector];
      styleTag.innerHTML += `
      ${selector}{
        background-color: rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a}) !important;
        color: rgb(${fontColor.r}, ${fontColor.g}, ${fontColor.b}) !important;
      }
      `;
    }

    document.head.appendChild(styleTag);
  });
};

let attachTheColorPicker;
let detachTheColorPicker = () => {
  const colorPickerRootElement = document.getElementById('extensionColorModifierColorPickerRootElement');
  document.body.removeChild(colorPickerRootElement);
};