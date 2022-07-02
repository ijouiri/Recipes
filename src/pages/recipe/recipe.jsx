import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import "./recipe.styles.scss"



export const Recipe = () => {
  const params = useParams();

  const [details, setDetails] = useState({})
  const [ingredients, setIngredients] = useState([]);
  const [active, setActive] = useState("Instructions")

  const getDetails = () => {
    fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API}`)
      .then(data => data.json())
      .then(details => {
        console.log(details)
        setDetails(details)
        setIngredients(details.extendedIngredients);
      })
  }

  useEffect(() => {
    getDetails();
  }, [params]);

  return (
    <div className="container">
      <div className="intro">
        <h1>{details.title}</h1>
        <img src={details.image} alt={details.title} />
      </div>


      <div>
        <button className={active === "Instructions" ? "active" : ""} onClick={() => setActive("Instructions")}>Instructions</button>
        <button className={active === "Ingredients" ? "active" : ""} onClick={() => setActive("Ingredients")}>Ingredients</button>

        {active === "Instructions" && (
          <div className="info two">
            <div>
              <b>Summary</b>
              <br />
              <span dangerouslySetInnerHTML={{ __html: details.summary }}></span>
            </div>
            <div>
              <b>Instructions</b>
              <span dangerouslySetInnerHTML={{ __html: details.instructions }}></span>
            </div>
          </div>
        )}

        {/* summary and instructions */}

        {active === "Ingredients" && (
          <div className="info">
            <ul>
              {ingredients.map((ingredients) => (
                <li key={ingredients.id}> {ingredients.original} </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div >
  )
}
