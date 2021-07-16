import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = function (uName, uAge) {
    setUsersList(prev => [
      { uName, uAge, id: Math.random().toString() },
      ...prev,
    ]);
    console.log(usersList);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
