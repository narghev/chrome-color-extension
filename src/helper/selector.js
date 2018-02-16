export const createTheSelector = (element, idOrClass) => {
  let selector = '';

  switch (idOrClass){
  case 'id':
    const elementId = element.getAttribute('id');
    selector = `#${elementId}`;
    break;
  case 'class':
    const elementClass = element.getAttribute('class');
    const classes = elementClass.split(' ');
    classes.forEach(c => {
      if (c)
        selector += `.${c}`;
    });
    break;
  }

  return selector;
};