import './App.css'
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login"
import Home from "./Components/Home"
import Error from "./Components/Error"

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />}  />
      </Routes>
    </div>
  )
}

export default App
