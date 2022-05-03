import React from 'react'

import './Container.css'

export default function Container({id, children}) {
  return (
    <div id={id} className='container'>
        {children}
    </div>
  )
}
