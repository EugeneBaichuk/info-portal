import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from  'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import styles from '../loginForm/loginForm.module.scss';

export const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required")
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const fieldsAreEmpty = !!formik.values.username && !!formik.values.email && !!formik.values.password

  return (
    <article className={styles.loginForm}>
    <h1 className={styles.loginForm__headline}>Sign up</h1>
    <div className={styles.loginForm__marginBot}>
      <Link to={"/login"} className={styles.loginForm__link}>Have an account?</Link>
    </div>
    <form className={styles.loginForm__form} onSubmit={formik.handleSubmit}>
        <div>
          <TextField fullWidth style={{margin:'0 0 1rem 0'}} id="outlined-basic" label="Username" variant="outlined"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={formik.touched.username && formik.errors.username ? true : false}
            helperText={formik.touched.username && formik.errors.username}
          />
        </div>
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
            />
        </div>
      <Button sx={{display: 'block', width: "100px", height: "50px", m:'0 0 0 auto'}} 
      variant="contained" 
      color="success" 
      disabled={!fieldsAreEmpty || !formik.isValid}>Sign up</Button>
    </form>
  </article>);
}
