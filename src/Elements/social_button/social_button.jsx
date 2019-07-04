import React from 'react';

import './social_button.scss';

export const SocialButton = (name, link) => (
    <div>
        <a href={link}>{name}</a>
    </div>
)