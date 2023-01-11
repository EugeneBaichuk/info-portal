import React from "react";
import styles from "./articles.module.scss";
import { ReactComponent as Heart } from "../../assets/images/heart2.svg";

export const Articles: React.FC = () => {
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
        <div className={styles.articles} key={index}>
          <div className={styles.article}>
            <div className={styles.article__info}>
              <div className={styles.article__infoBlock}>
                <div className={styles.article__icon}>
                  <img className={styles.article__img} src={item.author.image} />
                </div>
                <div className={styles.article__dateAndName}>
                  <div className={styles.article__nameAutor}>{item.author.username}</div>
                  <div className={styles.article__date}>
                    {new Date(item.updatedAt).toLocaleString("en", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <div className={styles.article__like}>
                <Heart
                  width={15}
                  height={15}
                  fill={color}
                  className={styles.heart}
                />
                <p>{item.favoritesCount}</p>
              </div>
            </div>
            <div className={styles.article__textBlock}>
              <div className={styles.article__title}>{item.title}</div>
              <div className={styles.article__text}>{item.description}</div>
            </div>
            <div className={styles.article__moreBlock}>
              <div className={styles.article__more}>Read more...</div>
              <div className={styles.article__tags}>
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
