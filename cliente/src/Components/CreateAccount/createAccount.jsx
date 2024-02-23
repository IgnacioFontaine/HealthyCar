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
      </div>
    </div>
  );
};

export default CreateAccount;