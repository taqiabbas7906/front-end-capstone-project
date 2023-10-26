import heroPic from "../assets/restauranfood.jpg"
import Button from "./Button"

const Hero = () => {
    return (
        <section className='heroSection'>
            <div className="container">
                <div className="evenColumns">
                    <div className="heroText">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned
                            Mediterranean restaurant,
                            focused on traditional
                            recipes served with a modern
                            twist.</p>
                            <Button to="reservation" text="Reserve a Table"/>
                    </div>
                    <div className="heroImg">
                        <img className="heroPic" src={heroPic} alt="Restaurant food" width={374} height={427} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero