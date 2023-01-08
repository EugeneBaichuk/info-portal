import './header.scss'
//import Navigation from './Navigation/Navigation';
import { CustomLink } from '../customLink/CustomLink'

export const Header = () => {
  const nav = [{text:"Home", link: "home", id:1}, {text:"Sign In", link: "/", id:2}, {text:"Sign Up", link: "sign-up", id:3} ];
  

  return (
    <header className='header'>
      <nav className='navbar'>
          <p className='navbar__logo'> conduit </p>
        <ul className='navbar__ul'>
          {nav.map(({text, link, id}) => (
          <CustomLink key={text} to={link} >
            <li className='navbar__li' key={id}>{text}</li>
          </CustomLink>
          ))}
        </ul>
      </nav>
    </header>
  )
};


