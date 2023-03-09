import React from "react";

class QuoteAndName extends React.Component {
  componentDidMount() {
    this.updateBackgroundColor();
  }

  componentDidUpdate() {
    this.updateBackgroundColor();
  }

  updateBackgroundColor() {
    const randomColor = this.props.displayColor();
    document.documentElement.style.backgroundColor = randomColor;
  }

  render() {
    const { quote, name, handleClick, displayColor } = this.props;
    const randomColor = displayColor();

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div className="fadeIn" style={{ color: randomColor }}>
          <h1 id="quote">"{quote}"</h1>
          <h5 id="name">-{name ? name : "Unknown"}-</h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={handleClick}
        >
          New quote
        </button>
      </div>
    );
  }
}

export default QuoteAndName;
