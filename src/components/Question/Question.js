import React from 'react';
import './Question.css';

const Question = ({ question }) => {
    console.log(question);
    return (
        <div className='question-container'>
            <div className='question'>
                <h5>{question.question}</h5>
            </div>
            <div className='options'>
                {
                    question.options.map(option =>
                        <div className='options'>
                            <button className='btn'>{option}</button>
                            {/* <p>{option}</p> */}
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Question;