import React from 'react'
import ReactPlayer from 'react-player'

function Error() {
  return (
    <div>
        <ReactPlayer 
        url="https://www.youtube.com/watch?v=_ynP2mcMm7Q"
        width="300px"
        height="300px"
        controls
        playing
        volume="0.8"
        />
        <br />
        <h1>Ups!</h1><br />
        <h1>Algo salio mal... 😒</h1>
    </div>
  )
}

export default Error