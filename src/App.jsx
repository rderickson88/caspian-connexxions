import PhotoCard from './PhotoCard'
import './App.css'
import photoData from './photos.json'

function App() {

  return (
    <>
    <h1>Caspian Connexxions</h1>
    <p>Debbie Gomes is a photographer, librarian, and educator.</p>
    <div className = "photo-card-container">
      {photoData.content.map((photo, index) => (
        <PhotoCard key={photo.id} photo={photo} title = {photo.title} collection = {photo.collection} description = {photo.description} />
      ))}
    </div>
   </>
  )
}

export default App
