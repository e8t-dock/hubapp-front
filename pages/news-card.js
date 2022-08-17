import styles from "../styles/Home.module.css";

export default ({ news }) => {
  const { title, content } = news;
  return (
    <a href="https://nextjs.org/docs" className={styles.card}>
      <h2>{title} &rarr;</h2>
      <p>{content}</p>
    </a>
  );
};
