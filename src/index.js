import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './Store/auth-context-api';
import services from './Services/authService';

const initialize = async () => {
  let token = JSON.parse(localStorage.getItem('user_jwt'));
  let response,
    user = null;
  if (token) {
    try {
      response = await services.currentUser(token);
      user = response.data.data;
    } catch (err) {
      localStorage.removeItem('user_jwt');
    }
  } else {
    user = null;
  }
  console.log(user);
  return user;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const startApplication = user => {
  root.render(
    <AuthContextProvider userData={user}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

initialize().then(startApplication);
