import './createAccount.css'
import { useNavigate } from 'react-router-dom';

const CreateAccount= () => {
  const navigate = useNavigate();
  return (
    <div className='container text-center rectangulo d-flex align-items-center'>
      <div>
        <h1 >HealthyCar</h1>
      </div>
      <div className="container align-content-center ">
        <form className="row g-3">
          <div className="col-auto">
            <label className="staticEmail2" >Email</label>
            <input type="text"  className="form-control-plaintext" id="staticEmail2" value="email@example.com"></input>
          </div>
          <div className="col-auto">
            <label className="inputPassword2" >Password</label>
            <input type="password" className="form-control" id="inputPassword2" placeholder="Password"></input>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;