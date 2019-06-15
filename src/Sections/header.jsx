import React from 'react';
import './header.css';

import { ArrowBounce } from '../Elements/arrow-bounce';

export const Header = () => (
    <header className="App-header">
      <h1>j o e f a r r e l l . d e v</h1>
      <div className="header-description">
        <p>
          Hi! My name is Joe, and I'm a software engineer specializing in project administration, databases, and enterprise scale web development.
        </p>
        <p>
          I enjoy working on a wide range of projects, from UI/UX, to FedRAMP compliance, all the way to statistical analysis and data science with Python.
        </p>
      </div>
      <ArrowBounce/>
    </header>
)