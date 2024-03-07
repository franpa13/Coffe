import React from 'react'
import axios from 'axios'

import Card from '../Card/Card'
export default function AllProduct({coffes}) {
 
  
  return (
    <div className="todo flex flex-col gap-6 justify-center items-center animate-fade-in-right p-2 md:flex-row md:flex-wrap md:justify-around sm:flex-row sm:flex-wrap sm:gap-2 " >
      {coffes && coffes.length > 0 && coffes.map((coffe) => {
        return (
          <Card
            key={coffe.id}
            popular={coffe.popular}
            rating={coffe.rating}
            votes={coffe.votes} price={coffe.price}
            name={coffe.name} image={coffe.image}
            available={coffe.available}>

          </Card>
        )
      })}
    </div>
  )
}
