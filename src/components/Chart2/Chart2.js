import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Chart2 = ({data}) => {
    return (
        <div>
            <h1>Investment vs Revenue</h1>
            <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </div>
    );
};

export default Chart2;