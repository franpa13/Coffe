import React from 'react'
import Card from '../Card/Card'
export default function AvaliableNow({ coffes }) {
  return (
    <div className='todo'>
      <div className="todo flex flex-col gap-6 justify-center items-center p-2 animate-fade-in-left md:gap-12 md:flex-row md:flex-wrap sm:flex-row sm:flex-wrap sm:gap-2" >
        {coffes && coffes.length > 0 && coffes.filter((coffe) => coffe.available)
          .map((coffe) => {

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
    </div>
  )
}
