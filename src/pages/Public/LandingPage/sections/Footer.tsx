import proDevLogo from './../../../../assets/logo-pro-dev.svg';
import { tnl } from '../../../../i18n/i18n';


const Footer = () => {

  const currentYear = new Date().getFullYear();

    return (
        <div className="landing_footer">
            <img src={proDevLogo} alt="pro-dev-logo"></img>

            <div className="d-flex flex-column align-items-center">
        <span>PRODEV © {currentYear}</span>
        <small>{tnl('components.footer_text')}</small>
      </div>
        </div>

         
      
    )
}

export default Footer;