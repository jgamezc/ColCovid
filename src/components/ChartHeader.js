import React, { useEffect, useState } from 'react'

import './CardHeader.css'

export default function ChartHeader({children, onTabUpdate}) {

  const [tab, setTab] = useState(0)

  useEffect(() => {
    setTab(0)
  }, [])

  function updateTab(value){
    setTab(value)
    onTabUpdate(value)
  }

  return (
    <div className='card-header flex'>
      <h3>{children}</h3>
      <ul className='tab-menu flex'>
        <li onClick={()=>{updateTab(0)}} className={tab==0?"tab active":"tab"}>confirmados</li>
        <li onClick={()=>{updateTab(1)}} className={tab==1?"tab active":"tab"}>fallecidos</li>
      </ul>
    </div>
  )
}
