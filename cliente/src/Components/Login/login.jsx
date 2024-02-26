import './login.css'
import { useNavigate } from 'react-router-dom';

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
        <div className='seccion_form'>
          <h2>User: </h2>
          <input aria-label=" You User..."></input>
        </div>
        <div className='seccion_form'>
          <h2>Password:</h2>
          <input type="password" aria-label=" You Password..."></input>
        </div>
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