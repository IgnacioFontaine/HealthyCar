import './App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/navBar";
import Login from "./Components/Login/login";
import Home from "./Components/Home/home";
import Error from "./Components/Error/error";
import Settings from './Components/Settings/settings';
import NewVehicule from './Components/NewVehicule/newVehicule';
import MyVehicule from "./Components/MyVehicules/myVehicules"
import CreateAccount from './Components/CreateAccount/createAccount';

function App() {
  const location = useLocation()
  const {pathname} = location
  const showNavBar = pathname !== '/login'; 

  return (
    <div className="App">
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/newAccount" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<NewVehicule />} />
        <Route path="/myVehicules" element={<MyVehicule />} />
        <Route path="/settings" element={<Settings />}  />
        <Route path="*" element={<Error />}  />
      </Routes>
    </div>
  )
}

export default App;
