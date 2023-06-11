import services from '../Services/authService';
import AuthContext from '../Store/auth-context-api';
import React, { useState, useEffect, useContext } from 'react';
const ProtectedRoute = ({ children }) => {
  const ctx = useContext(AuthContext);

  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    const authenticated = services.isAuthenticated();
    setIsAuthenticated(Boolean(authenticated && ctx.userDataState));
  }, [ctx]);

  return (
    <React.Fragment>
      {isAuthenticated ? (
        children
      ) : (
        <div>
          <h1>Unaouthorized</h1>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProtectedRoute;
