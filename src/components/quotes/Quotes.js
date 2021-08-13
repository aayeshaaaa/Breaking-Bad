import React from 'react'
import QuotesItem from './QuotesItem'

const Quotes = ({ quotes}) => {
  return (
    <section>
      {quotes.map((quote) => (
        <QuotesItem key={quote.char_id} quote={quote}></QuotesItem>
        
      ))}
    </section>
  )
}

export default Quotes