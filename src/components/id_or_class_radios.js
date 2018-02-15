import React from 'react';

export default
class IdOrClassRadion extends React.Component {
  render(){
    if (!element) return null;

    const {element} = this.props;
    const elementId = element.getAttribute('id');
    const elementClass = element.getAttribute('class');

    return(
      <div className="extension-color-modifier-id-or-class-radios-wrapper">
        <label 
          htmlFor="extension-color-modifier-id-or-class-radios-class"
          className={`extension-color-modifier-id-or-class-radios-label ${!elementId && 'disabled'}`}
        >Class</label>
        <input
          id="extension-color-modifier-id-or-class-radios-class"
          type="radio"
          name="extension-color-modifier-id-or-class-radios"
          disabled={!elementId}
        />
        <label 
          htmlFor="extension-color-modifier-id-or-class-radios-id"
          className={`extension-color-modifier-id-or-class-radios-label ${!elementClass && 'disabled'}`}
        >Id</label>
        <input
          id="extension-color-modifier-id-or-class-radios-id"
          type="radio"
          name="extension-color-modifier-id-or-class-radios"
          disabled={!elementClass}
        />
      </div>
    );
  }
}