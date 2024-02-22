import './App.css'
import { Route, Routes, useLocation  } from "react-router-dom";
import Login from "./Components/Login/login"
import Home from "./Components/Home/home"
import Error from "./Components/Error/error"

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />}  />
      </Routes>
    </div>
  )
}

export default App
