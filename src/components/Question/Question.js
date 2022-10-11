import React from 'react';

const Question = ({ question }) => {
    console.log(question);
    return (
        <div>
            <div className='question'>
                <h5>This is question{question.question}</h5>
            </div>
            <div className='options'>
                {
                    question.options.map(option => <p>{option}</p>)
                }
            </div>

        </div>
    );
};

export default Question;