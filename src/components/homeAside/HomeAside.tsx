import { Link } from "react-router-dom";
import styles from "./homeAside.module.scss";

export const HomeAside = () => {
  const contentText = [
    "implementations",
    "welcome",
    "introduction",
    "codebaseShow",
    "ipsum",
    "qui",
    "et",
    "quia",
    "cupiditate",
    "deserunt",
  ];

  return (
    <div className={styles.homeAside}>
      <div className={styles.homeAside__block}>
        <div className={styles.homeAside__title}>Popular Tags</div>
        <div className={styles.homeAside__content}>
          {contentText.map((text, i) => (
            <Link to="#" className={styles.homeAside__text} key={i}>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
