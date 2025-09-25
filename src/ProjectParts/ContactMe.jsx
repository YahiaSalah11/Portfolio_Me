import React from "react";
import { Typography, Button } from '@mui/material';

function ContactMe() {
  return (
    <section id="contact" className="contact-section">
      <Typography variant="h4" className="contact-title">Contact Me</Typography>
      
      <div className="contact-buttons">
        <Button
          variant="contained"
          color="primary"
          href="mailto:yahiaelsherif2002@gmail.com"
          className="contact-button"
        >
          Email Me
        </Button>

        <Button
          variant="contained"
          color="success"
          href="https://wa.me/201069559925"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          WhatsApp Me
        </Button>
      </div>
    </section>
  );
}

export default ContactMe;
