// Add the styles to dom from storage
initConfigs();

// declare some global variables
let hoveredElement = null;
let focusedElement = null;

// function that handles the mouse move on the elements
// used for highlighting the hovered element
const mousemoveHandler = () => {
  if (!!hoveredElement){
    hoveredElement.style.outline = '';
    hoveredElement.style.backgroundColor = '';
    hoveredElement = null;
  }

  document.body.style.cursor = 'pointer';
  const hoveredElements = document.querySelectorAll(':hover');

  if (hoveredElements.length > 0){
    hoveredElement = hoveredElements[hoveredElements.length - 1];

    const elementClass = hoveredElement.getAttribute('class');
    const elementId = hoveredElement.getAttribute('id');

    if (!(elementClass || elementId)) return;

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

  document.body.style.cursor = '';
  document.removeEventListener('mousemove', mousemoveHandler);
  document.removeEventListener('mousedown', elementFocusClickHandler);
  document.removeEventListener('keydown', escapeKeyPressHandler);
  document.body.oncontextmenu = () => (true);
};

// picking an element to modify the colors
const elementFocusClickHandler = event => {
  if (!hoveredElement) return;

  const elementClass = event.target.getAttribute('class');
  const elementId = event.target.getAttribute('id');

  if (!(elementClass || elementId)) return;

  inspector_off();

  if (event.which === 3) return;

  focusedElement = event.target;
  attachTheColorPicker();
};