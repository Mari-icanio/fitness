
import { useState } from 'react';
import UserNavbar from './UserNavbar';

function WorkoutLogForm() {

  const [workoutData,setWorkoutData] = useState({
       workouttype:"",
       duration:"",
       intensity:"",
       date:""
  })

  const handleData=(e)=>{
      const {name,value}=e.target
      setWorkoutData((pre)=>({
        ...pre, [name] : value
      }))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(workoutData)
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
      <UserNavbar/>
    <div className='container' style={body}>
    <form className='shadow-lg p-5 mb-5 bg-body-tertiary rounded w-50' onSubmit={handleSubmit}>
        <h3 className='text-center'>Workout Log Form</h3>
           <div className="mb-3">
          <label className="form-label"><b>Workout Type</b></label>
          <input type="text" placeholder='Eg :- running, weightlifting, yoga' className="form-control"  name="workouttype" onChange={handleData} aria-describedby="emailHelp" required/>
           </div>
           <div className="mb-3">
           <label  className="form-label"><b>Duration</b></label>
          <input type="text" placeholder='In minutes' className="form-control"  name="duration" onChange={handleData}  required/>
          </div>
          <div className="mb-3">
          <label  className="form-label"><b>Intensity</b></label>
          <input type="text" placeholder='Eg:- Low, Medium, High' className="form-control"  name="intensity" onChange={handleData} aria-describedby="emailHelp" required/>
           </div>
           <div className="mb-3">
           <label  className="form-label"><b>Date</b></label>
          <input type="date" placeholder='Date' className="form-control"  name="date" onChange={handleData}  required/>
          </div>
            <button type="submit" className="btn btn-primary">Submit</button>
             </form>
           </div>
           </div>
  );
}

export default WorkoutLogForm;