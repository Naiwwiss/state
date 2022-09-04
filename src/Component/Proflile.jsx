import './style.css'
import React, {useState} from 'react'

function Profile() {
    const [name,setName]=useState('wissem');
    const [job,setJob]=useState('student');
    const [profession,setProfession]=useState('education is not just about  going to school and getting a degree .it s about widening your knowledge and absorbing the truth about lif.');
    const handleName=()=>{
      alert(name);
    }
    return (
    <div className="App"> 
          <div className='card'>
        <div className='upper-container'>
          <div className='image-container'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRj0Zfe95v6mgzswrPMLebtxWExTECHN94Nw&usqp=CAU' alt='' height="100px" width="100px"/>
          </div>
        </div>
        <div className='lower-container'>
          <h3>{name}</h3>
          <h4>{job}</h4>
          <p>{profession}</p>
          <button onClick={handleName}>My Name</button>
        </div>    
      </div>
    </div>

  );
}
export default Profile;