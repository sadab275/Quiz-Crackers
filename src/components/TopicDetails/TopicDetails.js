import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './TopicDetails.css'

const TopicDetails = () => {
    const ques = useLoaderData();
    const { name, questions } = ques.data;
    // console.log(ques);
    return (
        <div>
            <h2 className='topic-name'>Quiz of {name}</h2>
            {
                questions.map(question =>
                    <Question
                        key={question.id}
                        question={question}
                    ></Question>
                )
            }
        </div>
    );
};

export default TopicDetails;