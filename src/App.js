import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react';




function App() {

const [toggle, setToggle]=useState(true)
const Toggle=()=>{
  setToggle(!toggle)
}

  return (
   
    <div className="container-fluid bg-secondary min-vh-100 App">
      <div className='row'>
       { toggle && 
       <div className='col-2  bg-white vh-100 position-fixed'>
      <Navbar />
        </div>}

        
        { toggle &&<div className='col-4 col-md-2'>

        </div>}
        <div className='col '>
        <Home Toggle={Toggle}/>
        </div>
      </div>
      {/* <h1>Student Teacher Management dashboard</h1> */}

<div>
{/* <List/> */}
</div>

      
    </div>
    
  );
}

export default App;
