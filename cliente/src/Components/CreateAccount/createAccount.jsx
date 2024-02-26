import './createAccount.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreateAccount = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    AlertProduct(formData);
    setFormData({
          name: "",
          amount: ""
    })
  };

  return (
    <div className='container text-center rectangulo d-flex align-items-center'>
      <div>
        <h1 >HealthyCar</h1>
      </div>
      <div className="container align-content-center ">
        <form className="row g-3">
          <div className="col-auto">
            <label
              htmlFor="staticEmail2" className="visually-hidden">Email</label>
            <input
              type="text"
              name='email'
              readOnly
              className="form-control-plaintext"
              id="staticEmail2"
              value={formData.email}
              onChange={handleChange}
              placeholder='email@example.com'
            ></input>
          </div>
          <div className="col-auto">
            <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
            <input
              type="password"
              name='password'
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3" onClick={() => navigate("/home")}>Create account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;