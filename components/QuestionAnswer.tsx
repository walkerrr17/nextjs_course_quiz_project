import AnswerModel from "@/model/answer";
import styles from "@/styles/QuestionAnswer.module.css";

interface QuestionAnswerComponentProps {
  value: AnswerModel
  index: number
  option: string
  optionBackgroundColor: string
}

export default function QuestionAnswer(props: QuestionAnswerComponentProps) {
  const answer = props.value;

  return (
    <div className={styles.questionAnswer}>
      <div className={styles.answerContent}>
        <div className={styles.cardFront}>
          <div className={styles.answerOption}
            style={{backgroundColor: props.optionBackgroundColor}}
          >
            {props.option}
          </div>
          <div className={styles.answerValue}>
            {answer.value}
          </div>
        </div>
        <div className={styles.cardBack}></div>
      </div>
    </div>
  );
}