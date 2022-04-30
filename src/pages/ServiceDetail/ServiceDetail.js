import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceId} = useParams()
   const [service]=useServiceDetail();
    return (
        <div className='w-50 mx-auto'>
            <h2>This is service Details :{service.name}</h2>
            <Link to={`/checkout/${serviceId}`}><button className='btn btn-primary'>Check Out</button></Link>
        </div>
    );
};

export default ServiceDetail;