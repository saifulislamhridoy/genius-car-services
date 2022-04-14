import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate =useNavigate()
    const handleLogin =()=>{
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name= event.target.name.value;
        const email = event.target.email.value;
        const password =event.target.password.value;
        createUserWithEmailAndPassword(email,password)
    }
    return (
        <div className='register-form'>
            <h2 className='register-title'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required/>
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                <input type="password" name="password" id="" placeholder='Passwoed' required/>
                <p>Already Have An Account? <Link to='/login' onClick={handleLogin} className='text-danger text-decoration-none'>Login Now</Link></p>

                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;