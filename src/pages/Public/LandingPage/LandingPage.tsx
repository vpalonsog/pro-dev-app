//* External
import { useNavigate } from 'react-router-dom';

//* App Custom
import './LandingPage.scss';
import {
  
  HeaderLanding,
 
} from './sections/index';
import Header from '@/components/Header/Header';

const LandingPage = () => {
  const navigate = useNavigate();

  

  return (
    <>
      <HeaderLanding>
        <Header />
      </HeaderLanding>
    </>
  );
};

export default LandingPage;