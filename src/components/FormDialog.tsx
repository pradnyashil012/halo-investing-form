import * as React from 'react';
import {Button, makeStyles, Dialog, Typography } from '@material-ui/core';
import correct from '../correct.svg';
import { ArrowBack } from '@material-ui/icons';
import useStyles from './Styles';

const AlertDialog = (props: any) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    // setOpen(open);
    
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div className="container">
      <div className="row">
        <Dialog
          open={props?props.open:false}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className={classes.header}>
            <div className="col-lg-2 col-xs-1">
              <img src={correct} alt="" />
            </div>
            <div className="col-lg-10 col-xs-11">
              <Typography className={classes.maintitle}>You'are all set!</Typography>
              <Typography className={classes.subtitle}>Someone will reach out to you soon.</Typography>
            </div>
          </div>
          <hr />
          <div className="d-flex mb-2">
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <Button onClick={props.close} color="primary" startIcon={<ArrowBack className={classes.icon} />}>
             Back
          </Button>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8"></div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <Button onClick={props.close} variant='contained' color="primary" autoFocus>
              Done
            </Button>
          </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}


export default AlertDialog;