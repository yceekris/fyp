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
    occupation: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit =async (event: React.FormEvent) => {
    event.preventDefault();

    try{
      const response = await axios.post('', formData);
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
              <label htmlFor="Fname">First-Name</label>
              <input type="text" name="Fname" id="Fname" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="Lname">Last-Name</label>
              <input type="text" name="Lname" id="Lname" value={formData.lastName} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="occupation">Occupation</label>
              <input type="text" name="occupation" id="occupation" value={formData.occupation} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" id="phone" value={formData.phoneNumber} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="phone">Password</label>
              <input type="password" name="pass" id="pass" value={formData.password} onChange={handleInputChange} required />
            </div>
            <div className="box">
              <label htmlFor="phone">Confirm Password</label>
              <input type="password" name="pass" id="pass" value={formData.confirmPassword} onChange={handleInputChange} required />
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
