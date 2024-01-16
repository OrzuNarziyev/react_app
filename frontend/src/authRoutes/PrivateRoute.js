// import { useContext } from 'react';
// import { Navigate, Route } from 'react-router-dom';
// import { AuthContext} from './AuthContext'

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useContext(AuthContext);

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
//     />
//   );
// };

// export default ProtectedRoute;

import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated
  // const isAuthenticated = localStorage.getItem('token');
  const isAuthenticated = true;
  console.log('hello')
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;

