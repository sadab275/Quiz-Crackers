import React from 'react';

const Question = ({ question }) => {
    console.log(question);
    return (
        <div>
            <h2>This is question{question.question}</h2>
        </div>
    );
};

export default Question;