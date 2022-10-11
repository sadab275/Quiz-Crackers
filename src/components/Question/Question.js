import React from 'react';
import './Question.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
    // console.log(question);
    const { correctAnswer } = question;
    console.log(correctAnswer);

    const eyehandler = (correctAnswer) => toast(`Correct Answer is : ${correctAnswer}`, {
        position
            : 'top-center'
    });
    const btnselect = (option) => {
        if (option === correctAnswer) {
            toast("Your answer is correct", { position: 'top-center' });

        }
        else {
            toast("Your answer is incorrect", { position: 'top-center' })
        }
    };


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
                            <button onClick={() => btnselect(option)} className='btn'>{option}</button>
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