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
      <div >
        <button onClick={() => navigate("/login")} >Login</button>
        <button onClick={() => navigate("/lasd")} >Error</button>
      </div>
    </div>
  );
};

export default Home;