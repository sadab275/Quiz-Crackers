import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const datas = useLoaderData();
    const { data } = datas;
    console.log(data);

    return (
        <div>
            <h4>This is Statistics</h4>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <LineChart width={500} height={400} data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
            {/* </ResponsiveContainer> */}
            {/* {
                datas.data.map(singledata =>
                    <Barchart singledata={singledata}></Barchart>
                    // <p>{singledata.total}</p>
                )
            } */}
        </div>
    );
};

export default Statistics;