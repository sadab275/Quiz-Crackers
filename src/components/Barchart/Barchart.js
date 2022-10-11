import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Barchart = ({ singledata }) => {
    console.log(singledata);
    return (
        <div>
            {/* <p>This is Barchart{singledata.total}</p> */}
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <LineChart width={500} height={400} data={singledata.total}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Barchart;