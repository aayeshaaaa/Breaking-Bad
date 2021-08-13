import React from 'react'


const DetailItem = ({ item, quotes, items }) => {
   
  return (
        <nav>
          <h1>{item.name}</h1><br />
          <div className='detail-inner'>
            <nav className='detail'>
          <img src={item.img} alt='' />
        </nav><br />
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li><br />
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li><br />
            <li>
              <strong>occupation:</strong> {item.occupation}
            </li><br />
            <li>
            <strong>Status:</strong> {item.status}
          </li><br />
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li> <br /> 
            <li>
              <strong>appearance:</strong> {item.appearance}
            </li>  
            </ul><br />
            
            </div>
    </nav>
  )
}
export default DetailItem