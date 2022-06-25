import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/jose-sarmiento" target="_blank" rel="noreferrer">
      <BsGithub />
    </a>
    <a href="https://www.facebook.com/go0nf/" target="_blank" rel="noreferrer">
      <FaFacebookF />
    </a>
    <a href="https://www.linkedin.com/in/jose-sarmiento-37518a243/" target="_blank" rel="noreferrer">
      <BsLinkedin />
    </a>
  </div>
);

export default SocialMedia;
