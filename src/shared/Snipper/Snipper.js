import React from 'react';
import { Spinner } from 'react-bootstrap';

const Snipper = () => {
    return (
        <div style={{height:'300px'}} className="d-flex justify-content-center align-items-center">
             <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Snipper;