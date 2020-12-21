import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import resume from './images/resume.pdf';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'sticky',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: 'white'
  },
  navHeader: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Hidden xsDown>
          <Typography className={classes.navHeader} variant="h6">
            PATRICK PHUONG
          </Typography>
          </Hidden>
          <a target='_blank' href='https://www.linkedin.com/in/patrick-phuong/'><Avatar className={classes.menuButton} alt="LinkedIn" src={linkedin} /></a>
          <a target='_blank' href='https://github.com/phuong144'><Avatar className={classes.menuButton} alt="LinkedIn" src={github} /></a>
          <div className={classes.title}></div>
          <a className={classes.navHeader} style={{color:'white'}}href='#aboutme'>ABOUT ME</a>
          <a className={classes.navHeader} style={{color:'white'}}href='#projects'>PROJECTS</a>
          <a className={classes.navHeader} style={{color:'white'}}href='#contact'>CONTACT</a>
        </Toolbar>
      </AppBar>
    </div>
  );
}