import { useEffect, useState } from "react"
import { Recipes } from "../components/recipes.component"



const Home = () => {
  return <div>

    <h1> Popluar </h1>
    <Recipes perPage={4} />
    <h1> vegan </h1>
    <Recipes tag="vegan" perPage={3} />

  </div >
}

export default Home



