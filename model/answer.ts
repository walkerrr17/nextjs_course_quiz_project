export default class AnswerModel {
  #value: string
  #isRight: boolean
  #isRevealed: boolean

  constructor(value: string, isAnswerRight: boolean, isAnswerRevealed = false) {
    this.#value = value;
    this.#isRight = isAnswerRight;
    this.#isRevealed = isAnswerRevealed;
  }

  static isRight(value: string) {
    return new AnswerModel(value, true);
  }

  static isWrong(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get isRight() {
    return this.#isRight;
  }

  get isRevealed() {
    return this.#isRevealed;
  }

  revealCorrectAnswer(): AnswerModel {
    return new AnswerModel(this.#value, this.#isRight, true);
  }

  toObject() {
    return {
      value: this.#value,
      isRight: this.#isRight,
      isRevealed: this.#isRevealed
    }
  }
}