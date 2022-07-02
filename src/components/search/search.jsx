import "./search.styles.scss"
import { BiSearchAlt2 } from "react-icons/bi"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/Searched/" + search)
  };

  const inputHandler = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={submitHandler}>
        <BiSearchAlt2 />
        <input onChange={inputHandler} type="text" value={search} />
      </form>
    </div>
  )
}

export default Search
