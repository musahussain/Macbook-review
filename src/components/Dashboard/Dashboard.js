import React from 'react';
import useData from '../../hooks/useData';
import Chart1 from '../Chart1/Chart1';
import Chart2 from '../Chart2/Chart2';
import Chart3 from '../Chart3/Chart3';
import Chart4 from '../Chart4/Chart4';
import './Dashboard.css';

const Dashboard = () => {
    const [data] = useData();
    return (
        <div className='chart-container'>
            <Chart1 data={data}></Chart1>
            <Chart2 data={data}></Chart2>
            <Chart3 data={data}></Chart3>
            <Chart4 data={data}></Chart4>
        </div>
    );
};

export default Dashboard;