import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className="wrapper contact">
        <form action="mailto:derkrampus@icloud.com?subject=Hello from the web" method="post" encType="text/plain">
          <div className="form-group">
            <label htmlFor="formName">Name<input type="text" className="form-control" name="formName" id="formName" placeholder="Name" /></label>
          </div>
          <div className="form-group">
            <label htmlFor="formEmail">Email address<input type="email" className="form-control" name="formEmail" id="formEmail" placeholder="Enter email" /></label>
          </div>
          <div className="form-group">
            <label htmlFor="formMessage">Message<textarea className="form-control" name="formMessage" id="formMessage" rows="3"></textarea></label>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  );
}
