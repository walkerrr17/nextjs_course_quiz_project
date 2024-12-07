import styles from "@/styles/QuestionTitle.module.css";

interface QuestionTitleComponentProps {
  titleText: string
}

export default function QuestionTitle(props: QuestionTitleComponentProps) {
  return (
    <div className={styles.questionTitle}>
      <span className={styles.titleText}>{props.titleText}</span>
    </div>
  );
}