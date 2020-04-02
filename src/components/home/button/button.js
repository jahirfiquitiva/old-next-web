import React from 'react';
import styles from './button.module.css';

const Button = () => (
  <button
    type={'button'}
    // Note how the "error" class is accessed as a property on the imported
    // `styles` object.
    className={`button ${styles.error}`}
  >
    Destroy
  </button>
);
export default Button;
