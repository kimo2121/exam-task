import QUESTION_BANK from "../questionData/questions.data";
import { QuestionActionTypes } from "./app.types";
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const INITIAL_STATE = {
  inputName: "",
  user: "",
  questionBank: QUESTION_BANK,
  index: 1,
  currentQuestion: QUESTION_BANK[0],
  shuffledChoices: QUESTION_BANK[0].choices,
  chosenAnswer: [],
  correctAnswer: [],
  score: "",
  examFinished: "",
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionActionTypes.INPUT_CHANGE:
      return { ...state, inputName: action.value };
    case QuestionActionTypes.START_EXAM:
      return { ...state, user: state.inputName, inputName: "" };
    case QuestionActionTypes.SET_CURRENT_QUESTION:
      return {
        ...state,
        index: state.index + 1,
        currentQuestion: state.questionBank[state.index],
        correctAnswer:
          state.chosenAnswer.id === state.currentQuestion.answer.id
            ? [...state.correctAnswer, 10]
            : [...state.correctAnswer],
        chosenAnswer: [],
        shuffledChoices: shuffleArray(state.questionBank[state.index].choices),
      };
    case QuestionActionTypes.CHOSEN_ANSWER:
      return {
        ...state,
        chosenAnswer: state.currentQuestion.choices.find(
          (ele) => ele.id === action.payload.id
        ),
      };
    case QuestionActionTypes.SET_SCORE:
      return {
        ...state,
        score:
          state.chosenAnswer.id === state.currentQuestion.answer.id
            ? [state.correctAnswer.length * 10 + 10]
            : [state.correctAnswer.length * 10],
        chosenAnswer: [],
        correctAnswer: [],
        examFinished: "Exam Finished",
      };
    case QuestionActionTypes.RESET_EXAM:
      return {
        ...state,
        questionBank: shuffleArray(state.questionBank),
        index: 1,
        examFinished: "",
        score: "",
      };

    default:
      return state;
  }
};

export default appReducer;
