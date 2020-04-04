import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className="wrapper contact">
        <form action="mailto:derkrampus@icloud.com?subject=Hello from the web" method="post" enctype="text/plain">
          <div class="form-group">
            <label for="formName">Name</label>
            <input type="text" class="form-control" name="formName" id="formName" placeholder="Name" />
          </div>
          <div class="form-group">
            <label for="formEmail">Email address</label>
            <input type="email" class="form-control" name="formEmail" id="formEmail" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label for="formMessage">Message</label>
            <textarea class="form-control" name="formMessage" id="formMessage" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  );
}
