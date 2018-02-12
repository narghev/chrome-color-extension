const styleMaker = (element, attribute, value) => {
  const selector = element.id || element.class;
  return `${element} { ${attribute}: ${value} !important;}\n`;
};