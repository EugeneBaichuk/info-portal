import './footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <span className='footer__logo'>conduit</span>
        @{new Date().getFullYear()}. An interactive learning project 
        from <a className='footer__link' href='https://thinkster.io/'>Thinkster</a>
        . Code licensed under MIT.
      </div>
      
    </footer>
  )
}
