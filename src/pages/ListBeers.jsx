import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RingLoader } from 'react-spinners'

function ListBeers() {

  const accesoNavegacion = useNavigate()

  const [ listaBeer, setListaBeer ] = useState(null)
  const [ buscando, setBuscando ] = useState(true)

  useEffect(() => {
    mostrarLista()
  }, [])

  const mostrarLista = async () => {
    
    try {

      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      console.log(response)
      setTimeout(() => {//esto es para retrasar y que el loading tenga un tiempo
        setListaBeer(response.data)
        setBuscando(false) //maldita sea tres horas para averiguar esto NO OLVIDAR JAMAS
      }, 2000)
     
    } catch (error) {
      accesoNavegacion("/error")
      
    }
  }

  if (buscando === true) {
    return <RingLoader />

  }




  return (
    <div>

      {
        listaBeer.map((each) => {
          return (

            <div key={each._id} className="card mb-3" style={{maxWidth: "500px"}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={each.image_url} className="img-fluid rounded-start" alt="beerImage"/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title"><Link to={`/beers/${each._id}`}>{each.name}</Link></h5>
                    <p className="card-text">{each.tagline} </p>
                    <p className="card-text"><small className="text-muted">{each.contributed_by}</small></p>
                  </div>
                </div>
              </div>
            </div>
          
          )
        })
      }      

    </div>
  )
}

export default ListBeers