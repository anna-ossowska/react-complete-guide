import React, { useState } from 'react';
import './App.css';
import User from './components/User';
import UserForm from './components/UserForm';
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
  const [users, setUsers] = useState([]);

  const addUserHandler = function (user) {
    setUsers((prev) => [user, ...prev]);
  };

  console.log(users);
  return (
    <div>
      <Card>
        <UserForm onAddUser={addUserHandler} />
      </Card>

      <Card>
        <User />
      </Card>
    </div>
  );
}

export default App;
