import proDevLogo from './../../assets/logo-pro-dev.svg';
import './../../App.css';

function Header() {

  return (
    
    <header>
      <img 
        src={proDevLogo} 
        className="logo" 
        alt="ProDev Logo" 
        style={{ height: '100px', width: 'auto' }} 
      />
      </header>
  );
    
}

export default Header;
