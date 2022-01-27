import Image from 'next/image';
import React from 'react';

function Author({ author }) {
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
            <div className="absolute left-0 right-0 -top-14">
                <Image src={author.photo.url} unoptimized alt="MKS" width="100px" height="100px" className='align-middle rounded-full' />
            </div>
            <h3 className="my-4 text-xl font-bold custom-mks">{author.name}</h3>
            <p className="text-lg">{author.bio}</p>
        </div>
    );
}

export default Author;
