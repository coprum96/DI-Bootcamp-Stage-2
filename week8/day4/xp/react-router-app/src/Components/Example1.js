import React from "react";
import data1 from './data1.json'

class Example1 extends React.Component {
  state = {
    socialMedias: data1.SocialMedias,
  };

  render() {
    const { socialMedias } = this.state;
    return (
      <div>
        <h1>Hi, Here are some Social Medias:</h1>
        {socialMedias.map((socialMedia, index) => (
          <div key={index}>
            <h1>{socialMedia}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default Example1;

