import './App.scss';
import LogPage from './pages/logPage';
import LoginForm from './components/loginForm';
import SignUpForm from './components/signUpForm';
import HomePage from './pages/homePage';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LogPage/>}>
        <Route index element={<LoginForm/>}/>
        <Route path='/sign-up' element={<SignUpForm/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
