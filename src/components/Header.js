import Logo from '../assets/logo.png';
import './Header.css';

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt=""/>
        <a href="src/assets/logo.png">Home</a>
    </header>
  )
}
