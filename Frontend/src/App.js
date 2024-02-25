// import WorkoutLogForm from './component/WorkoutLogForm';
// import GoalSettingform from './component/GoalSettingform';
import {Route,Routes} from 'react-router-dom';

import Loginform from './component/Userpages/Loginform';
import Signupform from './component/Userpages/Signupform';
import Home from './component/Mainpages/Home';
import WorkoutlogMenu from './component/Userpages/WorkoutlogMenu';
import UserHome from './component/Userpages/UserHome';
import Exercisesadd from './component/Adminpages/Exerciseadd';
import AdminHome from './component/Adminpages/AdminHome';
import Exercisedetailstable from './component/Adminpages/Exercisedetailstable';



function App() {
  return (
    <div>
       <div className="w-100">
       
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userhome" element={<UserHome/>} />
          <Route path="login" element={<Loginform/>} />
          <Route path="signup" element={<Signupform/>} />
          <Route path="workoutlog" element={<WorkoutlogMenu/>} />
          <Route path="exerciseadd" element={<Exercisesadd/>} />
          <Route path="adminhome" element={<AdminHome/>} />
          <Route path="exercisetable" element={<Exercisedetailstable/>} />

          
         </Routes>
       </div>
    </div>
  );
}

export default App;
