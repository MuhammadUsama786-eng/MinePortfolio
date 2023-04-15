import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '') {
      setNameError(true);
    }
    if (phone === '') {
      setPhoneError(true);
    }
    if (email === '') {
      setEmailError(true);
    }
    if (subject === '') {
      setSubjectError(true);
    }
    if (message === '') {
      setMessageError(true);
    }
    // Handle form submission here

    if(name && phone && email && message)
    {
    axios.post('http://localhost:3000/users/mail',{
      name,
      phone,
      email,
      subject,
      message
    }).then(res=>{
      if(res.status)
      {
        toast(res.data.message, { hideProgressBar: false, autoClose: 3000, type: 'success' })
        setName('')
        setPhone('')
        setEmail('')
        setSubject('')
        setMessage('')
      }

    })
  }

  };

  return (
    <Box className = "formBg" sx = {{ background: '#ebecf1',flexGrow: 1,boxShadow: "2px 9px 15px 4px rgba(0, 0, 0, 0.5)"}}>
      <ToastContainer />

    <form onSubmit={handleSubmit} style={{padding:'1.7rem'}}>
      <Box sx={{ display: 'flex', flexWrap: 'nowrap',gap:'1rem' }}>
  <TextField
    label="Name"
    variant="outlined"
    value={name}
    onChange={(event) => setName(event.target.value)}
    error={nameError}
    margin="normal"
    fullWidth
    style={{ background: 'white' }}
  />
  <TextField
    label="Phone number"
    variant="outlined"
    value={phone}
    onChange={(event) => setPhone(event.target.value)}
    error={phoneError}
    margin="normal"
    fullWidth
    style={{ background: 'white' }}
    type="tel"
   
    inputProps={{
      pattern: "^\\d{4}-\\d{7}$",
      title: "Please enter a valid phone number in the format 0300-1234456",
    }}
  />
</Box>

      <TextField
        label="Email"
        variant="outlined"
        type = "email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={emailError}
        margin="normal"
        fullWidth
        style={{ background: 'white' }}
      />
      <TextField
        label="Subject"
        variant="outlined"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
        error={subjectError}
        margin="normal"
        fullWidth
        style={{ background: 'white' }}
      />
      <TextField
        label="Message"
        variant="outlined"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        error={messageError}
        margin="normal"
        fullWidth
        multiline
        rows={8}
        style={{ background: 'white' }}
      />
      <Button variant="contained" color="primary" type="submit" sx={{mt:'2rem',width:'100%'}} >
        Submit
      </Button>
    </form>
    </Box>
  );
};

export default ContactForm;
