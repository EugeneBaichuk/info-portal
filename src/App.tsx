import './App.scss';
import Header from './components/header';
import Footer from './components/footer';
import LoginForm from './components/loginForm';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className='main-page'>
        <LoginForm/>
        <div className='main-page__footer'>
          <Footer/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
