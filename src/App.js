import Main from './Main';
import Solutions from './Solutions';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <Container maxWidth={false} disableGutters>
    <CssBaseline />
    <Main />
    <Solutions />
  </Container>
);

export default App;
