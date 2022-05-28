import React from 'react'
import { Link } from 'react-router-dom'
import house from "../assets/house.png";


function Header() {
  return (
    
<nav class="navbar navbar-dark bg-primary">
<Link to="/"><img src={house} alt="" style= {{width:"50px"}}/> </Link>
</nav>

    
  )
}

export default Header