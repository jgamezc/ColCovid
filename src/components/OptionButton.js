import React, { useState } from 'react'
import { MdDateRange } from 'react-icons/md'

import './OptionButton.css'

export default function OptionButton({onButtonUpdate}) {

  const [popUpEnabled, setPopUpEnabled] = useState(false)
  const [label, setLabel] = useState(0)

  const dateLabels = ["Siempre", "Hace 1 mes", "Hace 3 meses", "Hace 6 meses", "Hace 1 año"]

  function updateButton(value) {
    setPopUpEnabled(false)
    setLabel(value)
    onButtonUpdate(value)
  }

  return (
    <div className='option-button'>
      <div onClick={()=>{setPopUpEnabled(true)}} className='option-button-label'>
      <div className='option-button-icon'>
          <MdDateRange fill='#424242' size='16px' />
        </div>
        <p>{dateLabels[label]}</p>
      </div>

      <div className={popUpEnabled ? "popup-container" : "popup-container disabled"}>
        <div id="popup-card" className="card flex-column">
          <h3>Fecha de Análisis</h3>
          <ul className='popup-menu'>
            <li onClick={() => { updateButton(0) }}>{dateLabels[0]}</li>
            <li onClick={() => { updateButton(1) }}>{dateLabels[1]}</li>
            <li onClick={() => { updateButton(2) }}>{dateLabels[2]}</li>
            <li onClick={() => { updateButton(3) }}>{dateLabels[3]}</li>
            <li onClick={() => { updateButton(4) }}>{dateLabels[4]}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
