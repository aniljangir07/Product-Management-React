import React, { useState } from 'react';
import { signup } from '../../services/auth.service';
import { Navigate } from 'react-router-dom';

const SignupPage = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    mobileNumber: "",
    firstName: "",
    lastName: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignup = async () => {
    console.log("Signup:", data);
    const res = await signup(data)
    if(res){
      Navigate('/login')
    }
  };

  return (
    <div className='w-50 container'>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">Username</label>
        <input 
          type="text" 
          className="form-control" 
          id="userName" 
          name="userName" 
          value={data.userName} 
          onChange={handleInputChange} 
          placeholder="Enter username" 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
          type="text" 
          className="form-control" 
          id="email" 
          name="email" 
          value={data.email} 
          onChange={handleInputChange} 
          placeholder="Enter email" 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mobileNumber" className="form-label">Contact Number</label>
        <input 
          type="text" 
          className="form-control" 
          id="mobileNumber" 
          name="mobileNumber" 
          value={data.mobileNumber} 
          onChange={handleInputChange} 
          placeholder="Enter Contact Number" 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="firstName" 
          name="firstName" 
          value={data.firstName} 
          onChange={handleInputChange} 
          placeholder="Enter First Name" 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="lastName" 
          name="lastName" 
          value={data.lastName} 
          onChange={handleInputChange} 
          placeholder="Enter Last Name" 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="password" 
          name="password" 
          value={data.password} 
          onChange={handleInputChange} 
          placeholder="Enter Password" 
        />
      </div>
      <button className='btn btn-primary' onClick={handleSignup}>Signup</button>
    </div> 
  );
};

export default SignupPage;
