import './App.css'
import { Route, Routes, useLocation  } from "react-router-dom";
import Login from "./Components/Login/login"
import Home from "./Components/Home/home"
import Error from "./Components/Error/error"
import NavBar from "./Components/NavBar/navBar"

function App() {
  const location = useLocation()
  const {pathname} = location
  const showNavBar = pathname !== '/login' 

  return (
    <div className="App">
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />}  />
      </Routes>
    </div>
  )
}

export default App;
