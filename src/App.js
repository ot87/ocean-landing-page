import { useRef } from 'react';

import Main from './components/Main/Main';
import Solutions from './components/Solutions/Solutions';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  const solutionsRef = useRef();
  const aboutUsRef   = useRef();
  const contactUsRef = useRef();
  const handleSolutionsButtonClick = () => {
    solutionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleAboutUsButtonClick = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleContactUsButtonClick = () => {
    contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container maxWidth={false} disableGutters>
      <CssBaseline />
      <Main
        onSolutionsClick={handleSolutionsButtonClick}
        onAboutUsClick={handleAboutUsButtonClick}
        onContactUsClick={handleContactUsButtonClick}
      />
      <Solutions ref={solutionsRef} />
      <AboutUs ref={aboutUsRef} />
      <ContactUs ref={contactUsRef} />
      <ScrollToTop />
    </Container>
  );
};

export default App;
