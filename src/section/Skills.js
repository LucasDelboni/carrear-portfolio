import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  card: {
    height: '100%'
  },
  iconSize: {
    fontSize: '60px',
  }
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.main}>
        <Typography variant="h4" component="h1" gutterBottom>
          Habilidades
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="subtitle1">
                  Java
                </Typography>
                <Typography variant="body2" component="p">
                  Java
                </Typography>
                <Typography variant="body2" component="p">
                  Dropwizard
                </Typography>
                <Typography variant="body2" component="p">
                  JUnit
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="subtitle1">
                  HTML5/CSS3/JavaScript
                </Typography>
                <Typography variant="body2" component="p">
                  React
                </Typography>
                <Typography variant="body2" component="p">
                  AngularJS
                </Typography>
                <Typography variant="body2" component="p">
                  Jasmine
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="subtitle1">
                  Outros
                </Typography>
                <Typography variant="body2" component="p">
                  Protractor
                </Typography>
                <Typography variant="body2" component="p">
                  Jenkins
                </Typography>
                <Typography variant="body2" component="p">
                  Mysql
                </Typography>
                <Typography variant="body2" component="p">
                  Jira
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="subtitle1">
                  Aprendendo
                </Typography>
                <Typography variant="body2" component="p">
                  graphql
                </Typography>
                <Typography variant="body2" component="p">
                  neo4j
                </Typography>
                <Typography variant="body2" component="p">
                  docker
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}