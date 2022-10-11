import React from 'react';
import { Button, Card, CardGroup, Image } from 'react-bootstrap';
import img1 from '../../images/SkillsAssessment.jpg'
import './Topics.css'
import img2 from '../../images/react.png'
import img3 from '../../images/js.jpg'
import img4 from '../../images/csspic.jpg'
import img5 from '../../images/gitpic.jpeg'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';


const Topics = () => {
    const tests = useLoaderData();
    // console.log(tests);
    return (
        <div>
            <div className='title-container'>
                <div className='image'>
                    <Image thumbnail src={img1}></Image>
                </div>
                <div className='title-writeup'>
                    <h3>Let's see about your skills on different Languages</h3>
                    {/* {tests.data.length} */}
                </div>
            </div>
            <h4>This is Topics</h4>
            <div className='tests-container'>
                {
                    tests.data.map(test => <Topic
                        key={test.id}
                        test={test}
                    ></Topic>)
                }


            </div>
        </div>
    );
};

export default Topics;