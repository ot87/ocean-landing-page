import { forwardRef } from 'react';

import SolutionCard from '../SolutionCard/SolutionCard';
import { getScreenPaddings } from '../../utils/getCustomCss';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const solutions = [
  {
    id: 1,
    name: 'Solution 1',
    text: 'Solution 1 text',
    fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod eu risus id lobortis. Proin eget nibh suscipit, egestas dui volutpat, eleifend nisl. Curabitur et mauris non quam semper mattis ac in tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod eu risus id lobortis. Proin eget nibh suscipit, egestas dui volutpat, eleifend nisl. Curabitur et mauris non quam semper mattis ac in tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod eu risus id lobortis. Proin eget nibh suscipit, egestas dui volutpat, eleifend nisl. Curabitur et mauris non quam semper mattis ac in tellus.',
    imageUrl: `${process.env.PUBLIC_URL}/images/solution1.jpg`,
    imageTitle: 'Solution 1'
  },
  {
    id: 2,
    name: 'Solution 2',
    text: 'Solution 2 text',
    fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod eu risus id lobortis. Proin eget nibh suscipit, egestas dui volutpat, eleifend nisl. Curabitur et mauris non quam semper mattis ac in tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod eu risus id lobortis. Proin eget nibh suscipit, egestas dui volutpat, eleifend nisl. Curabitur et mauris non quam semper mattis ac in tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod eu risus id lobortis. Proin eget nibh suscipit, egestas dui volutpat, eleifend nisl. Curabitur et mauris non quam semper mattis ac in tellus.',
    imageUrl: `${process.env.PUBLIC_URL}/images/solution2.jpg`,
    imageTitle: 'Solution 2'
  }
];

const useStyles = makeStyles(getScreenPaddings());

const Solutions = forwardRef(function Solutions(_, ref) {
  const classes = useStyles();

  return (
    <Container
      className={classes.root}
      disableGutters
      ref={ref}
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        p={2}
      >
        <Typography
          gutterBottom
          variant='h4'
          color='primary'
        >
          Solutions
        </Typography>
        <Typography
          gutterBottom
          variant='h5'
          color='textSecondary'
        >
          Choose your best holidays!
        </Typography>
        <Box
          display='flex'
          justifyContent='space-evenly'
          flexWrap='wrap'
          width='100%'
        >
          {solutions.map(({ id, ...rest }) => <SolutionCard key={id} {...rest} />)}
        </Box>
      </Box>
    </Container>
  );
});

export default Solutions;
