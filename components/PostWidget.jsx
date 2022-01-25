import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import Image from 'next/image';

function PostWidget({ categories, slug }) {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
        }
        else {
            getRecentPosts().then((result) => setRelatedPosts(result));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    console.log(relatedPosts);

    return (
        <div className='custom-bg shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b border-blue-400 pb-4'>
                {slug ? "Related Posts" : "Recent Posts"}
            </h3>
            {
                relatedPosts.map((post) => (
                    <div key={post.title} className="flex items-center w-full mb-4">
                        <div className='w-16 flex-none'>
                            <Image src={post.featuredImage.url} alt={post.name} height="60px" width="60px" className='align-middle rounded-full' />
                        </div>
                        <div className="flex-grow ml-4">
                            <p className='font-xs text-gray-300'>
                                {moment(post.createdAt).format("DD MMM YYYY")}
                            </p>
                            <Link href={`/post/${post.slug}`} passHref>
                                {post.title}
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default PostWidget;
