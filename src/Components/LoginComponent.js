import services from '../Services/authService';

const { useState } = require('react');

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async () => {
    await services
      .login({ email, password })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={ev => {
          setEmail(ev.target.value);
        }}
        placeholder="Email:"
      />
      <input
        type="password"
        value={password}
        onChange={ev => {
          setPassword(ev.target.value);
        }}
        placeholder="Password:"
      />
      <button onClick={handleLoginSubmit}>Login</button>
    </div>
  );
};

export default LoginComponent;
