import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicDetails = () => {
    const ques = useLoaderData();
    const { name, questions } = ques.data;
    console.log(ques);
    return (
        <div>
            <h2>Quiz of {name}</h2>
            {
                questions.map(question =>
                    <Question
                        question={question}
                    ></Question>
                )
            }
        </div>
    );
};

export default TopicDetails;