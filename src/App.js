import { useRef } from 'react';

import Main from './Main';
import Solutions from './Solutions';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  const solutionsRef = useRef();
  const handleSolutionsButtonClick = () => {
    solutionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container maxWidth={false} disableGutters>
      <CssBaseline />
      <Main onSolutionsClick={handleSolutionsButtonClick} />
      <Solutions ref={solutionsRef} />
    </Container>
  );
};

export default App;
