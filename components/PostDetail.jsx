import React from 'react';
import Image from 'next/image';
import moment from 'moment';

function PostDetail({ post }) {
    return (
        <div className='shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-12 custom-bg'>
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <Image src={post.featuredImage.url} alt={post.title} className="object-top absolute h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" layout='fill' />
            </div>
            <div className="px-4 lg:px-0">
                <div className="flex items-center mb-8 w-full">
                    <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                        <Image src={post.author.photo.url} alt={post.author.name} height="30px" width="30px" className='align-middle rounded-full' />
                        <p className='inline align-middle ml-2 text-lg'>{post.author.name}</p>
                    </div>
                    <div className="font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="align-middle">{moment(post.createdAt).format('DD MMM YYYY')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostDetail;
