/* eslint no-unused-vars: 0 */

import { navigate } from "gatsby";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import PropTypes from "prop-types";
import React from "react";
import './styles.scss'

const FormItem = Form.Item;
const { TextArea } = Input;
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import { ThemeContext } from "../../layouts";

const Contact = props => {
  const { getFieldDecorator } = props.form;

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        sendMessage(values);
      }
    });
  }

  function sendMessage(values) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(() => {
        console.log("Form submission success");
        navigate("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        this.handleNetworkError();
      });
  }

  function handleNetworkError(e) {
    console.log("submit Error");
  }

  return (
    <div className="contact-form__container">
            <h2 className="contact-form__h3">Want To Get In Touch?</h2>
            <div className="contact-form__subtitle">Lets Talk.</div>
            <form action="https://api.formbucket.com/f/buk_QRI7UVfOXHzWz4K9Xp6Bg4Fk" method="post">
                    <label className="form__label">name<span className="form__required"> *</span></label>
                    <input required className="form__left-input" type="text" name="firstname" placeholder="First" />
                    <input required className="form__right-input" type="text" name="lastname" placeholder="Last" />
                    <div className="form__details">
                        <div className="form__detail">
                            <label className="form__label">email<span className="form__required"> *</span></label>
                            <input required className="form__left-input" type="text" name="email" placeholder="Your Email Adress" />
                        </div>
                        <div className="form__detail">
                            <label className="form__label">phone</label>
                            <input className="form__right-input" type="text" name="phone" placeholder="Your Phone Number" />
                        </div>
                    </div>
                <label className="form__label">message</label>
                <textarea className="form__comments" type="text" name="message" placeholder="Questions or Comments"></textarea>
                <button className="contact-form__button button button--cta" type="submit">get in touch</button>
            </form>
        </div>
  );
};

Contact.propTypes = {
  form: PropTypes.object
};

const ContactForm = Form.create({})(Contact);

export default ContactForm;
