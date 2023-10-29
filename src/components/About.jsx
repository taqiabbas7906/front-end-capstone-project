import restaurant from "../assets/restaurant.jpg";
import chef from "../assets/Mario and Adrian b.jpg";


const About = () => {
  return (
    <section className="aboutSection">
      <div className="container">
        <div className="evenColumns">
          <div className="aboutText">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Little Lemon is an enchanting community eatery that offers
              straightforward cuisine and timeless mixed drinks in a vibrant yet
              relaxed setting. The establishment highlights a menu that utilizes
              locally-sourced ingredients and changes regularly with daily
              specials.
            </p>
          </div>
          <div className="aboutImg">
            <img
              className="aboutPic pic1"
              src={restaurant}
              alt="Restaurant food"
              width={374}
              height={427}
            />
            <img
              className="aboutPic pic2"
              src={chef}
              alt="Restaurant food"
              width={374}
              height={427}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
