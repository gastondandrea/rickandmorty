import { useEffect } from 'react';
import React from 'react';
import './App.css';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './views/About/About.jsx';
import Detail from './views/Detail/Detail.jsx';
import Form from './views/Form/Form.jsx';

import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

function App() {
   // Estado App
   const [characters, setCharacters] = React.useState([]);
   // URL api 
   const URL = 'https://rickandmortyapi.com/api/character';

   //useLocation
   const location = useLocation();


   // login
   const navigate = useNavigate();
   const [access, setAccess] = React.useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '1234';
   
   function login(userdata) {
      if (userdata.password === PASSWORD && userdata.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else{
         alert("Credenciales incorrectas");
      }
   }

   function logout(){
      setAccess(false);
   }
   // App.js
   useEffect(() => {
      !access && navigate('/');
   }, [access]);


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

   const randomPersonaje = () =>{
      const numRamdom = Math.floor(Math.random() * (826 - 1 + 1)) + 1;
      const charactersId = characters.map((char)=>{
         return char.id;
      })
      if(charactersId.includes(numRamdom)){
         return
      }
      onSearch(numRamdom);
   }

   return (
      <div className='App'>
         {
            location.pathname === '/home' || location.pathname === '/about' || location.pathname.startsWith('/detail/') ? <Nav onSearch={onSearch} randomPersonaje = {randomPersonaje} logout = {logout}/> : null
         }
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose = {onClose} />}>
            </Route>
            <Route path="/about" element={<About></About>}>               
            </Route>
            <Route path="/detail/:id" element={<Detail URL={URL}></Detail>}>               
            </Route>
            {/* <Route path="/" element={<Form login={login}></Form>}> */}
            <Route path="/" element={<Form login={login}></Form>}>          
            </Route>
         </Routes>
      </div>
   );
}

export default App;

