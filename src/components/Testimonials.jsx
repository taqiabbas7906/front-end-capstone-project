import Rating from './Rating'
import review1 from "../assets/review1.png"
import review2 from "../assets/review2.png"
import review3 from "../assets/review3.png"
import review4 from "../assets/review4.png"

const reviews = [
    {
        rating: 5,
        name:"Juan Henry",
        review: "Attention all food enthusiasts! If you haven't visited Little Lemon yet, drop everything and make your way there immediately! This restaurant is an absolute gem that deserves your urgent attention. ",
        image:review1
    },
    {
        rating: 5,
        name:"Edna D. Mills",
        review: "the food at Little Lemon Restaurant was undeniably delicious. The flavors were well-balanced, and each dish was prepared with great attention to detail.",
        image:review2
    },
    {
        rating: 5,
        name:"Lanie J. Henry",
        review: "The interior design was uninspiring, with outdated furniture and a color scheme that failed to create any sense of excitement or allure. ",
        image:review3
    },
    {
        rating: 4,
        name:"Robert L. Allen",
        review: "The food at Little Lemon is simply outstanding. Each dish is prepared with utmost care and attention to detail, resulting in flavors that are truly remarkable.",
        image:review4
    },
]

const Testimonials = () => {
  return (
    <section className='testimonialSection'>
        <div className="container"><div className="testimonialContainer">{reviews.map((review)=>{
            return(<Rating key={review.name} name = {review.name} img = {review.image} description ={review.review} rating ={review.rating}/>)
        })}</div></div>
    </section>
  )
}

export default Testimonials