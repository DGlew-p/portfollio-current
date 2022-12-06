import React, { useState } from "react";

import { useSnackbar } from "notistack";
import { FaLinkedinIn, FaGithub, FaWindowClose } from "react-icons/fa";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { CircularProgress, ButtonBase } from "@mui/material";
import { extLinkData } from "../../data";
import { HistoryEdu } from "@mui/icons-material";
import "./Contact.css";
import { landingData } from "../../data/landingData";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(null);
  const [errorCount, setErrorCount] = useState({
    senderName: true,
    email: true,
    message: true,
  });
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function openMessage(msgString, key) {
    setErrorCount({
      ...errorCount,
      [key]: true,
    });
    const action = (key) => (
      <div>
        <button
          className='snackbar-close'
          onClick={() => {
            closeSnackbar(key);
          }}>
          <FaWindowClose />
        </button>
      </div>
    );
    enqueueSnackbar(msgString, {
      variant: "warning",
      persist: true,
      preventDuplicate: true,
      key: key,
      action,
    });
  }

  function noErrorMessage(key) {
    setErrorCount((errorCount) => {
      const countCopy = { ...errorCount };
      delete countCopy[key];
      return countCopy;
    });

    closeSnackbar(key);
  }

  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
  }

  let handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;

    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,3})$/i
    );
    
    const validNameRegex =  RegExp(/^[A-Za-z]+( [A-Za-z]+){1,50}$/);
    
    const validMessageRegex = RegExp(/^\s*[\w!"'(),./:;?@~-]+(\s+[\w!"'(),./:;?@~-]+\s*){3,500}$/)
    let errorMessage = null; // eslint-disable-line

    switch (name) {
      case "senderName":
        setName(value);
        errorMessage =
         !validNameRegex.test(value)
            ? openMessage("Please enter your name. Letters only.", name)
            : noErrorMessage(name);
     
        break;
      case "email":
        setEmail(value);
        errorMessage = !validEmailRegex.test(value)
          ? openMessage("Please enter a valid Email", name)
          : noErrorMessage(name);

        break;
      case "message":
        setMessage(value);
        errorMessage = !validMessageRegex.test(value)
            ? openMessage("Please leave a longer message. Without special characters.", name)
            : noErrorMessage(name);

        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    setLoading(true);

    fetch("https://express-email-server.vercel.app/route/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer ",
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
        (success) => {
          setEmailSuccess(true);
          setLoading(false);
          resetForm();
        },
        (error) => {
          setEmailSuccess(false);
          setLoading(false);
          openMessage(
            <a
              href={extLinkData.linkedIn}
              target='blank'
              title='Link to my LinkedIn page'>
              Something went Wrong. Please message me on <u>LinkedIn</u>
            </a>,
            "fetchErr"
          );
          resetForm();
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
                  Name*
                </label>
                <input
                  placeholder='A Name'
                  value={name}
                  onChange={(e) => handleChange(e)}
                  type='text'
                  name='senderName'
                  className={"form-input"}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='Email' className={"label"}>
                  Email*
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
                  Message*
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

              <ButtonBase
                type='submit'
                disabled={Object.values(errorCount).length > 0 ? true : false}
                centerRipple={true}
                className={"send--btn"}
                onClick={(e) => handleSubmit(e)}>
                {loading ? (
                  <CircularProgress
                    className='circular-progress'
                    size='2.25rem'
                    sx={{
                      color: "inherit",
                      "&:hover": {
                        color: "inherit",
                      },
                    }}></CircularProgress>
                ) : (
                  <p>{!emailSuccess ? "Send" : "Sent"}</p>
                )}
                <div className='submit-icon'>
                  {!emailSuccess ? (
                    <AiOutlineSend className='send-icon' />
                  ) : (
                    <AiOutlineCheckCircle className='success-icon' />
                  )}
                </div>
              </ButtonBase>
            </form>
          </div>
          <div className='contacts-details'>
            <a
              href={extLinkData.linkedIn}
              className='personal-details'
              target={"blank"}>
              <div className={"detailsIcon"}>
                <FaLinkedinIn aria-label='LinkedIn' />
              </div>
              <p>LinkedIn</p>
            </a>
            <a
              href={extLinkData.github}
              className='personal-details'
              target={"blank"}>
              <div className={"detailsIcon"}>
                <FaGithub aria-label='GitHub' />
              </div>
              <p>GitHub</p>
            </a>
            <a
              href={landingData.resumePdf}
             download='CV_DarrenGlew'
              className='personal-details'
              target={"blank"}>
              <div className={"detailsIcon"}>
                <HistoryEdu />
              </div>
              <p>C.V</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
