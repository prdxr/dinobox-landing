export default function Partners() {
  return (
    <section id="partners" className="section has-background-beige">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Наши партнёры</h2>
        <div className="columns is-vcentered">
          <div className="column is-7">
            <div className="partner-info">
              <figure className="partner-logo">
                <img src="/assets/partner-logo-1.jpg" alt="Логотип партнёра" />
              </figure>
              <div className="partner-text">
                <h3 className="subtitle partner-name">Жучки-паучки</h3>
                <p className="partner-description">
                  Образовательное антикафе с террариумными животными
                </p>
              </div>
            </div>
          </div>
          <div className="column is-5">
            <figure className="partner-photo">
              <img src="/assets/partner-photo-1.jpeg" alt="Фото партнёра" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}