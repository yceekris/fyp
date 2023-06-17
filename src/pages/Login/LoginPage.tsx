import "./LoginPage.css";
import Nav from "../../components/Nav/Nav";
import FormContainer from "../../components/FormContainer/FormContainer";

import {useState} from 'react'
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('', formData);
      // Handle success response
      console.log(response.data);
    } catch (error) {
      // Handle error response
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <Nav />
      <FormContainer
        container_class="form-container"
        children={
          <form onSubmit={handleSubmit} className="form">
            <div className="box">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="box">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required value={formData.password} onChange={handleInputChange}/>
            </div>
            <div className="buttons">
              <input type="submit" value="Login" />
              <button type="button">Sign-Up</button>
            </div>
            <div className="more">
              <p>
                forgot password? <a href="#">Click Here</a>
              </p>
            </div>
          </form>
        }
      />
    </div>
  );
};

export default LoginPage;
