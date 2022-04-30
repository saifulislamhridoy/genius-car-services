import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetail from '../../hooks/useServiceDetail';
import PageTitle from '../../shared/PageTitle/PageTitle';

const CheckOut = () => {
    const [service]=useServiceDetail()
    const [user]=useAuthState(auth)
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order={
            name:user.displayName,
            email:user.email,
            service:service.name,
            serviceId:service._id,
            address: event.target.address.value,
            phone:event.target.phone.value

        }
        axios.post('http://localhost:5000/order',order)
        .then(response => {
            const {data}=response
            if(data.insertedId){
                toast('Your order is booked!!')
                event.target.reset()
            }
            console.log(response)
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <PageTitle title='CheckOut'></PageTitle>
            <h2>Please Order:{service.name} </h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={user?.displayName} type="text" name="name" id="" placeholder='Name' readOnly disabled/>
                <br />
                <input className='w-100 mb-2' value={user?.email} type="email" name="email" id="" placeholder='Email'/>
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" id="" placeholder='Service'/>
                <br />
                <input className='w-100 mb-2' type="text" name="address" autoComplete='off' id="" placeholder='Address' required/>
                <br />
                <input className='w-100 mb-2' type="text" name="phone" id="" placeholder='Phone Number' required/>
                <br />
                <input className='btn btn-primary' type="submit" value="Order now" />
            </form>
        </div>
    );
};

export default CheckOut;