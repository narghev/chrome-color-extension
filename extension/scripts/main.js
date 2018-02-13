// const style = document.createElement('style');

// style.innerHTML += styleMaker('.gstl_0', 'background-color', 'red');
// style.innerHTML += styleMaker('body', 'background-color', 'blue');

// document.head.appendChild(style);

const colorPickerRootElement = document.createElement('div');
colorPickerRootElement.setAttribute('id', 'colorPickerRootElemet');
document.body.appendChild(colorPickerRootElement);

let elementInFocus = null;
let prevElementInFocus = null;
let focusedElement = null;

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
  elementInFocus.style.outline = '';
  elementInFocus.style.backgroundColor = '';

  prevElementInFocus.style.outline = '';
  prevElementInFocus.style.backgroundColor = '';

  document.removeEventListener('mousemove', mousemoveHandler);
  document.removeEventListener('click', elementFocusClickHandler);

  focusedElement = event.target;
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  const {type} = request;

  switch (type){
  case 'inspector_on':
    document.addEventListener('mousemove', mousemoveHandler);
    document.addEventListener('click', elementFocusClickHandler);
    break;
  }
});