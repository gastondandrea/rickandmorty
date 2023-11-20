import React from 'react';
import './App.css';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './views/About/About.jsx';
import Detail from './views/Detail/Detail.jsx';

import {Routes, Route} from 'react-router-dom';


function App() {
   // Estado App
   const [characters, setCharacters] = React.useState([]);
   // URL api 
   const URL = 'https://rickandmortyapi.com/api/character';

   function onSearch(id) {
      //? Si hay 1 coincidencia entonces hay un repetido
      const characterId = characters.filter(char => char.id === Number(id))
      if (characterId.length) {
          return alert(`${characterId[0].name} ya existe!`)
      }
      fetch(`${URL}/${id}`)
              .then(res =>res.json())
      .then(character => {
        if (character.name) {
          setCharacters(oldChars => [character, ...oldChars])
        } else {
          window.alert('¡No hay personajes con este ID!, el mínimo es de 1 y el máximo es el 826 :)')
          }
      })
   }

   const onClose =(id)=>{
         const filterCharacters = characters.filter((character)=>character.id != id);
         setCharacters(filterCharacters);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose = {onClose} />}>
            </Route>
            <Route path="/about" element={<About></About>}>               
            </Route>
            <Route path="/detail/:id" element={<Detail URL={URL}></Detail>}>               
            </Route>
         </Routes>
      </div>
   );
}

export default App;

