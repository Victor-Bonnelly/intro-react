import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Header } from './component/container/header';
import { Footer } from './component/container/footer';
import { Bouton } from './component/ui/Bouton/Bouton';
import { User } from './component/User/user';
import { Player } from './component/Player/Player';
function App() {
  return (
    <>
      <Header />
      <User />
      <Bouton />
      <Player />
      <Footer />
    </>
  )
}

export default App
