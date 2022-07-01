import { GiNoodles, GiHamburger, GiCroissant } from "react-icons/gi"
import { FaPizzaSlice } from "react-icons/fa"
import styled from "styled-components"

import "./categories.styles.scss"

import { NavLink } from "react-router-dom"


const Categories = () => {
  return (
    <div className="categories">

      <Slink className="NavLink" to={"/Cuisine/Korean"} >
        <GiNoodles />
        <p>Korean</p>
      </Slink>

      <Slink className="NavLink" to={"/Cuisine/American"} >
        <GiHamburger />
        <p>American</p>
      </Slink>

      <Slink className="NavLink" to={"/Cuisine/French"} >
        <GiCroissant />
        <p>French</p>
      </Slink>

      <Slink className="NavLink" to={"/Cuisine/Italian"} >
        <FaPizzaSlice />
        <p>Italian</p>
      </Slink>

    </div>

  )
}


const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 50%;
    background: linear-gradient( rgba(60, 60, 60, 1), rgba(113, 113, 113, 1));
    width: 4rem;
    height: 4rem;
    line-height: 1.3rem;

    *{
    color: white;
    }

    p{
      font-size: 0.7rem;
    }

    &.active{
      background: linear-gradient(to right, rgba(255, 52, 0, 1),rgba(255, 91, 32, 1))
    }
`

export default Categories
