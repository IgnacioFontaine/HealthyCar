import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/navBar';
// import MyVehicules from '../MyVehicules/myVehicules';
// import NewVehicules from '../NewVehicule/newVehicule';

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
        {/* <NewVehicules></NewVehicules> */}
      </div>
    </div>
  );
};

export default Home;