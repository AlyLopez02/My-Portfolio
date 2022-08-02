import React from 'react';

export default function Contact() {

  return (
    <div className='container align-items-center'>
      <h2 className='text-center m-5'><u>Contact Page</u></h2>

      <div class="alert alert-warning text-center" role="alert">
        This form is currently not working so please contact me directly with the information provided below it!
      </div>


      <div className='container mb-5'>
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
      </div>

      <div className='text-center mb-4'>
        <h5>If you do not want to use the contact form, you can reach me via the following information:</h5>
        <ul className='list-group'>
          <li className='list-group-item'>Email: <a href="mailto:amlopezofficial@gmail.com">amlopezofficial@gmail.com</a></li>
          <li className='list-group-item'>Phone Number: 201-551-1297</li>
        </ul>
      </div>

    </div>
  );
}

//THEN I see a contact form with fields for a name, an email address, and a message