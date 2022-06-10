import React from 'react';
import { BsGithub, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsWhatsapp />
    </div>
  </div>
);

export default SocialMedia;
