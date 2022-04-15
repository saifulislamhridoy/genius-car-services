import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
const Register = () => {
    const [agree,setAgree]=useState(false)
    const [
        createUserWithEmailAndPassword,
        user,loading,error
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate =useNavigate()
    const handleLogin =()=>{
        navigate('/login')
    }
    const handleRegister = async event =>{
        event.preventDefault();
        const name= event.target.name.value;
        const email = event.target.email.value;
        const password =event.target.password.value;
      await  createUserWithEmailAndPassword(email,password)
        await updateProfile({ displayName:name });
          navigate('/home')
    }
    return (
        <div className='register-form'>
            <h2 className='register-title'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                <input type="password" name="password" id="" placeholder='Passwoed' required/>
                <input onClick={()=> setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept terms and condition</label>
                <p>Already Have An Account? <Link to='/login' onClick={handleLogin} className='text-primary text-decoration-none'>Login Now</Link></p>

                <input disabled={!agree} className='btn btn-primary' type="submit" value="Register" />
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;