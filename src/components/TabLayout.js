import React, { useState } from 'react'

export default function TabLayout() {

    const [tab, setTab] = useState(0)

  return (
    <div className="tab-layout">
        <ul className="tab-buttons">
            <li className="tab-button" onClick={()=>{setTab(0)}}>diagnosticos</li>
            <li className="tab-button" onClick={()=>{setTab(1)}}>fallecidos</li>
        </ul>
        <div className="tab-pane" hidden={tab != 0}>
            Some Tab Content
        </div>
        <div className="tab-pane" hidden={tab != 1}>
            Some Tab Content 2
        </div>
    </div>
  )
}
