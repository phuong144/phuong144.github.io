
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
import Link from '@material-ui/core/Link';
import GoldenMean from './images/GoldenMean.jpg';
import Njoy from './images/Njoy.png';
import splits from './images/splits.jpg';
import resistor from './images/resistor.png';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);


  const handleOpen = (e) => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = (e) => {
    setOpen2(true)
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen3 = (e) => {
    setOpen3(true)
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen4 = (e) => {
    setOpen4(true)
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  return(
    <div id='projects' className={classes.heroContent}>
      <h1 style={{textAlign:'center'}}>PROJECTS</h1>
      <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Njoy}
                  title="Njoy"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Njoy
                  </Typography>
                  <Typography>
                    Make time for the things you enjoy
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <a target="_blank" href='https://njoy-app.herokuapp.com/'>View</a>
                  </Button>
                  <Button name='1' size="small" color="primary" onClick={handleOpen4}>
                    Learn More
                  </Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open4}
                    onClose={handleClose4}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500
                    }}
                  >
                    <Fade in={open4}>
                      <div className={classes.paper}>
                        <h2>Njoy</h2>
                        <p>
                          Njoy is a full stack web application that aims to give users the opportunity to make time for the things they enjoy doing.
                          By inputting activities with their respective timeslots, the app will generate a schedule for those activities for you.
                          You can also drag and drop any scheduled activity to make it flexible to your own schedule!
                        </p>
                        <Button size="small" color="primary">
                          <a target="_blank" href='https://njoy-app.herokuapp.com/'>View</a>
                        </Button>
                      </div>
                    </Fade>
                  </Modal>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={GoldenMean}
                  title="Golden Mean"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Golden Mean
                  </Typography>
                  <Typography>
                    The Golden Mean is a podcast web application
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <a target="_blank" href='https://the-golden-mean.web.app/'>View</a>
                  </Button>
                  <Button name='1' size="small" color="primary" onClick={handleOpen}>
                    Learn More
                  </Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500
                    }}
                  >
                    <Fade in={open}>
                      <div className={classes.paper}>
                        <h2>The Golden Mean</h2>
                        <p>
                          The Golden Mean is a podcast web application that I developed for some clients in React.js and Firebase.
                          It is fully functional, maintained, and deployed with over 40 weekly listens! The podcast hosts have access
                          to adminstrative podcast CRUD operations and I developed cloud functions to email all subscribers an alert
                          whenever a new podcast is uploaded!
                        </p>
                        <Button size="small" color="primary">
                          <a target="_blank" href='https://the-golden-mean.web.app/'>View</a>
                        </Button>
                      </div>
                    </Fade>
                  </Modal>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={splits}
                    title="splits"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Splits
                    </Typography>
                    <Typography>
                      A web app designed to view your workout of the day
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <a target="_blank" href='https://splits-app.herokuapp.com'>View</a>
                    </Button>
                    <Button size="small" color="primary" onClick={handleOpen2}>
                      Learn More
                    </Button>
                    <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open2}
                    onClose={handleClose2}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500
                    }}
                    >
                      <Fade in={open2}>
                        <div className={classes.paper}>
                          <h2>Splits</h2>
                          <p>
                            Developed a full stack web application designed to view your workout of the day
                            depending on your workout split fast and efficiently. The efficiency comes from
                            incorporating JSWT to view your workout instantly after initial login. Built with
                            MongoDB, Express, Node.js, React.js, Redux.
                          </p>
                          <Button size="small" color="primary">
                            <a target="_blank" href='https://splits-app.herokuapp.com'>View</a>
                          </Button>
                        </div>
                      </Fade>
                    </Modal>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={resistor}
                    title="resistor"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Resistor Calculator
                    </Typography>
                    <Typography>
                      Developed an Amazon Alexa Skill 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <a target="_blank" href='https://github.com/Xurtel/resistor-calculator'>View</a>
                    </Button>
                    <Button size="small" color="primary" onClick={handleOpen3}>
                      Learn More
                    </Button>
                    <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open3}
                    onClose={handleClose3}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500
                    }}
                    >
                      <Fade in={open3}>
                        <div className={classes.paper}>
                          <h2>Resistor Calculator</h2>
                          <p>
                          Developed an Amazon Alexa skill during CruzHacks that takes in 4 voice user color band inputs and returns the correct
                          total resistance and tolerance
                          </p>
                          <Button size="small" color="primary">
                            <a target="_blank" href='https://github.com/Xurtel/resistor-calculator'>View</a>
                          </Button>
                        </div>
                      </Fade>
                    </Modal>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
    </div>
  );
}