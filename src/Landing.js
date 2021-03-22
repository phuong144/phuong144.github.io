import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link'
import me from './images/me.jpg';
import resume from './images/resume.pdf';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  container: {
    maxWidth: '800px',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <img src={me} alt="It's me, Pat!" width='240px' height='auto'
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex',
                borderRadius: '50%',

              }}></img>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Patrick Phuong
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Software Developer
              <br></br>
              <a target='_blank' href={resume}>Resume</a>
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <h1 id='aboutme' style={{textAlign:'center'}}>ABOUT ME</h1>
          <Typography variant="h5" align="center" color="textPrimary" paragraph>
            Hello! My name is Patrick Phuong. I am a new graduate from UC Santa Cruz with a bachelors in Computer Science.
            My key interests within software engineering include full stack web development, cloud computing, and computer security!
            Besides coding, I love to workout, focus on my diet, play volleyball, play video games, and finally spend time
            with loved ones.
          </Typography>
          <br></br>
          <Typography variant="h5" align="center" color="textPrimary" paragraph>
            I am currently working at HydroLogic Purification Systems as a software developer. So far, I've built HyperLogic, a
            mobile web app that allows customers to register their commerical reverse osmosis systems. I also just finished building an 
            internal web app for admins to search through the associated database and implemented a ticket logging system!
          </Typography>
        </Container>
      </main>
      {/* Footer */}
    </React.Fragment>
    </div>
  );
}