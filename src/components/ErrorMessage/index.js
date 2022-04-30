import styles from "./ErrorMessage.module.css";

function ErrorMessage(props) {
  const { errorMessage } = props;
  return (
    <div className={styles.container}>
      <small>{errorMessage}</small>
    </div>
  );
}

export default ErrorMessage;
