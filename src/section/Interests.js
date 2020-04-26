import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BookIcon from '@material-ui/icons/Book';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

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
    backgroundColor: 'rgb(33, 150, 243)',
    color: 'white',
  },
  iconSize: {
    fontSize: '60px',
  }
}));

export default function Interests() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} >
        <Typography variant="h4" component="h1" gutterBottom>
          INTERESSES
        </Typography>
        <Grid container spacing={10} justify="space-around">
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <BookIcon className={classes.iconSize}/>
                <Typography variant="h5">
                  Livros
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <DirectionsBikeIcon className={classes.iconSize}/>
                <Typography variant="h5">
                  Ciclismo
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <VideogameAssetIcon className={classes.iconSize}/>
                <Typography variant="h5">
                  Jogos
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
       
        
      </Container>
    </div>
  );
}