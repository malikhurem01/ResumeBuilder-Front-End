import LandingPage from './Pages/LandingPage';
import Login from './Pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import PDFEditor from './Components/Editor/PDFEditor';
import Register from './Pages/RegisterPage';
import React, { useContext } from 'react';
import services from './Services/authService';
import AuthContext from './Store/auth-context-api';
import ResumesPage from './Pages/ResumesPage';

const App = () => {
  const { userDataState } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/editor" element={<PDFEditor />} />
      <Route path="/resumes" element={<ResumesPage />} />
    </Routes>
  );
};

export default App;
