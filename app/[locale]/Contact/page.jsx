"use client";
import React from "react";
import { FaMapMarkedAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
import "./style.css";
import NavBar from "@/components/NavBar";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Footer from "@/components/Footer";

function Contact() {
  return (
    <div>
      <NavBar currentScreen={2} />
      <div className="body bg-[url('/BG.jpeg')] text-black">
        <div className="contact-section">
          <div className="contact-info">
            <div>
              <FaMapMarkedAlt className="icon" />
              Address, city, Country
            </div>
            <div>
              <FaEnvelope className="icon" />
              contact@gmail.com
            </div>
            <div>
              <FaPhone className="icon" />
              +213 000000000
            </div>
            <div>
              <FaClock className="icon" />
              Ouvert de 8:00 AM à 5:00 PM
            </div>
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .min(2, "Too Short!")
                  .max(50, "Too Long!")
                  .required("Required"),
                email: Yup.string().email("Invalid email").required("Required"),
                message: Yup.string()
                  .min(2, "Too Short!")
                  .max(500, "Too Long!")
                  .required("Required"),
              })}
              onSubmit={(values, actions) => {
                console.log(values);
                alert("Form submitted!");
                actions.setSubmitting(false);
              }}>
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <Field
                    name="name"
                    type="text"
                    className="text-box"
                    placeholder="Your Name"
                    required
                  />
                  {errors.name && touched.name ? (
                    <div className="input-feedback text-red-600">
                      {errors.name}
                    </div>
                  ) : null}

                  <Field
                    name="email"
                    type="email"
                    className="text-box"
                    placeholder="Your Email"
                    required
                  />
                  {
                    //     errors.email && touched.email ? (
                    //     <div className="input-feedback">{errors.email}</div>
                    //   ) : null
                  }

                  <Field
                    name="message"
                    as="textarea"
                    rows="5"
                    placeholder="Your Message"
                    required
                  />
                  {
                    //     errors.message && touched.message ? (
                    //     <div className="input-feedback">{errors.message}</div>
                    //   ) : null
                  }

                  <button
                    type="submit"
                    className="send-btn"
                    disabled={isSubmitting}>
                    Send
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
