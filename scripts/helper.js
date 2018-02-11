const styleMaker = (element, attribute, value) => {
  return `${element} { ${attribute}: ${value} !important;}\n`;
};

const inspector_on = () => {
  let element = null;
  let prevElement = null;

  document.addEventListener('mousemove', () => {
    if (!!prevElement){
      prevElement.style.outline = '';
      prevElement.style.backgroundColor = '';
    }

    const hoveredElements = document.querySelectorAll(':hover');

    if (hoveredElements.length > 0){
      prevElement = element;
      element = hoveredElements[hoveredElements.length - 1];
      element.style.outline = '#db1111 solid 2px';
      element.style.backgroundColor = '#f2d793';
    }
  });
};