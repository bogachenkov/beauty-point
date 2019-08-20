import React from 'react';

import './style.scss';

const Button = ({ children, dark, ...buttonProps }) => {
  let classes = ['btn'];
  if (dark) classes.push('dark');
  return (
    <button className={classes.join(' ')} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;