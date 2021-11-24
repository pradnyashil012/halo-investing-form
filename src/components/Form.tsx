import React from 'react';
import { Card, CardContent, TextField, Button, Typography, Grid } from "@material-ui/core";
import { ChangeEvent, useState } from "react";

//components
import AlertDialog from './FormDialog';
import Header from './Header';
import useStyles from './Styles';

const initialValues = {
    firstName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: '',
    email: '',
    emailError: '',
    department: '',
    departmentError: '',
    message: '',
    messageError: '',
    createdDate: new Date()
}

const Form = (props: any) => {

    const classes = useStyles();
    const [form, setForm] = useState(initialValues);
    const [displayAlert, setDisplayAlert] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const validate = () => {
        let isError = false;
        const errors = {
            firstNameError:"",
            lastNameError : "", 
            emailError: "",
            departmentError: "",
            messageError: ""
        };
    
        if (form.message.length <= 3) {
        isError = true;
        errors.messageError = "Please enter a message to your support representative";
        }
    
        if (form.email.indexOf("@") === -1) {
        isError = true;
        errors.emailError = "Requires valid email.";
        }

        if (form.firstName.length <= 1) {
            isError = true;
            errors.firstNameError = "Please enter First Name.";
        }

        if (form.lastName.length <= 1) {
        isError = true;
        errors.lastNameError = "Please enter Last Name.";
        }

        if (form.department.length <= 3) {
        isError = true;
        errors.departmentError = "Please enter Department Name.";
        }
    
        setForm({
          ...form,
          ...errors
        });
    
        return isError;
      };

      

    const saveDetails = () => {
        const err = validate();
        console.log(form);
        if(!err)
        {
            return setDisplayAlert(true);
        }
    }

    const handleClose = () => {
        setDisplayAlert(false);
        setForm(initialValues);
    }

    return (
        <>
        <Grid container>
            <Grid container item>
                <Grid lg={1} xs={12}></Grid>
                <Grid container lg={10} xs={12}>
                    <Card>
                        <Header Title={props.Title} Description={props.Description} />
                            <hr />
                            <CardContent className="row">
                                <Grid container lg={2} md={1} sm={12} xs={12}></Grid>
                                <Grid container lg={8} md={10} sm={12} xs={12} spacing={2} style={{marginBottom: 15}}>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <TextField
                                            required
                                            label="First Name"
                                            fullWidth
                                            variant="outlined"
                                            value={form.firstName}
                                            
                                            onChange={handleChange}  
                                            name="firstName"
                                            />
                                            {form.firstNameError && (
                                                <Typography
                                                style={{ marginTop: "0", color: "red", fontWeight: "200" }}
                                                >
                                                {form.firstNameError}
                                                </Typography>
                                            )}
                                        </Grid>
                                        
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <TextField
                                            required
                                            label="Last Name"
                                            fullWidth
                                            variant="outlined"
                                            value={form.lastName}
                                            
                                            onChange={handleChange}  
                                            name="lastName"
                                            />
                                            {form.lastNameError && (
                                                <Typography
                                                style={{ marginTop: "0", color: "red", fontWeight: "200" }}
                                                >
                                                {form.lastNameError}
                                                </Typography>
                                            )}
                                        </Grid>
                                    
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <TextField
                                        required
                                        label="Email Address"
                                        fullWidth
                                        variant="outlined"
                                        value={form.email}
                                        onChange={handleChange} 
                                        
                                        name="email"
                                        />
                                        {form.emailError && (
                                            <Typography
                                            style={{ marginTop: "0", color: "red", fontWeight: "200" }}
                                            >
                                            {form.emailError}
                                            </Typography>
                                        )}
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <TextField
                                        
                                        label="Department"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChange}  
                                        value={form.department}
                                        name="department"
                                        />
                                        
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <TextField
                                        required
                                        placeholder="Message"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        variant="outlined"
                                        value={form.message}
                                        onChange={handleChange} 
                                        
                                        name="message"
                                        />
                                        {form.messageError && (
                                            <Typography
                                            style={{ marginTop: "0", color: "red", fontWeight: "200" }}
                                            >
                                            {form.messageError}
                                            </Typography>
                                        )}
                                    </Grid>
                                    
                                </Grid>
                                <Grid container lg={2} md={1} sm={12} xs={12}></Grid>
                                <hr />
                                <Grid lg={10} md={10} sm={12} xs={12}></Grid>
                                <Grid lg={2} md={2} sm={12} xs={12}>
                                    {
                                        !form.firstName || !form.lastName || !form.email || !form.message
                                        ? (
                                            <Button disabled raised-button="true" variant="contained">Submit</Button>
                                        ) : (
                                            <Button onClick={(e:any)=> saveDetails()} raised-button="true" color="primary" variant="contained">Submit</Button>
                                        )
                                    }
                                </Grid>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid lg={1} xs={12}></Grid>
            </Grid>
        </Grid>
        {displayAlert && <AlertDialog open={true} close={handleClose} />}
        </>
    )
}

export default Form;