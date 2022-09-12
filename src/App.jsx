import React from "react"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import data from './data';

function App() {
  const cardData = data.map((item) => {
    return(
      <Cards
        item={item} 
      />
    )

  });

  return (
    <div className="min-h-screen bg-slate-200 dark:bg-slate-500 transition duration-700 ease-out">
      <Navbar/>
      <div className="min-h-screen flex flex-col items-center py-10">
        {cardData}
      </div>
      <Footer />
    </div>
  )
}

export default App
