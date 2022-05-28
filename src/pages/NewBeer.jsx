import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewBeer() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [first_brewed, setBrewed] = useState("")
  const [brewers_tips, setTips] = useState("")
  const [attenuation_level, setAttenuation] = useState(0)
  const [contributed_by, setContributed] = useState("")


  const handleNameChange = (e) => setName(e.target.value)
  const handleTaglineChange = (e) => setTagline(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleBrewedChange = (e) => setBrewed(e.target.value)
  const handleTipsChange = (e) => setTips(e.target.value)
  const handleAttenuationChange = (e) => setAttenuation(e.target.value)
  const handleContributedChange = (e) => setContributed(e.target.value)


  const handleSubmit = async (element) => {
    element.preventDefault()

    try {

      const nuevaBeer ={
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by
      }
      const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new",
        nuevaBeer )
      navigate("/allbeers")
      
    } catch (error) {
      navigate("/error")
    }
  }



  return (
   <div>

     <form onSubmit={handleSubmit}>
         <div class="mb-3">
          <label htmlFor="name" class="form-label">Name</label>
          <input type="text"  name="name" class="form-control" id="exampleFormControlInput1" value={name} onChange={handleNameChange} />
        </div>

        <div class="mb-3">
          <label htmlFor="tagline" class="form-label">Tagline</label>
          <input type="text" name="tagline" class="form-control" id="exampleFormControlInput1" value={tagline} onChange={handleTaglineChange}/>
        </div>
        
        <div class="mb-3">
          <label htmlFor="description" class="form-label">Description</label>
          <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="4" value={description} onChange={handleDescriptionChange}></textarea>
      </div>

      <div class="mb-3">
          <label htmlFor="first_brewed" class="form-label">First Brewed</label>
          <input type="text" name="first_brewed" class="form-control" id="exampleFormControlInput1" value={first_brewed} onChange={handleBrewedChange}/>
        </div>

        <div class="mb-3">
          <label htmlFor="brewers_tips" class="form-label">Brewed Tips</label>
          <input type="text" name="brewers_tips" class="form-control" id="exampleFormControlInput1" value={brewers_tips} onChange={handleTipsChange}/>
        </div>

        <div class="mb-3">
          <label htmlFor="attenuation_level" class="form-label">Attenuation Level</label>
          <input type="number" name="attenuation_level" class="form-control" id="exampleFormControlInput1" value={attenuation_level} onChange={handleAttenuationChange}/>
        </div>

        <div class="mb-3">
          <label htmlFor="contributed_by" class="form-label">Contributed By</label>
          <input type="text" name="contributed_by" class="form-control" id="exampleFormControlInput1" value={contributed_by} onChange={handleContributedChange}/>
        </div>

        <button class="btn btn-primary">Add New</button>

        </form>
   </div>

  )
}

export default NewBeer