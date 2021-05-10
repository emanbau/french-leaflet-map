import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      height: '95vh',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }));

function Loader() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress size={75} color="secondary" />
        </div>
    )
}

export default Loader
