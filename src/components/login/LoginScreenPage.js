import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import './LoginScreenPage.scss';
import { useHistory } from 'react-router-dom';

const LoginScreenPage = () => {
const[difficultyLevel, setDifficultyLevel] = useState(1);
const[username, setusername] = useState('');
const[usernameError, setUsernameError] = useState('');
const history = useHistory();

const handleLoginFormSubmit = (e)=>{
    if(!username){
        setUsernameError('Name is required*');
        return;
    }
    console.log('difficultyLevel', difficultyLevel);
    console.log('username', username);
    history.push("/dashboard");
};

    return ( <div className="login-screen-page d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-4 text-center">
        <div className="text-primary ">
            <img src={require('../../assets/images/icon_awesome-keyboard.svg')} alt="key-board" width= "200"  height= "200" />
            <h1 className="mb-1">fast fingers</h1>
            <p className="mb-4">the ultimate typing game</p>
        </div>
        <div>
            <div className="mb-10">
            <div className="form-group">
            <input className="form-control" placeholder="TYPE YOUR NAME" value={username} onChange={(e)=>setusername(e.currentTarget.value)} />
            {usernameError && (!username && <div className="text-primary text-left mt-1 ">{usernameError}</div>)}
            </div>
            <div className="form-group">
            <select className="form-control" value={difficultyLevel} onChange={(e)=>setDifficultyLevel(e.currentTarget.value)}>
  <option value={1}>EASY</option>
  <option value={2}>MEDIUM</option>
  <option  value={3}>HARD</option>
</select>
            </div>
            </div>
            <h5 className="text-primary d-inline-block" role="button" onClick={handleLoginFormSubmit}><FontAwesomeIcon icon={faPlay}  />&nbsp; START GAME</h5>
        </div>
        </div>
    </div> );
}
 
export default LoginScreenPage;