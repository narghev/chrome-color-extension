// declare some global variables
let elementInFocus = null;
let prevElementInFocus = null;
let focusedElement = null;


// Initialize the styling of color picker
const colorPickerRootElementStyle = document.createElement('style');
colorPickerRootElementStyle.innerHTML = `
  #colorPickerRootElement {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

document.head.appendChild(colorPickerRootElementStyle); // append it to the head


// create the root element where the color picker will be attached
const colorPickerRootElement = document.createElement('div');
colorPickerRootElement.id = 'colorPickerRootElement';
colorPickerRootElement.style = 'display: none';
document.body.appendChild(colorPickerRootElement);

// function that handles the mouse move on the elements
// used for highlighting the hovered element
const mousemoveHandler = () => {
  if (!!prevElementInFocus){
    prevElementInFocus.style.outline = '';
    prevElementInFocus.style.backgroundColor = '';
  }

  const hoveredElements = document.querySelectorAll(':hover');

  if (hoveredElements.length > 0){
    prevElementInFocus = elementInFocus;
    elementInFocus = hoveredElements[hoveredElements.length - 1];
    elementInFocus.style.outline = '#db1111 solid 2px';
    elementInFocus.style.backgroundColor = '#f2d793';
  }
};

// picking an element to modify the colors
const elementFocusClickHandler = (event) => {
  elementInFocus.style.outline = '';
  elementInFocus.style.backgroundColor = '';

  prevElementInFocus.style.outline = '';
  prevElementInFocus.style.backgroundColor = '';

  document.removeEventListener('mousemove', mousemoveHandler);
  document.removeEventListener('click', elementFocusClickHandler);

  focusedElement = event.target;
};

// add the listener, to listen to incoming msg-s from the extension popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  const {type} = request;

  switch (type){
  case 'inspector_on':
    document.addEventListener('mousemove', mousemoveHandler);
    document.addEventListener('click', elementFocusClickHandler);
    break;
  }
});