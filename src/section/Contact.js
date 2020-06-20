import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function contactList(Icon, text, link) {
  const icon = link ?
    (
      <Link href={link} target="_blank" rel="noopener">
        <Icon style={{ color: 'black' }} />
      </Link>
    ) : (
      <Icon style={{ color: 'black' }} />
    );

  const textLink = link ?
    (
      <Link href={link} target="_blank" rel="noopener" color="textPrimary">
        {text}
      </Link>
    ) : (
      text
    );

  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        {icon}
      </Grid>
      <Grid item>
        <Typography variant="h5" component="h2" gutterBottom>
          {textLink}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          CONTATO
        </Typography>
        {contactList(LocationCityIcon, 'São Paulo - SP')}
        {contactList(EmailIcon, 'lucas.delboni2@gmail.com')}
        {contactList(LinkedInIcon, 'lucasdelboni', 'https://www.linkedin.com/in/lucasdelboni/')}
        {contactList(GitHubIcon, 'LucasDelboni', 'https://www.github.com/LucasDelboni')}
        {contactList(InstagramIcon, 'l0ucas.delboni', 'https://www.instagram.com/l0ucas.delboni/')}
      </Container>
    </div>
  );
}