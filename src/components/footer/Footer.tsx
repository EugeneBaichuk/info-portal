import styles from './footer.module.scss';

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div>
        <span className={styles.footer__logo}>conduit</span>
        @{new Date().getFullYear()}. An interactive learning project 
        from <a className={styles.footer__link} href='https://thinkster.io/'>Thinkster</a>
        . Code licensed under MIT.
      </div>
      
    </footer>
  )
}
