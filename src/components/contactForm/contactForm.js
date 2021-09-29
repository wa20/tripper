
import React from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button, Icon } from 'semantic-ui-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com';
import "./contact.css";
require("dotenv").config();


const ContactForm = () => {

const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  

  const toastifySuccess = () => {
    toast('Your Message Has Been Sent!', {
      position: 'bottom-right',
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);

    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

     reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }

  };

 
return (
   
<div style={{ padding: "8em 0em"}}>

      <Typography variant="h6" gutterBottom className="align" style={{marginBottom:"2rem"}}>
        Write A Message
      </Typography>

      <form className="align" onSubmit={handleSubmit(onSubmit)} noValidate >
    <Grid container spacing={3} style={{width:'50vw'}} >

        <Grid item xs={12} sm={6}>
          <TextField required name="name" label="Name" fullWidth placeholder="Enter Your Name" 
          id="name" 
          {...register('name', {
            required: { value: true, message: 'Enter Your Name' },
            })}
          />
          {errors.name && <span className='errorMessage' style={{color:"red"}}>{errors.name.message}</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required name="email" label="Email" fullWidth placeholder="Enter Your Contact Email"
          id="email"  
          {...register('email', {
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          })}
          />
           {errors.email && (
            <span className='errorMessage' style={{color:"red"}}>Enter a valid email address</span>)}
        </Grid>
       
        <Grid item xs={12}>

        <TextField required  name="subject" label="Subject" fullWidth placeholder="Subject"
          id="subject" 
          {...register('subject', {
            required: { value: true, message: 'Enter a subject' },
          })}
          />
          {errors.subject && (
         <span className='errorMessage' style={{color:"red"}}>{errors.subject.message}</span>)}  
        </Grid>

    <Grid item xs={12}>
        <TextField required label="Message" multiline fullWidth rows={4} placeholder="Write Message"
        id="message"
        {...register('message', {
            required: true
          })}
           />
           {errors.message && <span className='errorMessage' style={{color:"red"}}>Enter a message</span>}
    </Grid>

    <Grid item xs={12} className="align" style={{ padding: "5em 0em"}}>
        <Button type="submit"  icon labelPosition='right'>Send Message <Icon name='send' /></Button>
        </Grid>
    </Grid>
      </form>
      <ToastContainer />
</div>
   
  )

  

  
}

export default ContactForm