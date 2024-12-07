import questions from "../questionBank"

export default (req, res) => {
  const selectedIdParam = +req.query.id;
  const questionFilter = questions.filter(question => question.id === selectedIdParam);

  if(questionFilter.length === 1) {
    const selectedQuestion = questionFilter[0].shuffleAnswers();
    res.status(200).json(selectedQuestion.toObject());
  } else {
    res.status(204).send();
  }
}