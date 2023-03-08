import React from "react";
import data1 from './data1.json'

class Example3 extends React.Component {
  state = {
    experience: data1.Experiences,
  };

  render() {
    const { experience } = this.state;
    return (
      <div>
        <h1>Hi, Here are some Experiences:</h1>
        {experience.map((exp, index) => (
          <div key={index}>
            <h1>{exp.companyName}</h1>
            {exp.roles.map((role, i) => (
              <div key={i}>
                <p>{role.title}</p>
                <p>{role.description}</p>
                <p>{role.startDate} - {role.endDate}</p>
                <p>{role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
