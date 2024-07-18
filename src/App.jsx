import { Route, Routes } from "react-router"
import Header from "./Components/Header/Header"
import MainContainer from "./Container/MainContainer/MainContainer"
import Create from "./Components/Create/Create"
import Home from "./Components/Home/Home"
import Edit from "./Components/Edit/Edit"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"


function App() {
  
  return (
    <>
      <Header/>
      

      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path="/create" element={ <Create/>}/>
           <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>

    </>
  )
}

export default App
