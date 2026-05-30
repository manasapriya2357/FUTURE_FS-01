function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;