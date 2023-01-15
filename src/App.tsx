import {Routes, Route, Navigate} from 'react-router-dom';
import LogPage from './pages/logPage';
import LoginForm from './components/loginForm';
import SignUpForm from './components/signUpForm';
import HomePage from './pages/homePage';
import GlobalArticlesList from './components/globalArticlesList';

import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LogPage/>}>
        <Route path='/home' element={<HomePage/>}>
          <Route index element={<GlobalArticlesList/>}/>
          <Route path='/home/user' element={<div>Nothing here</div>}/>
        </Route>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/sign-up' element={<SignUpForm/>}/>
      </Route>
    </Routes>
  );
}

export default App;
