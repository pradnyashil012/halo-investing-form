import * as React from 'react';
import {Button, Grid, Dialog, Typography } from '@material-ui/core';
import correct from '../correct.svg';
import { ArrowBack } from '@material-ui/icons';
import useStyles from './Styles';

const FormDialog = (props: any) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    // setOpen(open);
    
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Grid container>
      <Grid container item>
        <Dialog
          open={props?props.open:false}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Grid container className={classes.header}>
            <Grid item lg={3} xs={3} style={{marginLeft: 5}}>
              <img src={correct} alt="" />
            </Grid>
            <Grid item lg={8} xs={8}>
              <Typography className={classes.maintitle}>You'are all set!</Typography>
              <Typography className={classes.subtitle}>Someone will reach out to you soon.</Typography>
            </Grid>
          </Grid>
          <hr />
          <Grid container style={{marginTop: 10, marginBottom: 10}}>
            <Grid item  md={2}  xs={4}>
              <Button onClick={props.close} color="primary" startIcon={<ArrowBack className={classes.icon} />}>
              Back
            </Button>
            </Grid>
            <Grid item  md={8}  xs={5}></Grid>
            <Grid item  md={2}  xs={3}>
              <Button onClick={props.close} variant='contained' color="primary" autoFocus>
                Done
              </Button>
            </Grid>
          </Grid>
        </Dialog>
      </Grid>
    </Grid>
  );
}


export default FormDialog;