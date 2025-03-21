import { useState } from 'react'
import './App.css'
import Home from "./components/Home"
import AdminDashBoard from "./components/pages/AdminDashBoard"
import EmpDashBoard from "./components/pages/EmpDashBoard"
import Login from "./components/pages/Login"
// import { admin } from './components/api/Admin'

const App = () => {
  const [user,setUser] = useState(null)
  // const [AdminPage,setAdminPage] = useState("") 
  const LogDash = (email,password) =>{
    
    if(email == "deepak@gmail.com" && password == '123'){
      // employee dashboard
      setUser("EmpDashBoard")
    }
    else if(email == 'jit@gmail.com' && password == '123'){
    //  admin dashboard
      setUser('admin')
    }
    else{
      alert("Invalid crendentials")
    }


  }

  return (
    <>
      {!user ? <Login LogDash={LogDash}/> :(user == 'EmpDashBoard') ? ( <EmpDashBoard/>) : (<AdminDashBoard/>)}
    
    </>
  );
}

export default App