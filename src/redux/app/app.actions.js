import { QuestionActionTypes } from "./app.types";
export const setCurrentQuestion = () => ({
  type: QuestionActionTypes.SET_CURRENT_QUESTION,
});
export const setChosenAnswer = (choice) => ({
  type: QuestionActionTypes.CHOSEN_ANSWER,
  payload: choice,
});

export const setScore = () => ({
  type: QuestionActionTypes.SET_SCORE,
});

export const startExam = () => ({
  type: QuestionActionTypes.START_EXAM,
});
export const inputChange = (event) => ({
  type: QuestionActionTypes.INPUT_CHANGE,
  value: event.target.value,
});
export const resetExam = () => ({
  type: QuestionActionTypes.RESET_EXAM,
});
