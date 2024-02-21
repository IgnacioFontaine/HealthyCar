import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/navBar';

const Home = () => {
  const navigate = useNavigate()

  return (
    < div>
      <NavBar />
      <div>
        <h1>Soy el Home</h1>
      </div>
      <div>
        <h3>
          Aplicación creada para un mantenimiento eficiente de tu vehículo, al realizar en tiempo y forma el mismo logramos ser eficientes
        </h3>
      </div>
      <div >
        <button onClick={() => navigate("/login")} >Login</button>
        <button onClick={() => navigate("/lasd")} >Error</button>
      </div>
    </div>
  );
};

export default Home;