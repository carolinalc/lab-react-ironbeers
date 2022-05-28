import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RingLoader } from 'react-spinners'

function SingleBeer() {

  const [beerDetailed, setbeerDetailed] = useState(null)
  const [ buscando, setBuscando ] = useState(true)

  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() =>{
    getbeerDetailed()
  }, [])

  const getbeerDetailed = async () => {

    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      setbeerDetailed(response.data)
      setBuscando(false)
      
    } catch (error) {
      navigate("/error")
    }
  }

  if(buscando === true) {
    return <RingLoader/>

  }


  return (
    <div className="card" style={{backgroundColor: "lightcyan"}}>
      <img src={beerDetailed.image_url} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h2 className="card-title">Name:{beerDetailed.name} <br /> Rate:{beerDetailed.attenuation_level}</h2>
       
        <p className='card-text text-muted'>{beerDetailed.tagline} </p>
        <h6 className="card-text">From: {beerDetailed.first_brewed}</h6>

        <p className="card-text" >{beerDetailed.description}</p>

        <h5 className="card-text text-muted">{beerDetailed.contributed_by}</h5>        
        
      </div>
    </div>
  )
}

export default SingleBeer