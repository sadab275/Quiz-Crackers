import React from 'react';
import './Question.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
    // console.log(question);
    const { correctAnswer } = question;
    console.log(correctAnswer);

    const eyehandler = (correctAnswer) => toast(`${correctAnswer}`, {
        position
            : 'top-center'
    });


    return (
        <div className='question-container'>
            <div className='question'>
                <h5>{question.question}</h5>
                <EyeIcon onClick={() => eyehandler(correctAnswer)} className=" h-1 w-1text-blue-500 eye" />
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
            <ToastContainer />
        </div>
    );
};

export default Question;