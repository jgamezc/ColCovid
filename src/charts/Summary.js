import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { APIURL, DATES } from '../utils/Vars.js';

import OptionButton from '../components/OptionButton'

import './Summary.css'



function Counter({title, children }) {
    return (
        <div className='counter'>
            <p className='counter-value'>{children}</p>
            <p className='counter-title'>{title}</p>
        </div>
    )
}

export default function Summary({id}) {

    const [data, setData] = useState({
        confirmados:0,
        recuperados:0,
        fallecidos:0
    })

    async function updateData(value){
        const url = APIURL+DATES[value]
        const res = await axios.get(url)
        setData(res.data)
    }

    function onButtonUpdate(value){
        updateData(value)
    }

    useEffect(() => {
        updateData(0)
    },[])

    return (
        <div id={id} className="card flex-column">
            <h3>Resumen De Casos</h3>
            <Counter title='CONFIRMADOS'>{data.confirmados}</Counter>
            <Counter title='RECUPERADOS'>{data.recuperados}</Counter>
            <Counter title='FALLECIDOS'>{data.fallecidos}</Counter>
            <OptionButton onButtonUpdate={onButtonUpdate}></OptionButton>
        </div >
    )
}
