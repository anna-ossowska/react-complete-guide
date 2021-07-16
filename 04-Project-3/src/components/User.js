import React from 'react';
import styles from './User.module.css';

const User = (props) => {
  console.log('User.js', props);

  return (
    <div className={styles['user-info']}>
      <p>
        {props.userName}
        <span>
          &nbsp;&nbsp;[ {props.age}{' '}
          {`${props.age === '1' ? 'year ' : 'years '}`}
          old ]
        </span>
      </p>
    </div>
  );
};

export default User;
