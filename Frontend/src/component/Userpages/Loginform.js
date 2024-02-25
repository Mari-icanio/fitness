import React from 'react';
import { useState } from 'react';
import MainNav from '../Mainpages/MainNav';


function Loginform() {

    const [loginData,setloginData] = useState({
        username:"",
        email:"",
        password:""
   })
 
   const handleLogin=(e)=>{
       const {name,value}=e.target
       setloginData((pre)=>({
         ...pre, [name] : value
       }))
   }
 
   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(loginData)
   }

   const container={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
    width:"100vw"

   }
  return (
    <div>
     <MainNav/>
    <div className='container bg-tertiary mx-auto mt-sm-4 mt-md-0' style={container}  >
        <div className='row g-0 mx-auto'>
            <div className='col-md-6'>
               <img style={{height:"450px",border:"50px"}} className="w-100 h-100 rounded-start-md-5" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww" alt=""/>
            </div>
            <div className='col-md-6'>  
        <form className='shadow-lg p-3 mb-2 bg-body-tertiary w-100 h-100' onSubmit={handleSubmit}>
            <div className='mx-5'>
            <h2 className='text-center'>Login Form</h2>
               <div className="mb-4 mt-5">
               <label  className="form-label"><b>Email</b></label>
              <input type="email" placeholder='Enter the Email id' className="form-control"  name="email" onChange={handleLogin} aria-describedby="emailHelp"  required/>
              </div>
               <div className="mb-3">
               <label  className="form-label"><b>Password</b></label>
              <input type="password" placeholder='Enter the Password' className="form-control"  name="password" onChange={handleLogin}  required/>
              <button type="submit" style={{width:"130px"}}  className="btn btn-primary  mt-4"><b>LOGIN</b></button>
              
              </div>
              </div>
                 </form>
               </div>
            </div>
            </div>
        </div>
  )
}

export default Loginform
