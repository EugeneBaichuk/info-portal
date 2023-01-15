import { GlobalArticlesList } from "../../components/globalArticlesList/GlobalArticlesList";
import HomepageTitle from "../../components/homeTitle";
import HomeAside from "../../components/homeAside";
import HomeTabs from "../../components/homeTabs";
import PaginationOutlined from "../../components/pagination";

import styles from "./home.module.scss";

export const HomePage = () => {
  return (
    <div>
      <HomepageTitle />
      <div className={styles.home}>
        <div className={styles.home__content}>
          <div className={styles.home__main}>
            <HomeTabs />
            <GlobalArticlesList />
            <PaginationOutlined />
          </div>
          <HomeAside />
        </div>
      </div>
    </div>
  );
};
