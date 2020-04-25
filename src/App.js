import React from 'react';
import Contact from './section/Contact';
import About from './section/About';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Career from './section/Career';
import Interests from './section/Interests';
import Skills from './section/Skills';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: 'rgb(0,0,0)',
    textAlign: 'center'
  },
  pageContent: {
    backgroundColor: 'rgb(227, 227, 227)',
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
        <Skills />
        <Career />
        <Interests />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
