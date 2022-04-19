import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Snipper from '../../../shared/Snipper/Snipper';
import PageTitle from '../../../shared/PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const [signInWithEmailAndPassword, user,error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (user) {
        navigate(from, { replace: true })
    }
    let elementError;
   if(error){
    elementError = <p>Error: {error?.message}</p>
   }
   if(sending){
       return <Snipper></Snipper>
   }
    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const handleResetPass = async () =>{
        const email = emailRef.current.value;
       if(email){
        await sendPasswordResetEmail(email)
        toast('Sent email');
       }
       else{
           toast('Please enter your email')
       }
    }
    const handleRegister = () => {
        navigate('/register')
    }
    return (
        <div className='container w-50 mt-3'>
            <PageTitle title='Login'></PageTitle>
            <h2 className='text-primary text-center'>Please login</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {
                    elementError
                }
                  <p>New to Genius car? <Link to='/register' onClick={handleRegister} className='text-primary text-decoration-none'>Register Now</Link></p>
                <p>Forget Password? <Link to='' onClick={handleResetPass} className=' text-primary text-decoration-none'>Reset password</Link></p>
                <Button className='d-block mx-auto w-50' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
         <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;