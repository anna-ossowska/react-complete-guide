import React from 'react';
import styles from './UserList.module.css';
import Card from '../UI/Card';

const UserList = props => {
  console.log(props.users);
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map(user => (
          <li key={user.id}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
