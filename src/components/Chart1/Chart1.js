import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = ({data}) => {
    return (
        <div>
          <h1>Month wise sell</h1>
            <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        </LineChart>
        </div>
    );
};

export default Charts;