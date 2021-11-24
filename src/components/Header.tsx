import { Typography, Grid } from "@material-ui/core";
import React from "react";
import logo from '../logo.svg';
import useStyles from "./Styles";

const Header = (props: any) => {

    const classes = useStyles();
    return (
        <Grid container className={classes.headerItems}>
            <Grid  lg={1} xs={2} className={classes.first}>
                <img src={logo} alt="" />
            </Grid>
            <Grid lg={4} xs={6} className={classes.second}>
                <Typography className={classes.title}>{props.title}</Typography>
                <Typography className={classes.description}>{props.description}</Typography>
            </Grid>
            <Grid lg={7} xs={4}></Grid>
        </Grid>
    )
}

export default Header;