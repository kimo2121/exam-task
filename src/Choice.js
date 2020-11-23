import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { setChosenAnswer } from "./redux/app/app.actions";

const Choice = ({ setChosenAnswer, choice }) => {
  return (
    <div className="choices" onClick={() => setChosenAnswer(choice)}>
      {choice.name}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setChosenAnswer: (choice) => dispatch(setChosenAnswer(choice)),
});

export default connect(null, mapDispatchToProps)(Choice);
