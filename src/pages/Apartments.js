import PlaceCard from "../components/PlaceCard";

function Apartments() {
  return (
    <div className="section">
      <h1>Apartmani</h1>

      <div className="cards">
        <PlaceCard
          image="https://www.apartmanija.hr/slike/apartments/28377_4688_1660419207.jpg"
          title="Villa Noa"
          text="Moderan smještaj sa bazenom i đakuzijem.
          ⭐ 4.4
          Kontakt: villa.noa@gmail.com"
        />

        <PlaceCard
          image="https://i.adriatic.hr/private-accommodation/18149/as-18149-a/mimice-studio-apartment-terrace-1-u.jpg"
          title="Apartman Mimica"
          text="Prekrasan pogled na more i mirna lokacija.
          ⭐ 4.7
          Kontakt: mimica.apartmani@gmail.com"
        />

        <PlaceCard
          image="https://www.smokvina.com/Slike/Smjestaj_objekt/2664/n_app_mimice_145_smokvina_travel_201541014146.jpg"
          title="Apartmani Jurić"
          text="Ugodan smještaj u starom selu.⭐4.5        
            Kontakt: juric@gmail.com"
        />

        <PlaceCard
          image="https://q-xx.bstatic.com/xdata/images/hotel/840x460/697036152.jpg?k=67a926ed9cab4b4fdaef8f76b26e20dd1b847093a92c734e4d4ecd145aca8b20&o="
          title="Villa More"
          text="Mirna lokacija i prekrasan pogled.
          ⭐ 4.8
          Kontakt: villamore@gmail.com"
        />

        <PlaceCard
          image="https://www.apartmanija.hr/slike/apartments/15508_2519_1623246872.jpg"
          title="Apartmani Mirko"
          text="Prostoran smještaj uz magistralu.
          ⭐ 4.6
          Kontakt: sunce@gmail.com"
        />

        <PlaceCard
          image="https://www.hotelpleter.com/wp-content/uploads/2023/06/DJI_0073.webp"
          title="Hotel Pleter"
          text="Moderanan  hotel tik uz more.
          ⭐ 4.9
          Kontakt: relax@gmail.com"
        />
      </div>
    </div>
  );
}

export default Apartments;
