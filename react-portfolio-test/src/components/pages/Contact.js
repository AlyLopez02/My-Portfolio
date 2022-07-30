import React from 'react';

export default function Contact() {

  return (
    <div>
      <h2>Contact Page</h2>

      <form className='was-validated'>

        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" required />
          <div className='invalid-feedback'>Please input your name!</div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="text" id="email" class="form-control" pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$' required />
          <div className='invalid-feedback'>Please input your email correctly!</div>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea type="text" class="form-control" id="message" required />
          <div className='invalid-feedback'>Please input a message!</div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>

      </form>

      <h5>If you do not want to use the contact form, you can reach me via the following information:</h5>
      <ul>
        <li>Email: <a href="mailto:amlopezofficial@gmail.com">amlopezofficial@gmail.com</a></li>
        <li>Phone Number: 201-551-1297</li>
      </ul>
    </div>
  );
}

//THEN I see a contact form with fields for a name, an email address, and a message