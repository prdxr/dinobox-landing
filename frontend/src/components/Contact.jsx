export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container has-text-centered">
        <h2 className="title contact-text">Напишите нам по адресу:</h2>
        <a href="mailto:dinobox@example.ru" className="contact-email">dinobox@example.ru</a>
        <div className="buttons is-centered">
          <a href="/contact" className="button is-primary is-large">Связаться с нами</a>
        </div>
      </div>
    </section>
  );
}