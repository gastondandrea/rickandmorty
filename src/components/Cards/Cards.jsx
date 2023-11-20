import Card from '../Card/Card.jsx';
import "./Cards.css"
export default function Cards({onClose, characters}) {
   return (
      <div className='cards-container'>
         {
         characters.map((personaje, index) => (
            <Card 
            key={index}
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={onClose}
            />
         ))
         }
      </div>   
   );
}
