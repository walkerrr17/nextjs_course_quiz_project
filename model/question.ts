import { shuffleNumbers } from "@/functions/arrays";
import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number
  #title: string
  #answers: AnswerModel[]
  #userGotRightAnswer: boolean

  constructor(id: number, title: string, answers: AnswerModel[], userGotRightAnswer = false) {
    this.#id = id;
    this.#title = title;
    this.#answers = answers;
    this.#userGotRightAnswer = userGotRightAnswer;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get answers() {
    return this.#answers;
  }

  get userGotRightAnswer() {
    return this.#userGotRightAnswer;
  }

  get isAnswered() {
    for(let answer of this.#answers) {
      if(answer.isRevealed) return true
    }

    return false;
  }

  answerQuestion(questionIndex: number): QuestionModel {
    const correctAnswer = this.#answers[questionIndex]?.isRight;
    const answers = this.#answers.map((answer, index) => {
      const selectedAnswer = questionIndex === index;
      const shouldRevealAnswer = selectedAnswer || answer.isRight;
      return shouldRevealAnswer ? answer.revealCorrectAnswer() : answer;
    });

    return new QuestionModel(this.#id, this.#title, answers, correctAnswer);
  }

  shuffleAnswers(): QuestionModel {
    let shuffledAnswers = shuffleNumbers(this.#answers);
    return new QuestionModel(this.#id, this.#title, shuffledAnswers, this.#userGotRightAnswer);
  }

  toObject() {
    return {
      id: this.#id,
      title: this.#title,
      isAnswered: this.isAnswered,
      userGotRightAnswer: this.#userGotRightAnswer,
      answers: this.#answers.map(answer => answer.toObject()),
    }
  }
}