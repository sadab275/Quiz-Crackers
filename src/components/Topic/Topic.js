import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ test }) => {
    const { id, name, logo } = test;
    return (
        <div className='card-container'>

            <div className="card">
                <img src={logo} alt="" />

                <div className="container">
                    <h4><b>{name}</b></h4>
                    <p><small>{test.length}</small></p>
                    <Link to={`/topic/${id}`}>
                        <Button className='btn'>Start Practice</Button>
                    </Link>

                </div>
            </div>




        </div>

    );
};

export default Topic;