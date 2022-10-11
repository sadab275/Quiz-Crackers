import React from 'react';
import './Question.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ question }) => {
    // console.log(question);
    return (
        <div className='question-container'>
            <div className='question'>
                <h5>{question.question}</h5>
                <EyeIcon className="h-2 w-2 text-blue-500 eye" />
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