import React from 'react';
import { Pie, PieChart } from 'recharts';

const Chart4 = ({data}) => {
    return (
        <div>
            <h1>Investment and Sell</h1>
            <PieChart width={500} height={400}>
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
        </div>
    );
};

export default Chart4;