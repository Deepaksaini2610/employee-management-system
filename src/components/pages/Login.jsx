import React, { useState } from 'react'

function Login({LogDash}) {
  const [email,setEmail] = useState("")
  const [pass,setPassword] = useState("")

const handleLogin = (event) =>{
  event.preventDefault()
  // localStorage.clear()
  LogDash(email,pass)
  setEmail("")
  setPassword("")
}
  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form className="border-2 border-blue-600 flex flex-col p-16 bg-[#1c1c1c]">
        <input
          type='email'
          placeholder="enter your email or username"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="border-2 w-56 mt-5 border-black text-center h-10 rounded-lg"
          required



        />
        <input
          placeholder="enter password"
          type='password'
          className="rounded-lg border-2 w-56 mt-5 border-black text-center h-10"
          value={pass}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <button className="text-2xl mt-5 bg-blue-600 rounded-lg"
      
        onClick={handleLogin}
        >Log in</button>
      </form>
    </div>
  );
}

export default Login