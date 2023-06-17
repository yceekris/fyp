import FormContainer from "../../components/FormContainer/FormContainer";
import Nav from "../../components/Nav/Nav";
import './Registation.css'

import { useState } from "react";
import axios from 'axios'

const Registration = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    country: '',
    phoneNumber: '',
    password: '',
    confirm_Password: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit =async (event: React.FormEvent) => {
    event.preventDefault();
    // console.log(formData)

    try{
      const response = await axios.post('https://localhost:7085/api/users/sign-up', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="registration">
      <Nav />
      <FormContainer
        container_class="form-container"
        children={
          <form onSubmit={handleSubmit} className="form" id="form">
            <div className="box">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input type="date" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="gender">Gender</label>
              <input type="text" name="gender" id="gender" value={formData.gender} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="country">Country</label>
              <input type="text" name="country" id="country" value={formData.country} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="confirm_Password">Confirm Password</label>
              <input type="password" name="confirm_Password" id="confirm_Password" value={formData.confirm_Password} onChange={handleInputChange} required />
            </div>
            <div className="buttons">
              <button type="submit" id="next">
                Register
              </button>
              <button type="button">Login</button>
            </div>
          </form>
        }
      />
    </div>
  );
};

export default Registration;
