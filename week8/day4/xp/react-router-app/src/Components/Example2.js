import React from "react";
import data1 from './data1.json'

class Example1 extends React.Component {
  state = {
    skills: data1.Skills,
  };

  render() {
    const { skills } = this.state;
    return (
      <div>
        <h1>Skills</h1>
        {skills.map((skill, index) => (
          <div key={index}>
            <h2>{skill.Area}</h2>
            <ul>
              {skill.SkillSet.map((skillSet, index) => (
                <li key={index}>{skillSet.Name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example1;