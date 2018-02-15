// declare some global variables
let hoveredElement = null;
let prevElementInFocus = null;
let focusedElement = null;
let attachTheColorPicker;
let detachTheColorPicker;


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

const escapeKeyPressHandler = event => {
  switch (event.which){
  case 27:
    inspector_off();
    break;
  }
};

const inspector_off = () => {
  hoveredElement.style.outline = '';
  hoveredElement.style.backgroundColor = '';

  prevElementInFocus.style.outline = '';
  prevElementInFocus.style.backgroundColor = '';

  document.body.style.cursor = '';
  document.removeEventListener('mousemove', mousemoveHandler);
  document.removeEventListener('mousedown', elementFocusClickHandler);
  document.removeEventListener('keydown', escapeKeyPressHandler);
  document.body.oncontextmenu = () => (true);
};

// picking an element to modify the colors
const elementFocusClickHandler = event => {
  if (!hoveredElement) return;

  inspector_off();

  if (event.which === 3) return;

  focusedElement = event.target;
  attachTheColorPicker();
};