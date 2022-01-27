import React from 'react';
import Image from 'next/image';
import linkedin from "../public/linkedin.svg";
import insta from "../public/instagram.svg";
import github from "../public/github.svg";

function SocialMedia() {
    return (
        <div className='custom-bg shadow-lg rounded-lg p-8 mb-8 flex justify-around items-center'>
            <a target="_blank" href='https://www.linkedin.com/in/mohit-kumar-singh-128ab4217/' rel="noreferrer"><Image src={linkedin} alt="LinkedIn" width="30px" height="30px" /></a>
            <a target="_blank" href='https://github.com/mohit-kumar-singh55' rel="noreferrer"><Image src={insta} alt="Instagram" width="30px" height="30px" /></a>
            <a target="_blank" href='https://instagram/sniper.mks_55' rel="noreferrer"><Image src={github} alt="Github" width="30px" height="30px" /></a>
        </div>
    );
}

export default SocialMedia;
