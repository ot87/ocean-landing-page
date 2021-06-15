import { forwardRef } from 'react';

import solution1Image from '../../assets/solution1.jpg';
import solution2Image from '../../assets/solution2.jpg';
import SolutionCard from '../SolutionCard/SolutionCard';
import { getScreenPaddings } from '../../utils/getCustomCss';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(getScreenPaddings());

const Solutions = forwardRef(function Solutions(_, ref) {
  const classes = useStyles();
  const solutions = [
    {
      id: 1,
      name: 'Solution 1',
      text: 'Solution 1 text',
      image: solution1Image,
      imageTitle: 'Solution 1'
    },
    {
      id: 2,
      name: 'Solution 2',
      text: 'Solution 2 text',
      image: solution2Image,
      imageTitle: 'Solution 2'
    }
  ];

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
          {solutions.map(({ id, name, text, image, imageTitle }) => (
            <SolutionCard
              key={id}
              name={name}
              text={text}
              image={image}
              imageTitle={imageTitle}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
});

export default Solutions;
