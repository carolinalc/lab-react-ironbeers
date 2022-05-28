import React from 'react'
import { Link } from 'react-router-dom'
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";



function Home() {
  return (

      <div id="centrar">   
        
      

  <div className="card" style={{width: "18rem"}}>
  <img src={beers} className="card-img-top" alt="..."/>
  <div className="card-body">
  <Link to="/allbeers" ><h3>All Beers</h3></Link>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    felis mauris, ornare ac aliquam eget, lobortis eget nisl.
    Vestibulum non consectetur urna. Phasellus odio mauris, faucibus
    eu fringilla finibus, tristique at nunc. Aenean hendrerit magna
    ipsum, at finibus odio ullamcorper viverra. Vivamus egestas felis
    vel ipsum finibus sodales. Duis sit amet justo vitae lectus
    laoreet cursus sed in nibh. Mauris mattis nibh nisi, sed pharetra
    lacus mollis at.</p>
  </div>
  </div>

      
  <div className="card" style={{width: "18rem"}}>
  <img src={newBeer} className="card-img-top" alt="..."/>
  <div className="card-body">
  <Link to="/random-beer"> <h3>Random Beer</h3></Link>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    felis mauris, ornare ac aliquam eget, lobortis eget nisl.
    Vestibulum non consectetur urna. Phasellus odio mauris, faucibus
    eu fringilla finibus, tristique at nunc. Aenean hendrerit magna
    ipsum, at finibus odio ullamcorper viverra. Vivamus egestas felis
    vel ipsum finibus sodales. Duis sit amet justo vitae lectus
    laoreet cursus sed in nibh. Mauris mattis nibh nisi, sed pharetra
    lacus mollis at.</p>
  </div>
  </div>

   
  <div class="card" style={{width: "18rem"}}>
  <img src={randomBeer} class="card-img-top" alt="..."/>
  <div class="card-body">
  <Link to="/new-beer"> <h3>New Beer</h3></Link>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    felis mauris, ornare ac aliquam eget, lobortis eget nisl.
    Vestibulum non consectetur urna. Phasellus odio mauris, faucibus
    eu fringilla finibus, tristique at nunc. Aenean hendrerit magna
    ipsum, at finibus odio ullamcorper viverra. Vivamus egestas felis
    vel ipsum finibus sodales. Duis sit amet justo vitae lectus
    laoreet cursus sed in nibh. Mauris mattis nibh nisi, sed pharetra
    lacus mollis at.</p>
  </div>
  </div>


    </div>
  )
}

export default Home