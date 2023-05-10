import React from 'react';
import Card from './Card';
import { mockCompanyDetails } from '../constants/mock';
import Header from './Header';

const Dashboard = () => {
    return (
        <div className='
            h-screen p-10 font-inter text-xl grid gap-6
            grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
            grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr'
        >
            <div className='flex justify-start items-center col-span-1 md:col-span-2 xl:col-span-3 row-span-1'>
                <Header name={mockCompanyDetails.name}></Header>
            </div>
            <div className='col-span-1 md:col-span-2 xl:col-span-2 row-span-4'>
                <Card title="Chart" />
            </div>
            <div className='col-span-1 md:col-span-1 xl:col-span-1 row-span-1'>
                <Card title="Overview" />
            </div>
            <div className="col-span-1 md:col-span-1 xl:col-span-1 row-span-2 md:row-span-2 xl:row-span-3">
                <Card title="Details" />
            </div>
        </div>
    );
}

export default Dashboard;