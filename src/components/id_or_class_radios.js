import React from 'react';

const IdOrClassRadios = ({element, idOrClass, onChange}) => {
  const elementId = element.getAttribute('id');
  const elementClass = element.getAttribute('class');

  if (!element) return null;

  return (
    <div className="extension-color-modifier-id-or-class-radios-wrapper">
      <div>
        <label
          htmlFor="extension-color-modifier-id-or-class-radios-class"
          className={`extension-color-modifier-id-or-class-radios-label ${!elementId && 'disabled'}`}
        >
          Modify this particular element
        </label>
        <input
          id="extension-color-modifier-id-or-class-radios-class"
          type="radio"
          name="extension-color-modifier-id-or-class-radios"
          disabled={!elementId}
          checked={idOrClass === 'id'}
          onChange={onChange}
          value="id"
        />
      </div>
      <div>
        <label 
          htmlFor="extension-color-modifier-id-or-class-radios-id"
          className={`extension-color-modifier-id-or-class-radios-label ${!elementClass && 'disabled'}`}
        >
          Modify this and similar elements
        </label>
        <input
          id="extension-color-modifier-id-or-class-radios-id"
          type="radio"
          name="extension-color-modifier-id-or-class-radios"
          disabled={!elementClass}
          checked={idOrClass === 'class'}
          onChange={onChange}
          value="class"
        />
      </div>
    </div>
  );
};

export default IdOrClassRadios;