import React from "react";
import "./container.css";
import { connect } from "react-redux";
import refresh from "../../store/actions";

const Container = (props) => {
  return (
    <main className="Container">
      <header className="appName" onClick={props.refresh}>
        <span>random</span>
        <span class="material-icons">autorenew</span>
      </header>
      <div className="main">{props.children[0]}</div>
      {props.children[1]}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch(refresh()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
