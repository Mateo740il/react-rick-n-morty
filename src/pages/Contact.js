import React from "react";
import { Form, useActionData,redirect } from "react-router-dom";

const Contact = () => {
    const data=useActionData()
  return (
    <div className="contact">
      <h2>Contact me</h2>
      <Form method="post" action="/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button className="submitBtn">Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export default Contact;

export const contactAction = async ({ request }) => {
    const data = await request.formData()
  
    const submission = {
      email: data.get('email'),
      message: data.get('message')
    }
  
    console.log(submission)
  
    // send your post request
  
    if (submission.message.length < 10) {
      return {error: 'Message must be over 10 chars long.'}
    }
  
    // redirect the user
    return redirect('/')
  }
  