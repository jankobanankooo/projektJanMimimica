import PlaceCard from "../components/PlaceCard";

function Beaches() {
  return (
    <div className="section">
      <h1>Plaže</h1>

      <div className="cards">
        <PlaceCard
          image="https://q-xx.bstatic.com/xdata/images/hotel/max500/79067470.jpg?k=bd1240a1b1d4416fea41390adecc51cb826d7b25ce452e8b4545d5eb8eb9f473&o="
          title="Juto"
          text="Čisto more i odličan prostor za odmor."
        />

        <PlaceCard
          image="https://admin.wakacyjnepomysly.pl/static/1741248755982-Mimice%20111.jpg"
          title="Kutleša"
          text="Mirna plaža idealna za obitelji."
        />
        <PlaceCard
          image="https://www.visitomis.hr/media/image/76/cc889x889/medici-2.webp?utqw"
          title="Lučica"
          text="Povjesna plaža sa 3 kule"
        />
      </div>
    </div>
  );
}

export default Beaches;
