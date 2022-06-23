import React from "react";
import "../styles/Contact.css";
import illustr from "../assets/dev/contact.webp";

const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <div id="bas">
        <div id="illustr">
          <img src={illustr} alt="illustr" />
        </div>
        <div class="container">
          <form action="action_page.php">
            <label for="fname">E-mail</label>
            <input type="text" id="fname" name="firstname" />
            <label for="lname">Sujet</label>
            <input type="text" id="lname" name="lastname" />
            <label for="subject">Message</label>
            <textarea id="subject" name="subject"></textarea>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
