import QuestionModel from "@/model/question";
import styles from "@/styles/Question.module.css";
import QuestionTitle from "./QuestionTitle";
import QuestionAnswer from "./QuestionAnswer";

interface QuestionComponentProps {
  value: QuestionModel
}

export default function Question(props: QuestionComponentProps) {
  const question = props.value;

  function renderQuestionAnswers() {
    return question.answers.map((answer, index) => {
      return (
        <QuestionAnswer
          key={index}
          value={answer}
          index={index}
          option='A'
          optionBackgroundColor="#FFCC66"
        />
      )
    })
  }

  return (
    <div className={styles.question}>
      <QuestionTitle titleText={question.title} />
      {renderQuestionAnswers()}
    </div>
  );
}