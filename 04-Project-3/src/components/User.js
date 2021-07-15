import React from 'react';
import styles from './User.module.css';

const User = (props) => {
  return (
    <div className="card">
      <div className={styles['user-info']}>
        <p>
          John <span>[ 30 years old ]</span>
        </p>
      </div>
      <div className={styles['user-info']}>
        <p>
          Jane <span>[ 21 years old ]</span>
        </p>
      </div>
    </div>
  );
};

export default User;
