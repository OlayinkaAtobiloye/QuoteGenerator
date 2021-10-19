import React, { useState } from "react";
import "./container.css";
import { connect } from "react-redux";
import refresh from "../../store/actions";
import Quote from "../quote/quote";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      quotes: "this.props.quotes"
    };
  }


  static getDerivedStateFromProps(props, state) {
    if (props.quotes == state.quotes){
      return {...state, loading: true}
    }
    else{
      return {quotes: props.quotes, loading: false};
    }
    
    
  }


  setLocalState = () => {
    this.setState((prevState, props) => {
      return {...prevState, loading: true };
    });
    this.props.refresh()
  };

  render() {
    return (
      <main className="Container">
        <header className="appName" onClick={this.setLocalState}>
          <span>random</span>
          <span class="material-icons">autorenew</span>
        </header>
        {this.state.loading ? (
          <div className="main">
            <Quote>
              <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Quote>
          </div>
        ) : (
          <React.Fragment>
            <div className="main">{this.props.children[0]}</div>
            {this.props.children[1]}
          </React.Fragment>
        )}
      </main>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch(refresh()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
