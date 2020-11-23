import "./App.css";
import Choice from "./Choice";
import { connect } from "react-redux";
import {
  setCurrentQuestion,
  setScore,
  resetExam,
} from "./redux/app/app.actions";
import EnterName from "./EnterName";

function App({
  resetExam,
  inputName,
  user,
  index,
  currentQuestion,
  setCurrentQuestion,
  setScore,
  score,
  examFinished,
}) {
  return (
    <div>
      {!user ? (
        <EnterName inputName={inputName} user={user} />
      ) : (
        <div className="App">
          <h3>Nice to have you with us {user}</h3>
          <h1>
            {examFinished.length === 0 ? (
              currentQuestion.question
            ) : (
              <div>Your Finall Score Is {score || " 0"} of 50 Points</div>
            )}
          </h1>
          <h3>{`Question ${index} of 5`}</h3>
          {examFinished.length === 0
            ? currentQuestion.choices.map((choice) => (
                <Choice choice={choice} key={choice.id} index={index} />
              ))
            : ""}
          <br />
          <button
            className="next-btn green"
            onClick={setCurrentQuestion}
            disabled={index === 5}
          >
            Next Question
          </button>{" "}
          <button
            className="finish-btn blue"
            onClick={setScore}
            disabled={index !== 5 || examFinished.length !== 0}
          >
            Finish Exam
          </button>
          <br />
          <button
            className="reset-btn purple"
            onClick={resetExam}
            disabled={examFinished === ""}
          >
            Reset Exam
          </button>
        </div>
      )}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentQuestion: () => dispatch(setCurrentQuestion()),
  setScore: () => dispatch(setScore()),
  resetExam: () => dispatch(resetExam()),
});
const mapStateToProps = (state) => ({
  currentQuestion: state.app.currentQuestion,
  score: state.app.score,
  index: state.app.index,
  examFinished: state.app.examFinished,
  user: state.app.user,
  inputName: state.app.inputName,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
