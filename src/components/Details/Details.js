import React from 'react'
import DetailItem from './DetailItem'
import Spinner from '../ui/Spinner'

const Details = ({ items, isLoading}) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='details'>
      {items.map((item) => (
        <DetailItem key={item.char_id} item={item}></DetailItem>
        
      ))}
    </section>
  )
}

export default Details