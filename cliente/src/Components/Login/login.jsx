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
    console.log("Usuario creado:",formData);
    setFormData({
          name: "",
          password: ""
    })
  };

  return (
    <div className='container text-center rectangulo d-flex align-items-center'>
      <div>
        <h1 >HealthyCar</h1>
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
          <div className="col-auto">
            <button type="submit"
              className="btn btn-primary mb-3"
            >Login</button>
          </div>
        </form>
        <div className="container">
          <button onClick={() => navigate("/home")}>Login</button>
          <button onClick={() => navigate("/newAccount")}>Create account</button>
          <button>Recover password</button>
        </div>
      </div>
    </div>
  );
};

export default Login;