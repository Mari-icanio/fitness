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
    height:"80vh",
    width:"100vw",
    margin:"55px"

   }
  return (
    <div>
      <MainNav/>
    <div className='container bg-tertiary mx-auto ' style={container}  >
        <div className='row g-0'>
        <div className='col-md-6 order-xs-1 order-sm-1 order-md-2 '>
               <img style={{height:"450px",border:"50px"}} className="w-100  h-100 rounded-start-md-5" src="https://t3.ftcdn.net/jpg/04/94/01/92/360_F_494019215_jZTW9skIs18uoKjZinCbxOflLhJm14iy.jpg" alt=""/>
            </div>
           
            <div className='col-md-6 order-xs-2 order-sm-2 order-md-1'>  
        <form className='shadow-lg p-3 bg-body-tertiary  w-100 h-100' onSubmit={handleSubmit}>
            <div className='mx-5'>
            <h2 className='text-center'>SignUp Form</h2>
               <div className="mb-3 mt-3">
              <label  className="form-label"><b>Username</b></label>
              <input type="text" placeholder='Enter the Username' className="form-control" name="username" onChange={handleLogin}  required/>
               </div>
               <div className="mb-3">
               <label  className="form-label"><b>Email</b></label>
              <input type="email" placeholder='Enter the Email id' className="form-control"  name="email" onChange={handleLogin} aria-describedby="emailHelp"  required/>
              </div>
               <div className="mb-3">
               <label  className="form-label"><b>Mobile No.</b></label>
              <input type="text" placeholder='Enter the Mobile No.' className="form-control"  name="password" onChange={handleLogin}  required/>
              </div>
              <div className="mb-3">
               <label  className="form-label"><b>Password</b></label>
              <input type="password" placeholder='Enter the Password' className="form-control"  name="password" onChange={handleLogin}  required/>
              <button type="submit" style={{width:"130px"}}  className="btn btn-warning mt-4"><b>SIGN UP</b></button>
              
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
