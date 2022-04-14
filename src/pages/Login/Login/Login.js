import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef =useRef('')
    const navigate =useNavigate()
    const handleFormSubmit =event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password)
    }
    const handleRegister = event =>{
     navigate('/register')
    }
    return (
        <div className='container w-50 mt-3'>
            <h2 className='text-primary text-center'>Please login</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>New to Genius car? <Link to='/register' onClick={handleRegister} className='text-danger text-decoration-none'>Register Now</Link></p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
           
        </div>
    );
};

export default Login;