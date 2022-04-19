import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Snipper from '../../shared/Snipper/Snipper';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const [sendEmailVerification, sending, error] = useSendEmailVerification(
    auth)
  const location = useLocation();
  if (loading) {
    return <Snipper></Snipper>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return <div>
      <div>
      <h2>Your Email Address not Verified</h2>
      <h3>Please Verify Your Email</h3>
      <button className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
       Send Verify email
      </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  }
  return children;
};

export default RequireAuth;