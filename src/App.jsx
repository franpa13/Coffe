
import AllProduct from "../src/components/AllProducts/AllProduct"
import AvaliableNow from './components/AvaliableNow/AvaliableNow'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [allProducts, setAllProducts] = useState(true)
  const [avaliableNow, setAvaliable] = useState(false)
  const [coffes, setCoffes] = useState([])

  useEffect(() => {
    try {
      const fethcData = async () => {
        const response = await axios.get("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
        setCoffes(response.data);
      }
      fethcData()
    } catch (e) {
      console.log(e, "hay un error en los datos");
    }
  }, [])

  console.log(coffes, "esto es coffes");

  const handleClick = () => {
    setAllProducts(true)
    setAvaliable(false)
  }
  const handleClickTwo = () => {
    setAvaliable(true)
    setAllProducts(false)
  }
  return (
    <div className='div__grande flex justify-center items-center animate-fade-in-down'>
      <img className='h-36 absolute top-0 md:w-full md:h-auto' src="/bg-cafe.jpg" alt="" />
      <div className='w-2/3 todo p-2 rounded-lg absolute top-20 flex flex-col justify-center items-center cl md:top-48'>
        <div className="flex justify-center w-full todo">

          <img className='imagen w-1/3 md:w-2/12' src="/vector.svg" alt="" />
        </div>
        <div className='todo inline-block mt-0 flex gap-3 flex-col justify-center items-center md:w-1/2 '>
          <h1 className='font-semibold text-white text-xl text-center todo md:text-2xl  '>Nuestra Coleccion</h1>
          <p className='todo presentacion text-center md:text-base  '>Presentando nuestra Colección de Café, una selección de cafés únicos de diferentes tipos de tostado y orígenes, tostados expertamente en pequeños lotes y enviados frescos semanalmente</p>
        </div>
        <div className='todo mb-6 flex items-center justify-between gap-4 mt-3 md:w-full md:justify-center md:gap-16'>
          <button onClick={handleClick} className='todo text-xs btn rounded-lg px-3 py-1 font-normal md:text-lg cursor-pointer md:font-semibold hover:bg-gray-600 shadow-inner'>
            All products
          </button>

          <button onClick={handleClickTwo} className='todo text-xs text-white px-3 py-1 font-normal cursor-pointer md:text-lg md:font-semibold hover:bg-black rounded-lg shadow-inner'>
            Available Now
          </button>

        </div>
        <div className='todo '>

          {allProducts && (
            <AllProduct coffes={coffes} />
          )}

          {avaliableNow && (
            <AvaliableNow coffes={coffes} />
          )}
        </div>

      </div>
    </div>
  )
}

export default App
