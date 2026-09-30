import { useState } from 'react'
import PhotoCard from './PhotoCard'
import './App.css'

function App() {

  return (
    <>
    <h1>Caspian Connexxions</h1>
    <p>Debbie Gomes is a photographer, librarian, and educator.</p>
    <div className = "photo-card-container">
    {PhotoCard({ photo: { src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', alt: 'A beautiful landscape', title: 'Landscape', description: 'A breathtaking view of the mountains during sunset.' } })}
        {PhotoCard({ photo: { src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', alt: 'A beautiful landscape', title: 'Landscape', description: 'A breathtaking view of the mountains during sunset.' } })}
            {PhotoCard({ photo: { src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', alt: 'A beautiful landscape', title: 'Landscape', description: 'A breathtaking view of the mountains during sunset.' } })}
    </div>
   </>
  )
}

export default App
