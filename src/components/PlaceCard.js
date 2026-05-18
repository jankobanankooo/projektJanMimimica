function PlaceCard(props) {
  return (
    <div className="card">
      <img src={props.image} />

      <h3>{props.title}</h3>

      <p>{props.text}</p>
    </div>
  );
}

export default PlaceCard;
