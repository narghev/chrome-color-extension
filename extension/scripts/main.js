// declare some global variables
let hoveredElement = null;
let prevElementInFocus = null;
let focusedElement = null;


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
colorPickerRootElement.style = 'display: none';
document.body.appendChild(colorPickerRootElement);

// function that handles the mouse move on the elements
// used for highlighting the hovered element
const mousemoveHandler = () => {
  if (!!prevElementInFocus){
    prevElementInFocus.style.outline = '';
    prevElementInFocus.style.backgroundColor = '';
  }

  document.body.style.cursor = 'pointer';
  const hoveredElements = document.querySelectorAll(':hover');

  if (hoveredElements.length > 0){
    prevElementInFocus = hoveredElement;
    hoveredElement = hoveredElements[hoveredElements.length - 1];
    hoveredElement.style.outline = '#db1111 solid 2px';
    hoveredElement.style.backgroundColor = '#f2d793';
  }
};

// picking an element to modify the colors
const elementFocusClickHandler = event => {
  if (!hoveredElement) return;

  hoveredElement.style.outline = '';
  hoveredElement.style.backgroundColor = '';

  prevElementInFocus.style.outline = '';
  prevElementInFocus.style.backgroundColor = '';

  document.body.style.cursor = '';
  document.removeEventListener('mousemove', mousemoveHandler);
  document.removeEventListener('click', elementFocusClickHandler);

  hoveredElement = event.target;
  colorPickerRootElement.style = '';
};