import style from "./resume.module.css";

export default function Resume() {
  return (
      <div className={style.PDFContainer}>
        <h1 className='pageTitle'>Resume</h1>
        <a href="/resume.pdf" download className={style.download}>Click to Download</a>
        <iframe src="/resume.pdf" className={style.embeddedPDF}></iframe>
      </div>
  );
}
