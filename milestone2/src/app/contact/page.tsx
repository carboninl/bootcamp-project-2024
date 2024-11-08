import styles from './Contact.module.css';

export default function Contact() {
  return (
    <main className={styles.mainContainer}>
      <h1 className='pageTitle'>Contact</h1>
      <form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          className={styles.input}
        />
        
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          className={styles.textarea}
        ></textarea>
        
        <input
          type="submit"
          value="Submit"
          className={styles.submitButton}
        />
      </form>
    </main>
  );
}
