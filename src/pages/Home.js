import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />

      <section className="section">
        <h2 className="main-title">Dobrodošli u Mimice</h2>

        <p className="main-text">
          Malo dalmatinsko mjesto koje osvaja prekrasnim plažama, čistim morem i
          mirnom atmosferom idealnom za odmor.
        </p>

        <div className="home-gallery">
          <img
            src="https://www.visit-croatia.hr/photos/destinations/thumbs/Mimice-619bafbab88c7315608496_huge.jpg"
            alt="More"
          />

          <img
            src="https://cdn.kroati.de/images/uploads/reisefuehrer/kroatien/mitteldalmatien/mimice/mimice.jpg"
            alt="Plaža"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQGNQGopVlAhbeoUGp0q-VFppsIQLXlz2_Du4OAAQoqyqAZrhTlT_nNDun6MyJNqSAJdaIhx4sgojrue3lqUmELSKQo&s=19"
            alt="Priroda"
          />
        </div>

        <div className="info-box">
          <h3>Zašto posjetiti Mimice?</h3>

          <p>
            Mimice su savršeno mjesto za obiteljski odmor, uživanje u prirodi i
            opuštanje uz more. Tijekom ljeta mjesto privlači brojne turiste zbog
            svoje mirne atmosfere i prekrasnih pogleda.
          </p>
        </div>

        <div className="quote-box">
          <h3>"Mjesto gdje more, sunce i mir stvaraju savršen odmor."</h3>

          <p>
            Uživajte u domaćoj hrani, šetnjama uz obalu i nezaboravnim zalascima
            sunca koji Mimice čine posebnim mjestom na Jadranu.
          </p>
        </div>

        <div className="location-box">
          <div className="location-text">
            <h3>Mapa</h3>

            <p>
              Ova mini mapa daje nam idealan privid Mimica posebno turistima te
              lokacija za posjetiti.
            </p>
          </div>

          <img
            className="location-image"
            src="https://www.mak-usluge.hr/wp-content/uploads/2016/07/Mimice_Omis_2016_06_27_detalj.jpg"
            alt="lokacija"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
