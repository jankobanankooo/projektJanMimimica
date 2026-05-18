import PlaceCard from "../components/PlaceCard";

function Restaurants() {
  return (
    <div className="section">
      <h1>Restorani i kafići</h1>

      <div className="cards">
        <PlaceCard
          image="https://www.vecernji.hr/media/img/85/8b/e4906a235c4b9c29d2e6.jpeg"
          title="Restoran Val"
          text="Poznat po svježoj ribi i domaćoj hrani"
        />

        <PlaceCard
          image="https://media-cdn.tripadvisor.com/media/photo-s/18/8d/e5/b7/caffe-bar-kontra.jpg"
          title="Caffe Bar Kontra"
          text="Ugodna atmosfera uz plažu"
        />
        <PlaceCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJc25NNvwsMTRk31ftKWNhBhvSaFgVyxH9VQ&s"
          title="Emi"
          text="Ugodan restoran/kafić u luci"
        />
        <PlaceCard
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/e4/01/b7/caption.jpg"
          title="Konoba Mimice"
          text="Konoba za lokalce u starom selu"
        />
      </div>
    </div>
  );
}

export default Restaurants;
