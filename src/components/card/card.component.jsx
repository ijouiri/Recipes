import "./card.styles.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={"/recipe/" + props.recipe.id} >
      <div className="card">
        <p>{props.recipe.title}</p>
        <div className="image" style={{ backgroundImage: `url(${props.recipe.image})` }} />
      </div>
    </Link>
  )
}

export default Card
