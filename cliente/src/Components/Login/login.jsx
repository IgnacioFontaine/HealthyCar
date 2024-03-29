import './login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login:",formData);
    setFormData({
          email: "",
          password: ""
    })
  };

  return (
    <div className='container text-center rectangulo d-flex align-items-center'>
      <div>
        <h1 className='title'>Login</h1>
      </div>
      <div className="container align-content-center ">
        <form className="row g-3 form_create" onSubmit={handleSubmit} >
          <div className="col-auto d-flex flex-direction-colum">
            <label
              htmlFor="staticEmail2" className="visually-hidden">Email</label>
            <input
              type="text"
              name='email'
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
          <div className="col-auto buttons">
            <button type="submit"
              className="btn btn-primary m-1"
            >Login</button>
            <button className="btn btn-primary m-1" onClick={() => navigate("/newAccount")}>Create account</button>
          <button className="btn btn-primary m-1 ">Recover password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;