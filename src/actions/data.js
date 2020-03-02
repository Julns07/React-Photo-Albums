import axios from "axios"

export function getAlbums() {
  return new Promise((resolve, reject) => {
    axios
      .get("/albums")
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject(e)
      })
  })
}

export function getAlbum(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/album/${id}?_embed=pictures`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject(e)
      })
  })
}
