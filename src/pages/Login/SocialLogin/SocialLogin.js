import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    if(user){
     navigate('/home')
    }
    let errorElement;
    if(error || error1){
      errorElement = <div>
         <p className='text-danger'> Error: {error?.message} {error1?.message}</p>
     </div>
    }
    const handleGoogle =()=>{
        signInWithGoogle()
    }
    const handleGithub = () =>{
        signInWithGithub()
    }
    return (
       <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}}  className='w-50 bg-primary'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{height:'1px'}}  className='w-50 bg-primary'></div>
            </div>
           {
            errorElement
           }
            <div>
                <button onClick={handleGoogle} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{height:'30px'}} src={google} alt="" />
                    <span className='px-2 text-white'>Google SignIn</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{height:'30px'}} src={facebook} alt="" />
                    <span className='px-2 text-white'>Facebook SignIn</span>
                </button>
                <button onClick={handleGithub} className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{height:'30px'}} src={github} alt="" />
                    <span className='px-2 text-white'>Github SignIn</span>
                </button>
            </div>
       </div>
    );
};

export default SocialLogin;