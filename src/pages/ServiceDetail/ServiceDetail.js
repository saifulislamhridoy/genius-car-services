import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    const [service,setService]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h2>This is service Details {service.name}</h2>
            <Link to='/checkout'><button>Check Out</button></Link>
        </div>
    );
};

export default ServiceDetail;