import {GiScooter} from "react-icons/gi"

const Item = (props) => {
  return (
    <div className="item">
        <div className="itemImg">
            <img src={props.img} alt={props.title} />
        </div>
        <div className="itemDetails">
            <h4 className="itemTitle">{props.title}</h4>
            <p className="itemPrice">$ {props.price}</p>
            <p className="itemDescription">{props.description}</p>
            <button>Order a delivery <GiScooter/></button>
        </div>
    </div>
  )
}

export default Item