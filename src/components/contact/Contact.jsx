import { useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const [message,setMessage] = useState(false)
  function handleSubmit (e){
    e.preventDefault()
    setMessage(true)
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <textarea placeholder="message"></textarea>
          <button type="sumbit">send</button>
          {message && <span>message sended</span>}
        </form>
      </div>
    </div>
  );
}
