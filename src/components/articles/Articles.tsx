import {FC, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getData, showData } from "../../slice/getDataSlice";
import axios from "axios";
import styles from "./articles.module.scss";
import { ReactComponent as Heart } from "../../assets/images/heart2.svg";

export const Articles: FC = () => {
  const dispatch = useDispatch();
  const articlesArr = useSelector(showData);
  const loaded = articlesArr[0];
  const color = "#5cb85c";
  
  useEffect(() => {
    const getResource = async (headlines: string) => {
      const res = await axios.get(headlines);
      console.log(res.data.articles);
      dispatch(getData(res.data.articles))
      return res;
    }
    getResource('https://api.realworld.io/api/articles?limit=10&offset=0');
  });

  return (
    <>
      {loaded && articlesArr.map((item: any, index: number) => (
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
