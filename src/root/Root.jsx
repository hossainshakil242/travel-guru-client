import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='montserrat-font'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;