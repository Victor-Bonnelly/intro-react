import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './component/container/header';
import { Footer } from './component/container/footer';
function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
