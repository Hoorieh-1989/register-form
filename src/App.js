import React from 'react';

import './App.css';
import Login from './login/Login';
import  Register from './register/Register';
import{ BrowserRouter as Router ,
Route,
Link,
Routes} from 'react-router-dom';




function App() {
  return (
    <Router>
    <ul>
        
        <li><Link to ="/">Home</Link></li>
        <li><Link to="/Register">Register</Link></li>       
        </ul>
<Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        </Routes>


   
      </Router>//symantic ellement instead of div
  );
}

export default App;


