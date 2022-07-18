import { useEffect, useState } from "react"

import Card from "../card/card.component"

import "./recipes.styles.scss"

import { SplideSlide, Splide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';

export const Recipes = (props) => {
  const [recipes, setRecipe] = useState([]);

  function getRecipes() {
    if (props.tag) {
      fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9&tags=${props.tag}`)
        .then(res => res.json())
        .then(result => {
          setRecipe(result.recipes)
          localStorage.setItem(`${props.tag}`, JSON.stringify(result.recipes))
        })

    } else {
      fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9`)
        .then(res => res.json())
        .then(result => {
          setRecipe(result.recipes)
          localStorage.setItem(`${props.tag}`, JSON.stringify(result.recipes))
        })
    }
  }

  function getStorage() {
    return (
      localStorage.getItem(`${props.tag}`)
    )
  }

  function storageCtr() {
    if (getStorage()) {
      setRecipe(JSON.parse(getStorage()))
    }
    else {
      getRecipes();
    }
  }
  useEffect(() => {
    storageCtr();
  }, [])

  return (
    <div className="card-container">
      <Splide options={{
        perPage: props.perPage,
        arrows: false,
        pagination: false,
        drag: "free",
        gap: "4rem",
      }}>
        {recipes.map(recipe => (
          <SplideSlide>
            <Card key={recipe.id} recipe={recipe} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
