import './App.css';
import React, { useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './views/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './views/Detail/Detail.jsx';
import Form from './views/Form/Form.jsx';
import Nav from './components/Nav/Nav.jsx';

// URL api 
const URL = 'http://localhost:3001/rickandmorty/character/';

//EMAIL y PASSWORD
const EMAIL = '1';
const PASSWORD = '1';


function App() {
   // Hooks
   const location = useLocation();
   const navigate = useNavigate();
   
   // Estados App
   const [characters, setCharacters] = React.useState([]);
   const [access, setAccess] = React.useState(false);

   // App.js
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   // Función Login
   function login(userdata) {
      if (userdata.password === PASSWORD && userdata.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else{
         alert("Credenciales incorrectas");
      }
   }

   // Función Logout
   function logout(){
      setAccess(false);
   }

   //Función onSearch
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

   //Función onClose
   const onClose = (id)=>{
         const filterCharacters = characters.filter((character)=>character.id != id);
         setCharacters(filterCharacters);
   }

   //Función randomPersonaje
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
            location.pathname !== "/" ? <Nav onSearch={onSearch} randomPersonaje = {randomPersonaje} logout = {logout}/> : null
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

