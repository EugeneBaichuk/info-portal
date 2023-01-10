import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import './loginForm.scss';

export const LoginForm = () => {
  return (
  <article className='login-form'>
    <h1 className='login-form__headline'>Sign in</h1>
    <div className='login-form__margin-bot'>
      <a href="#" className='login-form__link'>Need an account?</a>
    </div>
    <form className='login-form__form'>
      <div>
        <TextField fullWidth style={{margin:'0 0 1rem 0'}} id="outlined-basic" label="E-mail" variant="outlined" />
      </div>
      <div>
        <TextField fullWidth style={{margin:'0 0 1rem 0'}} id="outlined-basic" label="Password" variant="outlined" />
      </div>
      <Button sx={{display: 'block', width: "100px", height: "50px", m:'0 0 0 auto'}} variant="contained" color="success" disabled={true}>Log in</Button>
    </form>
  </article>);
};
