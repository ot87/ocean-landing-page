import { useRef } from 'react';

import Main from './Main';
import Solutions from './Solutions';
import AboutUs from './AboutUs';
import ScrollToTop from './ScrollToTop';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  const solutionsRef = useRef();
  const aboutUsRef = useRef();
  const handleSolutionsButtonClick = () => {
    solutionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleAboutUsButtonClick = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container maxWidth={false} disableGutters>
      <CssBaseline />
      <Main
        onSolutionsClick={handleSolutionsButtonClick}
        onAboutUsClick={handleAboutUsButtonClick}
      />
      <Solutions ref={solutionsRef} />
      <AboutUs ref={aboutUsRef} />
      <ScrollToTop />
    </Container>
  );
};

export default App;
