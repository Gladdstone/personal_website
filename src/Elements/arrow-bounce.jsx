import React from 'react';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './arrow-bounce.css';

export const ArrowBounce = (link) => (
  <div class="arrow bounce">
    <span>Scroll Down</span><br/>
    <a href={link}><FontAwesomeIcon icon={faArrowDown} /></a>
  </div>
)