import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "237fb18c-f1d0-465e-8afa-03cba32ceecf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Send successfully!",
        icon: "success"
      });
    }
  };



  return (
    <form id='from' onSubmit={onSubmit}>
      <h2>Contact <span id='front'>Me</span></h2>
      <div id='from2'>
          
          <div id='input-box'>
            <input type='text' placeholder='Full Name' name='name'></input>
            <input type='email' placeholder='Email Address' name='email'></input>
          </div>
          <div id='input-box'>
            <input type='number' placeholder='Contact Number' name='Contact Number'></input>
            <input type='text' placeholder='Email Subject' name='Subject'></input>
          </div>
          <textarea name='Message' id='textarea' cols='30' rows='10' placeholder='Your Message' ></textarea>
          <input type='Submit' value='Send Message' id='btn'></input>
      </div>   
    </form>
  )
}

export default Contact
