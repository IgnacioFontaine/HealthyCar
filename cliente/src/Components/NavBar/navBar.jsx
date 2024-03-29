import "./navBar.css"
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate()
  return (
    < div>
        <nav  className='navbar navbar-expand-lg bg-body-tertiary' >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={()=>navigate("/home")}>HealthyCar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={()=>navigate("/myVehicules")}>My Vehicules</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={()=>navigate("/create")}>New Vehicule</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>navigate("/settings")}>Settings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>navigate("/")}>Logout</a>
              </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default NavBar;