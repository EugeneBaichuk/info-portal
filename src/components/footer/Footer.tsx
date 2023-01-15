import styles from './footer.module.scss';
import { Link } from  'react-router-dom';

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div>
        <Link to={"/home"} className={styles.footer__logo}>conduit</Link>
        @{new Date().getFullYear()}. An interactive learning project 
        from <a className={styles.footer__link} href='https://thinkster.io/'>Thinkster</a>
        . Code licensed under MIT.
      </div>
      
    </footer>
  )
}
