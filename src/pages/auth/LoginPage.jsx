import React, { useState } from 'react';
import { login } from '../../services/auth.service';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    const res = await login(credentials)
    if (res) {
      Navigate('/')
    }
  };

  return (
    <div className='w-50 container'>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleInputChange}
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          className="form-control"
          id="password"
          placeholder="Enter Password"
        />
      </div>
      <button className='btn btn-primary' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
