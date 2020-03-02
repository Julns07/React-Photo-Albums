import React, { useEffect, useState } from "react"
import { getAlbum } from "../actions/data"

export default props => {
  const [album, setAlbum] = useState({})
  const [pictures, setPictures] = useState([])
  return (
    <div>
      <h1>My Albums</h1>
      <div className="grid">
        {albums.map(album => (
          <Link to={`/album/${album.id}`}>
            <img src={album.coverPhoto} />
            <p className="title">{album.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
