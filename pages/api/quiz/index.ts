import { shuffleNumbers } from "@/functions/arrays";
import questions from "../questionBank"

export default (req, res) => {
  const questionIDs = questions.map(question => question.id);
  res.status(200).json(shuffleNumbers(questionIDs));
}