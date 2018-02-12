let elementInFocus = null;
let prevElementInFocus = null;
let focusedElement = null;

const styleMaker = (element, attribute, value) => {
  const selector = element.id || element.class;
  return `${element} { ${attribute}: ${value} !important;}\n`;
};

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

const elementFocusClickHandler = (event) => {
  inspectorOff();
  focusedElement = event.target;
  console.log(focusedElement);
};

const inspectorOn = () => {
  document.addEventListener('mousemove', mousemoveHandler);
  document.addEventListener('click', elementFocusClickHandler);
}

const inspectorOff = () => {

  elementInFocus.style.outline = '';
  elementInFocus.style.backgroundColor = '';

  prevElementInFocus.style.outline = '';
  prevElementInFocus.style.backgroundColor = '';

  document.removeEventListener('mousemove', mousemoveHandler);
  document.removeEventListener('click', elementFocusClickHandler);
};