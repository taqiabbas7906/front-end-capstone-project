
import Button from './Button'
import Item from './Item'
import greek from "../assets/greek salad.jpg"
import bruschetta from "../assets//bruchetta.svg"
import desert from "../assets/lemon dessert.jpg"

const menuItems = [
    {
        title: "Greek salad",
        img: greek,
        description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: 12.99
    },
    {
        title: "Bruchetta",
        img: bruschetta,
        description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        price: 5.99
    },
    {
        title: "Lemon Dessert",
        img: desert,
        description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: 5.00
    },
]

const Menu = () => {
    return (
        <section className='menuSection'>
            <div className="container">
                <div className="topMenu">
                    <h2>This weeks specials!</h2>
                    <Button to="menu" text="Online Menu" />
                </div>
                <div className="menu">
                    {menuItems.map((item)=>{
                        return(
                        <Item key={item.title} title = {item.title} img = {item.img} description={item.description} price ={item.price}  />)
                    })}
                </div>
            </div>
        </section>
    )
}

export default Menu