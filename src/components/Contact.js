import React from "react";
import "../css/Contact.css";

const Contact = props => {
  return (
    <div
      className={
        props.modal === true ? "form-container" : "form-container hidden"
      }
    >
    <div className='close'>
          <h3 onClick={e => props.setModal(false)}>x</h3>
      </div>
      <h2>Contact Me</h2>
      <form
        action="https://formcarry.com/s/A1fDSooRTOQ"
        method="POST"
        accept-charset="UTF-8"
      >
        <div className="form-name">
          <label  htmlFor="name">
            Name:{" "}
          </label>
          <input type="text" name="name" />
        </div>
        <div className="form-email">
          <label htmlFor="email">
            Email:{" "}
          </label>
          <input type="text" name="email" />
        </div>
        <div className="form-message">
          <label  htmlFor="message">
            Message:{" "}
          </label>
          <textarea type="message" name="message" />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
