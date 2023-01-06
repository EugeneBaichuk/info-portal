import './header.scss'
//import Navigation from './Navigation/Navigation';
import { Link } from 'react-router-dom';

export const Header = () => {
  const nav = ["Home", "Sign In", "Sign Up"];

  return (
    <header className='header'>
      <nav className='navbar'>
        {/* <Link to='/'> */}
          <p className='navbar__logo'> conduit </p>
        {/* </Link> */}
        {/* <Navigation /> */}
        <ul className='navbar__ul'>
          {nav.map((navItem: string, i) => <li className='navbar__li navbar__li_active' key={i}>{navItem}</li>)}
        </ul>
      </nav>
    </header>
  )
};


