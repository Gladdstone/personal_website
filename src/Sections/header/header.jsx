import React from 'react';

import { ArrowBounce } from '../../Elements/arrow-bounce/arrow-bounce';
import joe from '../../assets/joe.jpg';

import './header.scss';

export const Header = () => (
    <header className="App-header">
      <h1>j o e f a r r e l l . d e v</h1>
      <div className="header-description">
        <p>
          Hi! My name is Joe Farrell, and I'm a software engineer specializing in project administration, databases, and enterprise scale web development.
        </p>
        <p>
          I enjoy working on a wide range of projects, from UI/UX, to FedRAMP compliance, all the way to statistical analysis and data science with Python.
        </p>
        <img src={joe} alt="Failed to load"/>
        <hr/>
      </div>
      <ArrowBounce/>
    </header>
)