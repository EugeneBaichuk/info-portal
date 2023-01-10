import React from "react";
import styles from "./article.module.scss";
import { ReactComponent as Heart } from "../../assets/images/heart2.svg";

export const Article: React.FC = () => {
  const articles = [
    {
      author: {
        image:
          "https://russkaja-skazka.ru/wp-content/uploads/2019/04/aleksey-tolstoy-skazka-dlya-detey.jpg",
        username: "Username",
      },
      favoritesCount: 15,
      title: "Hello",
      description:
        "Lorem ipsum dddddddd dfdfsfsfd wrwer2erweffewf edfsdfsdf werfwdfd",
      updatedAt: "10:12:2022",
      tagList: ["tag", "tag2"],
    },
    {
      author: {
        image:
          "https://russkaja-skazka.ru/wp-content/uploads/2019/04/aleksey-tolstoy-skazka-dlya-detey.jpg",
        username: "Username",
      },
      favoritesCount: 15,
      title: "Hello",
      description:
        "Lorem ipsum dddddddd dfdfsfsfd wrwer2erweffewf edfsdfsdf werfwdfd",
      updatedAt: "10:12:2022",
      tagList: ["tag", "tag2"],
    },
    {
      author: {
        image:
          "https://russkaja-skazka.ru/wp-content/uploads/2019/04/aleksey-tolstoy-skazka-dlya-detey.jpg",
        username: "Username",
      },
      favoritesCount: 15,
      title: "Hello",
      description:
        "Lorem ipsum dddddddd dfdfsfsfd wrwer2erweffewf edfsdfsdf werfwdfd",
      updatedAt: "10:12:2022",
      tagList: ["tag", "tag2"],
    },
    {
      author: {
        image:
          "https://russkaja-skazka.ru/wp-content/uploads/2019/04/aleksey-tolstoy-skazka-dlya-detey.jpg",
        username: "Username",
      },
      favoritesCount: 15,
      title: "Hello",
      description:
        "Lorem ipsum dddddddd dfdfsfsfd wrwer2erweffewf edfsdfsdf werfwdfd",
      updatedAt: "10:12:2022",
      tagList: ["tag", "tag2"],
    },
    {
      author: {
        image:
          "https://russkaja-skazka.ru/wp-content/uploads/2019/04/aleksey-tolstoy-skazka-dlya-detey.jpg",
        username: "Username",
      },
      favoritesCount: 15,
      title: "Hello",
      description:
        "Lorem ipsum dddddddd dfdfsfsfd wrwer2erweffewf edfsdfsdf werfwdfd",
      updatedAt: "10:12:2022",
      tagList: ["tag", "tag2"],
    },
    {
      author: {
        image: "https://russkaja-skazka.ru/wp-content/uploads/2019/04/aleksey-tolstoy-skazka-dlya-detey.jpg",
        username: "Username",
      },
      favoritesCount: 15,
      title: "Hello",
      description: "Lorem ipsum dddddddd dfdfsfsfd wrwer2erweffewf edfsdfsdf werfwdfd",
      updatedAt: "10:12:2022",
      tagList: ["tag", "tag2"],
    },
    {
      author: {
        image: "https://russkaja-skazka.ru/wp-content/uploads/2019/04/aleksey-tolstoy-skazka-dlya-detey.jpg",
        username: "Username",
      },
      favoritesCount: 15,
      title: "Hello",
      description: "Lorem ipsum dddddddd dfdfsfsfd wrwer2erweffewf edfsdfsdf werfwdfd",
      updatedAt: "10:12:2022",
      tagList: ["tag", "tag2"],
    },
  ];
  const color = "#5cb85c";

  return (
    <>
      {articles.map((item: any, index) => (
        <div className={styles.wrapper} key={index}>
          <div className={styles.articleBlock}>
            <div className={styles.infoArticle}>
              <div className={styles.infoArticleBlock}>
                <div className={styles.iconArticle}>
                  <img className={styles.imgArticle} src={item.author.image} />
                </div>
                <div className={styles.dateAndNameArticle}>
                  <div className={styles.nameAutor}>{item.author.username}</div>
                  <div className={styles.dateArticle}>
                    {new Date(item.updatedAt).toLocaleString("en", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <div className={styles.likeArticle}>
                <Heart
                  width={15}
                  height={15}
                  fill={color}
                  className={styles.heart}
                />
                <p>{item.favoritesCount}</p>
              </div>
            </div>
            <div className={styles.article}>
              <div className={styles.titleArticle}>{item.title}</div>
              <div className={styles.textArticle}>{item.description}</div>
            </div>
            <div className={styles.footerArticle}>
              <div className={styles.footerReadMore}>Read more...</div>
              <div className={styles.footerWords}>
                {item.tagList.map((item: string, index: number) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
