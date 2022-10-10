import React from 'react';
import { Button } from 'react-bootstrap';
import './Topic.css'

const Topic = ({ test }) => {
    const { name, logo } = test;
    return (
        <div className='card-container'>

            <div class="card">
                <img src={logo} alt="" />

                <div class="container">
                    <h4><b>{name}</b></h4>
                    <p><small>{test.length}</small></p>
                    <Button className='btn'>Start Practice</Button>
                </div>
            </div>




        </div>

    );
};

export default Topic;