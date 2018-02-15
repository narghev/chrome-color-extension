export const createTheSelector = (element) => {
  let selector = '';

  const elementId = element.getAttribute('id');
  const elementClass = element.getAttribute('class');

  if (elementId){
    selector = `#${elementId}`;
  }

  else if (elementClass){
    const classes = elementClass.split(' ');
    classes.forEach(c => {
      if (c)
        selector += `.${c}`;
    });
  }

  return selector;
};