import React, { Component } from "react";
import "./quote.css";
import { connect } from "react-redux";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:
        "“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”",
    };
  }

  render() {
    return <div className="quote">{this.props.children}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch({ type: "REFRESH" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
