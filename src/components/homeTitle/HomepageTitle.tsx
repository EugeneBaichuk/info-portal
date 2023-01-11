import styles from './homepageTitle.module.scss';

export const HomepageTitle = () => {
  return (
    <article className={styles.homepageTitle}>
      <h1 className={styles.homepageTitle__h}>conduit</h1>
      <p className={styles.homepageTitle__p}>
        A place to share your Angular knowledge.
      </p>
    </article>
  );
};
