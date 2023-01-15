
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from  'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import styles from './loginForm.module.scss';

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required")
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const fieldsAreEmpty = !!formik.values.email && !!formik.values.password

  return (
  <article className={styles.loginForm}>
    <h1 className={styles.loginForm__headline}>Sign in</h1>
    <div className={styles.loginForm__marginBot}>
      <Link to={"/sign-up"} className={styles.loginForm__link}>Need an account?</Link>
    </div>
    <form className={styles.loginForm__form} onSubmit={formik.handleSubmit}>
      <div>
        <TextField fullWidth style={{margin:'0 0 1rem 0'}} id="outlined-basic" label="E-mail" variant="outlined" 
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email ? true : false}
        helperText={formik.touched.email && formik.errors.email}
        />
      </div>
      <div>
        <TextField fullWidth style={{margin:'0 0 1rem 0'}} id="outlined-basic" label="Password" variant="outlined" 
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.touched.password && formik.errors.password ? true : false}
        helperText={formik.touched.password && formik.errors.password}
        type='password'
        />
      </div>
      <Button sx={{display: 'block', width: "100px", height: "50px", m:'0 0 0 auto'}} 
      variant="contained" 
      color="success" 
      type='submit'
      disabled={!fieldsAreEmpty || !formik.isValid}
      >Log in</Button>
    </form>
  </article>);
};
