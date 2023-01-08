import Header from '../../components/header';
import Footer from '../../components/footer';
import {Outlet} from 'react-router-dom';

export const LogPage = () => {
  return (
    <div className='App'>
      <Header/>
      <div className='main-page'>
        <Outlet/>
        <div className='main-page__footer'>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
