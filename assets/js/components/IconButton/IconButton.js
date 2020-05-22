import React from 'react';
import './IconButton.scss';

const genClasses = (isTabbing, buttonDisabled) => {
  let classes = 'button-container';

  if (isTabbing) classes = `${classes} tab-outling`;
  if (buttonDisabled) classes = `${classes} is-disabled`;

  return classes;
}

const IconButton = ({tabCheck, isDisabled, onClick, children}) => (
  <button
    onClick={onClick}
    type="button"
    className={genClasses(tabCheck, isDisabled)}
    disabled={isDisabled}
  >
    {children}
  </button>
);

export default IconButton;