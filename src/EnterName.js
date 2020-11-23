import React from "react";
import { connect } from "react-redux";
import { startExam, inputChange } from "./redux/app/app.actions";
const EnterName = ({ inputName, startExam, inputChange }) => {
  return (
    <div className="enter-name">
      <h1>Welcome To Class Exam</h1>
      <input
        placeholder="Enter Your Name"
        className="input"
        value={inputName}
        onChange={inputChange}
        type="text"
      />
      <br />
      <button
        className="start-exam brown"
        onClick={startExam}
        disabled={inputName.length < 1}
      >
        START EXAM
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startExam: () => dispatch(startExam()),
  inputChange: (event) => dispatch(inputChange(event)),
});
export default connect(null, mapDispatchToProps)(EnterName);
