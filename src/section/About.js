import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import photo from '../static/lucas-delboni.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  highlight: {
    color: 'rgb(33, 150, 243)'
  },
  bigAvatar: {
    fontSize: '80px',
    width: 'auto',
    height: 'auto'
  },
  content: {
    height: '100%',
    position: 'relative'
  },
  icons: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  iconSize: {
    fontSize: '60px',
    marginRight: '10%'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Avatar className={classes.bigAvatar} alt="Lucas Delboni" src={photo} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Container className={classes.content}>
              <Typography align='justify' variant="h4" component="h1" gutterBottom>
                OI, EU SOU O <span className={classes.highlight}>LUCAS DELBONI</span>
              </Typography>
              <Typography align='justify' variant="h5" component="h1" gutterBottom>
                Engenheiro de software
              </Typography>
              <Typography align='justify' component="h2" gutterBottom>
                Nasci no Espírito Santo e vim à São Paulo para cursar sistemas de informação na EACH-USP. Quero me desenvolver e 
                ajudar outras pessoas deixando um impacto positivo. Gosto de desafios e tenho bastante vontade de aprender.
              </Typography>
              <div className={classes.icons}>
                <LinkedInIcon className={classes.iconSize}/>
                <GitHubIcon className={classes.iconSize}/>
                <InstagramIcon className={classes.iconSize}/>
              </div>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}