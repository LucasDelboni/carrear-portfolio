import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.color.primary,
    color: 'white',
    width: '100%',
    height: '100%',
  },
  iconSize: {
    fontSize: '60px',
  }
}));

export default function InterestCard(props) {
  const classes = useStyles();

  const flipBackgroundColor = { backgroundColor: 'rgb(33, 150, 243)' };

  const {
    icon,
    primaryText,
    secondaryText,
  } = props;

  return (
    <Flippy
      flipOnHover={true}
      flipDirection="horizontal" // horizontal or vertical
    >
      <FrontSide style={flipBackgroundColor}>
        <CardContent className={classes.card}>
          {icon}
          <Typography variant="h5">
            {primaryText}
          </Typography>
        </CardContent>
      </FrontSide>

      <BackSide style={flipBackgroundColor}>
        <CardContent className={classes.card}>
          <Typography variant="h6">
            {secondaryText}
          </Typography>
        </CardContent>
      </BackSide>
    </Flippy>
  );
}
