import React from 'react';

export default
class IdOrClassRadion extends React.PureComponent {
  render(){
    return(
      <div className="extension-color-modifier-id-or-class-radios-wrapper">
        <label 
          htmlFor="extension-color-modifier-id-or-class-radios-class"
          className="extension-color-modifier-id-or-class-radios-label"
        >Class</label>
        <input
          id="extension-color-modifier-id-or-class-radios-class"
          type="radio"
          name="extension-color-modifier-id-or-class-radios"
        />
        <label 
          htmlFor="extension-color-modifier-id-or-class-radios-id"
          className="extension-color-modifier-id-or-class-radios-label"
        >Id</label>
        <input
          id="extension-color-modifier-id-or-class-radios-id"
          type="radio"
          name="extension-color-modifier-id-or-class-radios"
        />
      </div>
    );
  }
}