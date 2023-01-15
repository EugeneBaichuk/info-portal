import styles from './header.module.scss'
import { Link } from  'react-router-dom';
import { CustomLink } from '../customLink/CustomLink'

export const Header = () => {
  const nav = [{text:"Home", link: "home", id:1}, {text:"Sign In", link: "login", id:2}, {text:"Sign Up", link: "sign-up", id:3} ];
  

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
          <Link to={"/home"} className={styles.navbar__logo}> conduit </Link>
        <ul className={styles.navbar__ul}>
          {nav.map(({text, link, id}) => (
          <CustomLink key={text} to={link} >
            <li className={styles.navbar__li} key={id}>{text}</li>
          </CustomLink>
          ))}
        </ul>
      </nav>
    </header>
  )
};


