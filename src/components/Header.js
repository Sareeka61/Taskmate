import Logo from '../assets/logo.png';
import './Header.css';

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt=""/>
        {/* the classname title won't work here as per modular styling of css and will only work inside taskcard.js */}
        <a className="title" href="src/assets/logo.png">Home</a>
    </header>
  )
}
