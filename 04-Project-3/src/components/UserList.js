import React from 'react';
import Card from '../UI/Card';
import User from './User';

const UserList = (props) => {
  console.log(props.users);

  return (
    <Card>
      {props.users.map((user) => {
        return (
          <User userName={user.userName} age={user.age} key={user.id}></User>
        );
      })}
    </Card>
  );
};

export default UserList;
