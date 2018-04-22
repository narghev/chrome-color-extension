import React from 'react';
import { Switch } from 'antd';

const BgFontSwitch = ({onChange, backgroundOrFont}) => {
  return (
    <div
      className="extension-color-modifier-bg-or-font-switch-wrapper"
      style={{marginTop: backgroundOrFont === 'bg' ? '20px' : '38px'}}
    >
      <span>Font</span>
      <Switch checked={backgroundOrFont === 'bg'} onChange={onChange} />
      <span>Background</span>
    </div>
  );
};

export default BgFontSwitch;