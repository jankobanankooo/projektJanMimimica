import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ime: "",
      poruka: "",
    };
  }

  render() {
    return (
      <div className="section">
        <h1>Kontakt</h1>

        <p>
          Ukoliko vam treba preporuka apartmana, restorana ili dodatne
          informacije, obratite nam se putem emaila ili poruke na stranici.
        </p>

        <p>Želimo vam ugodan boravak i lijep odmor u Mimicama.</p>

        <p>Email: info@mimice.hr</p>

        <div className="contact-form">
          <input type="text" placeholder="Ime i prezime" />

          <textarea placeholder="Vaša poruka"></textarea>
        </div>
      </div>
    );
  }
}

export default Contact;
