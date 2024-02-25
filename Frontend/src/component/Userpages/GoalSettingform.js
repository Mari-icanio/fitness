import React, { useState } from 'react'



function GoalSettingform() {

    const [goalData,setWorkoutData] = useState({
        goaltype:"",
        target:"",
        progress:"",
        deadline:"",
        status:""
   })
 
   const handleData=(e)=>{
       const {name,value}=e.target
       setWorkoutData((pre)=>({
         ...pre, [name] : value
       }))
   }
 
   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(goalData)
   }

    const body={
        height:'90vh',
        width:'100vw',
        display:'flex',
        justifyContent:"center",
        alignItems:'center'
    }
  return (
    <div>
         <div className='container' style={body}>
    <form className='shadow-lg p-5 mb-5 bg-body-tertiary rounded w-50' onSubmit={handleSubmit}>
        <h2 className='text-center'>Goal Setting Form</h2>
           <div className="mb-3">
          <label className="form-label"><b>Goal Type</b></label>
          <input type="text" placeholder='Eg :- weight loss, muscle gain, running distance' className="form-control"  name="goaltype" onChange={handleData} aria-describedby="emailHelp" required/>
           </div>
           <div className="mb-3">
           <label  className="form-label"><b>Target</b></label>
          <input type="text" placeholder='Eg :- target weight, target distance' className="form-control"  name="target" onChange={handleData}  required/>
          </div>
          <div className="mb-3">
          <label  className="form-label"><b>Progress</b></label>
          <input type="text" placeholder='Eg:- current Progress towards the goal in number' className="form-control"  name="progress" onChange={handleData} aria-describedby="emailHelp" required/>
           </div>
           <div className="mb-3">
           <label  className="form-label"><b>Goal Deadline</b></label>
          <input type="date" placeholder='Date' className="form-control"  name="deadline" onChange={handleData}  required/>
          </div>
          <div className="mb-3">
          <label  className="form-label"><b>Current Status</b></label>
           <textarea className="form-control" id="exampleFormControlTextarea1" name="status" rows="3" onChange={handleData}></textarea>
          </div>
            <button type="submit" className="btn btn-primary">Submit</button>
             </form>
           </div>
    </div>
  )
}

export default GoalSettingform
