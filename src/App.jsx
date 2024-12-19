import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Header } from './component/container/header';
import { createContext } from 'react';
import { Footer } from './component/container/footer';
import { Bouton } from './component/ui/Bouton/Bouton';
import { User } from './component/User/user';
import { Player } from './component/Player/Player';
import { Routine } from './component/routine/Routines';
import { Compteur } from './component/container/Compteur';
import { Menu } from './component/container/Menu';
export const utilisateurContext = createContext();
function App() {
  const user = {
    prenom: "Victor",
    nom: "Bonnelly",
    hobbies: [{id: 1, nom: "Sport"}, {id: 2, nom: "Informatique"}, {id: 3, nom: "Jardinage"}]
  }
  return (
  
    <utilisateurContext.Provider value={user}>  
      <Header />
      <User />
      <Bouton />
      <Player />
      <Routine />
      <Compteur />
      <Menu />
      <Footer />
    </utilisateurContext.Provider>
  )
}

export default App
