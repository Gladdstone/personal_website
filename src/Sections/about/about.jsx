import React, { Component } from 'react';

import './about.scss';

class About extends Component {

  getAge = () => {
    let today = new Date();
    let birthday = new Date('1/3/1997');
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    return m < 0 || (m === 0 && today.getDate() < birthday.getDate()) ? age-- : age;
  }

  render() {
    const age = this.getAge();

    return <div>
            <h1>About Me</h1>
            <p>Age: {age}</p>
            <p>Current Location: Rochester, NY</p>
            <p></p>
          </div>
  }

}

export default About;