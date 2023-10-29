import star from "../assets/star.png";

const Rating = (props) => {
  let ratingImg = [];
  for (let i = 0; i < props.rating; i++) {
    ratingImg.push(star);
  }
  return (
    <div className="rating">
    <div className="ratingContainer">
      <div className="ratingStars">
        <span>Rating</span>
        {ratingImg.map((star) => {
          return <img  className="star" src={star} alt={ratingImg.length} />;
        })}
      </div>
      <img className="personImg" src={props.img} alt="Some Person" />
      <p className="personName">{props.name}</p>
      <p className="personDescription">{props.description}</p>
    </div></div>
  );
};

export default Rating;
