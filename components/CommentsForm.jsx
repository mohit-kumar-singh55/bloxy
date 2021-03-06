import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from "../services";

function CommentsForm({ slug }) {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem("name");
        emailEl.current.value = window.localStorage.getItem("email");
    }, []);


    const handleCommentSubmission = () => {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if (!comment || !name || !email) {
            setError(true);
            return;
        }

        const commentObj = { comment, name, email, slug };

        if (storeData) {
            window.localStorage.setItem("name", name);
            window.localStorage.setItem("email", email);
        }
        else {
            window.localStorage.removeItem("name", name);
            window.localStorage.removeItem("email", email);
        }

        submitComment(commentObj).then((res) => {
            setShowSuccessMessage(true)
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 2000);
        });
    }

    return (
        <div className='custom-bg shadow-lg rounded-lg p-8 pb-12 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Leave a Reply</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea
                    ref={commentEl}
                    className="p-4 resize-none outline-none rounded-lg w-full focus:ring-2 focus:ring-gray-200 bg-gray-300 text-gray-900"
                    placeholder='Comment'
                    name="comment" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    ref={nameEl}
                    className="py-2 px-4 outline-none rounded-lg w-full focus:ring-2 focus:ring-gray-200 bg-gray-300 text-gray-900"
                    placeholder='Name'
                    name="name" />
                <input
                    type="email"
                    ref={emailEl}
                    className="py-2 px-4 outline-none rounded-lg w-full focus:ring-2 focus:ring-gray-200 bg-gray-300 text-gray-900"
                    placeholder='Email'
                    name="email" />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input type="checkbox" ref={storeDataEl} id="storeData" name="storeData" value="true" />
                    <label htmlFor="storeData" className='text-gray-500 cursor-pointer ml-2' >Save my name and email for next time I comment.</label>
                </div>
            </div>
            {error && <p className='text-xs text-red-500'>All fields are required.</p>}
            <div className="mt-8">
                <button type='button' onClick={handleCommentSubmission} className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg rounded-full px-8 py-3">
                    Add Comment
                </button>
                {showSuccessMessage && <span className='text-xl font-semibold float-right mt-3 text-green-500'>Comment submitted for review.</span>}
            </div>
        </div>
    );
}

export default CommentsForm;
