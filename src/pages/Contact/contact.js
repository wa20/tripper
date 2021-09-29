import React, { Component } from "react";
import Footer from "../../components/Footer/footer";
import ContactForm from "../../components/contactForm/contactForm";
import Nav from "../../components/Navbar/navbar";

const Contact = () => (
  <div>
    <Nav />

    <ContactForm />

    <div style={{ position: "relative", bottom: 0, width: "100%" }}>
      <Footer />
    </div>
  </div>
);

export default Contact;
