import "./card.styles.scss"

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.recipe.title}</p>
      <div className="image" style={{ backgroundImage: `url(${props.recipe.image})` }} />
    </div>
  )
}

export default Card
