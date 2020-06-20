import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BookIcon from '@material-ui/icons/Book';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import InterestCard from '../components/InterestCard';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  card: {
    backgroundColor: theme.color.primary,
    color: 'white',
  },
  iconSize: {
    fontSize: '60px',
  }
}));

export default function Interests() {
  const classes = useStyles();

  const bookCard = {
    icon: (<BookIcon className={classes.iconSize} />),
    primaryText: 'Livros',
    secondaryText: 'Ficção científica, política, desenvolvimento pessoal',
  };
  const bikeCard = {
    icon: (<DirectionsBikeIcon className={classes.iconSize} />),
    primaryText: 'Ciclismo',
    secondaryText: 'Pela cidade ou campo',
  };
  const videogameCard = {
    icon: (<VideogameAssetIcon className={classes.iconSize} />),
    primaryText: 'Jogos',
    secondaryText: 'Sobrevivência, cooperativo, as escolhas importam',
  };
  const exploreCard = {
    icon: (<ExploreIcon className={classes.iconSize} />),
    primaryText: 'Explorar',
    secondaryText: 'O mundo têm muita coisa nova para conhecer',
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} >
        <Typography variant="h4" component="h1" gutterBottom>
          INTERESSES
        </Typography>
        <Grid container spacing={10} justify="space-around">
          <Grid item xs={12} sm={3}>
            <InterestCard icon={bookCard.icon} primaryText={bookCard.primaryText} secondaryText={bookCard.secondaryText} />
          </Grid>

          <Grid item xs={12} sm={3}>
            <InterestCard icon={bikeCard.icon} primaryText={bikeCard.primaryText} secondaryText={bikeCard.secondaryText} />
          </Grid>

          <Grid item xs={12} sm={3}>
            <InterestCard icon={videogameCard.icon} primaryText={videogameCard.primaryText} secondaryText={videogameCard.secondaryText} />
          </Grid>

          <Grid item xs={12} sm={3}>
            <InterestCard icon={exploreCard.icon} primaryText={exploreCard.primaryText} secondaryText={exploreCard.secondaryText} />
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}