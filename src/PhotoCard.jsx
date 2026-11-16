import './photocard.css';


export default function PhotoCard({ photo }) {
  return (
    <div className="photo-card">
      <img src={photo.src} alt={photo.alt} />
      <h2>{photo.title}</h2>
      <h3>{photo.collection}</h3>
      <p>{photo.description}</p>
    </div>
  );
}