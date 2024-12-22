"use client";
import { useState, useEffect } from "react";
import style from "./contactForm.module.css";
import emailjs from "@emailjs/browser";


export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
        emailjs.init('ksxDvK9ZU9xxdB5oI'); // Initialize EmailJS
    };

    return () => {
        document.body.removeChild(script); // Clean up script on component unmount
    };
}, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("sending email!")

    const templateParams = {
      from_name: name,
      message: message,
      reply_to: email,
    };

    console.log(templateParams)

    emailjs.send("default_service", "template_xwjevkp", templateParams).then(
      (res) => {
        console.log("SUCCESS!", res.status, res.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.contactForm}>
        <label className={style.formLabel}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={style.formInput}
        ></input>
        <label className={style.formLabel}>Email (optional)</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={style.formInput}
        ></input>
        <label className={style.formLabel}>Message</label>
        <input
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={style.formInput}
        ></input>

        <button type="submit" className={style.formButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
