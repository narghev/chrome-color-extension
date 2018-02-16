import React from 'react';

const ColorPreview = ({bgColor, fontColor}) => {
  const backgroundColor = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`;
  const color = `rgb(${fontColor.r}, ${fontColor.g}, ${fontColor.b})`;

  return (
    <div
      className="extension-color-modifier-color-previewer"
      style={{backgroundColor, color}}
    >
      Preview
    </div>
  );
};

export default ColorPreview;