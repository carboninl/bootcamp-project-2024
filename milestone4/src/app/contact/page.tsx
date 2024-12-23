import ContactForm from '@/components/contactForm';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <main className={styles.mainContainer}>
      <h1 className='pageTitle'>Contact</h1>
      <ContactForm></ContactForm>
    </main>
  );
}