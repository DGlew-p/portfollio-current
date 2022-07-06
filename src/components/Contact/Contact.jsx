import React, { useState } from "react";

import { useSnackbar } from "notistack";
import { FaLinkedinIn, FaGithub, FaWindowClose } from "react-icons/fa";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { extLinkData, contactsData } from "../../data";

import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(null);

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function openMessage(msgString, id) {
    const action = (id) => (
      <div>
        <button
          className='snackbar-close'
          onClick={() => {
            closeSnackbar(id);
          }}>
          <FaWindowClose />
        </button>
      </div>
    );
    enqueueSnackbar(msgString, {
      variant: "warning",
      persist: true,
      preventDuplicate: true,
      key: id,
      action,
    });
  }

  function noErrorMessage(key) {
    closeSnackbar(key);
  }

  let handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;

    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,3})$/i
    );

    let errorMessage = null;
    switch (name) {
      case "name":
        setName(value);
        errorMessage =
          value.length < 3
            ? openMessage("Enter your name", name)
            : noErrorMessage(name);

        break;
      case "email":
        setEmail(value);
        errorMessage = !validEmailRegex.test(value)
          ? openMessage("Enter a valid Email", name)
          : noErrorMessage(name);

        break;
      case "message":
        setMessage(value);
        errorMessage =
          value.length < 5
            ? openMessage("Please leave a longer message", name)
            : noErrorMessage(name);

        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    setLoading(true);

    const fetchResponse = fetch("/route/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        messageHtml: message,
      }),
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server Error");
        }
        return res.json();
      })
      .then(
        (fetchResponse) => {
          console.log("fetch success");
          console.log(fetchResponse.json());
          setEmailSuccess(true);
          setLoading(false);
        },
        (err) => {
          console.log("fetch fail");
          setEmailSuccess(false);
          setLoading(false);
          openMessage(
            "Something went Wrong. Please message me on LinkedIn",
            "email"
          );
        }
      );
  };

  return (
    <div className='contacts' id='contacts'>
      <div className='contacts--container'>
        <h1>Contact Me</h1>
        <div className='contacts-body'>
          <div className='contacts-form'>
            <form onSubmit={handleSubmit}>
              <div className='input-container'>
                <label htmlFor='Name' className={"label"}>
                  Name
                </label>
                <input
                  placeholder='A Name'
                  value={name}
                  onChange={(e) => handleChange(e)}
                  type='text'
                  name='name'
                  className={"form-input"}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='Email' className={"label"}>
                  Email
                </label>
                <input
                  placeholder='Avery@name.com'
                  value={email}
                  onChange={(e) => handleChange(e)}
                  type='email'
                  name='email'
                  className={"form-input"}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='Message' className={"label"}>
                  Message
                </label>
                <textarea
                  placeholder='Type your message....'
                  value={message}
                  onChange={(e) => handleChange(e)}
                  type='text'
                  name='message'
                  className={"form-message"}
                />
              </div>

              <div className='submit-btn'>
                <button
                  type='submit'
                  className={""}
                  onClick={(e) => handleSubmit(e)}>
                  <p>{!emailSuccess ? "Send" : "Sent"}</p>
                  <div className='submit-icon'>
                    <AiOutlineSend
                      className='send-icon'
                      style={{
                        animation: !emailSuccess
                          ? "initial"
                          : "fly 0.8s linear both",
                        position: emailSuccess ? "absolute" : "initial",
                      }}
                    />
                    <AiOutlineCheckCircle
                      className='success-icon'
                      style={{
                        display: emailSuccess ? "none" : "inline-flex",
                        opacity: !emailSuccess ? "0" : "1",
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
          </div>
          <div className='contacts-details'>
            <a
              href={`mailto:${contactsData.email}`}
              className='personal-details'>
              <div className={"detailsIcon"}>
                <FiAtSign />
              </div>
              <p>{contactsData.email}</p>
            </a>
            <a href={`tel:${contactsData.phone}`} className='personal-details'>
              <div className={"detailsIcon"}>
                <FiPhone />
              </div>
              <p>{contactsData.phone}</p>
            </a>
            <div className='personal-details'>
              <div className={"detailsIcon"}>
                <HiOutlineLocationMarker />
              </div>
              <p>{contactsData.address}</p>
            </div>

            <div className='socialmedia-icons'>
              {extLinkData.github && (
                <a
                  href={extLinkData.github}
                  target='_blank'
                  rel='noreferrer'
                  className={"socialIcon"}>
                  <FaGithub aria-label='GitHub' />
                </a>
              )}

              {extLinkData.linkedIn && (
                <a
                  href={extLinkData.github}
                  target='_blank'
                  rel='noreferrer'
                  className={"socialIcon"}>
                  <FaLinkedinIn aria-label='GitHub' />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
