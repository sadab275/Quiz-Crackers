import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Barchart from '../Barchart/Barchart';

const Statistics = () => {
    const datas = useLoaderData();

    return (
        <div>
            <h4>This is Statistics</h4>
            {
                datas.data.map(singledata =>
                    <Barchart singledata={singledata}></Barchart>
                    // <p>{singledata.total}</p>
                )
            }
        </div>
    );
};

export default Statistics;