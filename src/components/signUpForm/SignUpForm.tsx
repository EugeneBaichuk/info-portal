import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from '../loginForm/loginForm.module.scss';

export const SignUpForm = () => {
  return (
    <article className={styles.loginForm}>
    <h1 className={styles.loginForm__headline}>Sign up</h1>
    <div className={styles.loginForm__marginBot}>
      <a href="#" className={styles.loginForm__link}>Have an account?</a>
    </div>
    <form className={styles.loginForm__form}>
      <div>
        <TextField fullWidth style={{margin:'0 0 1rem 0'}} id="outlined-basic" label="Username" variant="outlined" />
      </div>
      <div>
        <TextField fullWidth style={{margin:'0 0 1rem 0'}} id="outlined-basic" label="E-mail" variant="outlined" />
      </div>
      <div>
        <TextField fullWidth style={{margin:'0 0 1rem 0'}} id="outlined-basic" label="Password" variant="outlined" />
      </div>
      <Button sx={{display: 'block', width: "100px", height: "50px", m:'0 0 0 auto'}} variant="contained" color="success" disabled={true}>SIgn up</Button>
    </form>
  </article>);
}
