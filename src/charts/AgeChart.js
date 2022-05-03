import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ResponsiveContainer, Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

import ChartHeader from '../components/ChartHeader'
import OptionButton from '../components/OptionButton'
import { APIURL, DATES, TYPES } from '../utils/Vars'

export default function AgeChart({ id }) {

    const [date, setDate] = useState(0)
    const [type, setType] = useState(0)
    const [data, setData] = useState(null)

    async function updateData(typeValue, dateValue) {
        const url = APIURL + TYPES[typeValue] + "/edad/" + DATES[dateValue];
        const res = await axios.get(url)

        setData(res.data)
    }

    useEffect(() => {
        updateData(0,0)
    }, [])

    function onTabUpdate(value){
        setType(value)
        updateData(value, date)
    }

    function onButtonUpdate(value){
        setDate(value)
        updateData(type, value)
    }

    return (
        <div id={id} className="card flex-column">
            <ChartHeader onTabUpdate={onTabUpdate} >Edades</ChartHeader>

            <ResponsiveContainer width="99%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="edad"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <CartesianGrid vertical={false} />
                    <Bar dataKey="total" fill='#04D5E3'></Bar>
                </BarChart>
            </ResponsiveContainer>

            <OptionButton onButtonUpdate={onButtonUpdate}></OptionButton>
        </div>
    )
}
