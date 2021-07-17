import React from 'react';
import styles from './Modal.module.css';
import Button from '../UI/Button';

const Modal = (props) => {
  return (
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles['modal__header']}>
          <p>Invalid input</p>
        </div>
        <div className={styles['modal__msg']}>
          <p>Please enter a valid input</p>
        </div>
        <div className={styles['modal__close']}>
          <Button type="button">OK</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
