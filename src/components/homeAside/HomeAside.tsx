import {FC, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { showTags, getTags } from "../../slice/getDataSlice";
import { Link } from "react-router-dom";
import styles from "./homeAside.module.scss";

export const HomeAside: FC = () => {
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

  const dispatch = useDispatch();
  const tagsArr = useSelector(showTags);
  const loaded = tagsArr[0];

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  return (
    <div className={styles.homeAside}>
      <div className={styles.homeAside__block}>
        <div className={styles.homeAside__title}>Popular Tags</div>
        <div className={styles.homeAside__content}>
          {!!loaded && tagsArr.map((text: string, i: number) => (
            <Link to="#" className={styles.homeAside__text} key={i}>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
