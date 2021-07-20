import React from 'react';

// Creating a Context object
// When React renders a component that subscribes to this object, it will read the current context value from the closest matching Provider above it in the tree.
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
