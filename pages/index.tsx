import Question from "@/components/Question";
import AnswerModel from "@/model/answer";
import QuestionModel from "@/model/question";

export default function HomePage() {
  const testQuestion = new QuestionModel(1, 'Best color?', [
    AnswerModel.isWrong("Blue"),
    AnswerModel.isWrong("Green"),
    AnswerModel.isWrong("Red"),
    AnswerModel.isRight("Black"),
  ]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <Question value={testQuestion} />
    </div>
  )
}
