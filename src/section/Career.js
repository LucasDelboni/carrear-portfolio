import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import './TimeLine.css';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'white',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
}));

export default function Career() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Typography variant="h4" component="h1" gutterBottom>
        CARREIRA
      </Typography>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work main-item"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          style={{color: 'black'}}
          date="2018 - presente"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Engenheiro de Software Full-stack</h3>
          <h4 className="vertical-timeline-element-subtitle">Gradus Soluções</h4>
          <p>AngularJS, React, Java, Dropwizard, Protractor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Engenheiro de Software Back-end</h3>
          <h4 className="vertical-timeline-element-subtitle">Aditus Consultoria Financeira</h4>
          <p>
            Java, JSF
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Graduação em Sistemas de Informação</h3>
          <h4 className="vertical-timeline-element-subtitle">USP</h4>
          <p>
            
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}