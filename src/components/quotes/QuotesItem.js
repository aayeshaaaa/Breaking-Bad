import React from 'react'


const QuotesItem = ({ quote }) => {
   
  return (
        <nav>
          
          <div className='detail-inner'>
           
          
            <li>
              <strong>Actor Name:</strong> {quote.quote}
            </li><br /> 
            
            
            </div>
    </nav>
  )
}
export default QuotesItem