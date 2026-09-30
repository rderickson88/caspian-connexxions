import react from 'react';
import './photocard.css';


export default function PhotoCard({ photo }) {
  return (
    <div className="photo-card">
      <img src={photo.src} alt={photo.alt} />
      <h2>{photo.title}</h2>
      <p>{photo.description}</p>
    </div>
  );
}