import React from 'react';

const ColorPreview = ({color}) => {
  const {r,g,b,a} = color;
  const backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  return (
    <div
      className="extension-color-modifier-color-previewer"
      style={{backgroundColor}}
    />
  );
};

export default ColorPreview;