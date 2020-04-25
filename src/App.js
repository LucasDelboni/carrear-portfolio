import React from 'react';
import Contact from './section/Contact';
import About from './section/About';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: 'rgb(0,0,0)',
    textAlign: 'center'
  },
  pageContent: {
    backgroundColor: 'rgb(239, 239, 239)',
    padding: 0
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <CssBaseline />
      <Container className={classes.pageContent}>
        <About />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
