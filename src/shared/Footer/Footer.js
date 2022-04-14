import React from 'react';

const Footer = () => {
    const date = new Date()
    let year = date.getFullYear()
    return (
        <div className='text-center pt-4'>
            <p>Copyright &copy; {year} All Right reserved </p>
        </div>
    );
};

export default Footer;