import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,img,name,description,price} = service;
    const navigate =useNavigate()
    const navigateToServiseDetail = id =>{
          navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiseDetail(id)} className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;