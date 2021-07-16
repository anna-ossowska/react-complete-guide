import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Card from './UI/Card';

const DUMMY_DATA = [
  {
    userName: 'John',
    age: '30',
    id: '1',
  },
  {
    userName: 'Jane',
    age: '21',
    id: '2',
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_DATA);

  const addUserHandler = function (user) {
    setUsers((prev) => [user, ...prev]);
  };

  console.log('App.js', users);

  return (
    <div>
      <Card>
        <UserForm onAddUser={addUserHandler} />
      </Card>

      <Card>
        <UserList users={users} />
      </Card>
    </div>
  );
}

export default App;
