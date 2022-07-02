import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card/card.component.jsx"
import styled from "styled-components"


export const Searched = () => {
  const [cuisines, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&query=${name}`)
      .then(data => data.json())
      .then(cuisine => {
        setCuisine(cuisine.results)
        // localStorage.setItem(`${params.type}`, JSON.stringify(cuisine.results))
      })
  }

  // function getStorage() {
  //   return (
  //     localStorage.getItem(`${params.type}`)
  //   )
  // }

  // function storageCtr() {
  //   if (getStorage()) {
  //     setCuisine(JSON.parse(getStorage()))
  //   }
  //   else {
  //     getCuisine(params.type);
  //   }
  // }
  useEffect(() => {
    getCuisine(params.input)
    // storageCtr();
  }, [params])

  return (

    <Wrapper>
      {cuisines.map(recipe =>
      (
        <Card className="test" key={recipe.id} recipe={recipe} />

      ))}

    </Wrapper>

  )
}

const Wrapper = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
      grid-gap: 2rem;
      
`
