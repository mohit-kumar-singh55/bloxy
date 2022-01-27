import Image from 'next/image';
import React from 'react';

function SocialMedia() {
    return (
        <div className='custom-bg shadow-lg rounded-lg p-8 mb-8 flex justify-around items-center'>
            <a target="_blank" href='https://www.linkedin.com/in/mohit-kumar-singh-128ab4217/' rel="noreferrer"><Image src="/../public/linkedin.svg" alt="LinkedIn" width="30px" height="30px" className="custom_social" /></a>
            <a target="_blank" href='https://github.com/mohit-kumar-singh55' rel="noreferrer"><Image src="/../public/instagram.svg" alt="Instagram" width="30px" height="30px" className="custom_social" /></a>
            <a target="_blank" href='https://instag30m.c className="custom_social"om/sniper.mks_55' rel="noreferrer"><Image src="/../public/github.svg" alt="Github" width="30px" height="30px" className="custom_social" /></a>
        </div>
    );
}

export default SocialMedia;
