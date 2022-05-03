import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, Legend } from 'recharts'

import ChartHeader from '../components/ChartHeader'
import OptionButton from '../components/OptionButton'
import { APIURL, DATES, TYPES } from '../utils/Vars'

export default function GenderChart({ id }) {

    const [date, setDate] = useState(0)
    const [type, setType] = useState(0)
    const [data, setData] = useState([
        {
            sexo:"F",
            total:0
        },
        {
            sexo:"M",
            total:0
        }
    ])


    async function updateData(typeValue, dateValue) {
        const url = APIURL + TYPES[typeValue] + "/sexo/" + DATES[dateValue];
        const res = await axios.get(url)

        setData([
            {
                sexo:"F",
                total:res.data[0].F
            },
            {
                sexo:"M",
                total:res.data[0].M
            }
        ])
    }

    useEffect(() => {
        updateData(0, 0)
    }, [])

    function onTabUpdate(value) {
        setType(value)
        updateData(value, date)
    }

    function onButtonUpdate(value){
        setDate(value)
        updateData(type, value)
    }

    return (
        <div id={id} className="card flex-column">
            <ChartHeader onTabUpdate={onTabUpdate}>Sexo</ChartHeader>
            <ResponsiveContainer width='99%' height={250}>
                <PieChart>
                    <Tooltip></Tooltip>
                    <Legend verticalAlign="bottom"/>
                    <Pie data={data} dataKey="total" nameKey="sexo" cx="50%" cy="50%" outerRadius={80} innerRadius={30} label>
                        <Cell key={"cell-0"} fill="#1BD86D"/>
                        <Cell key={"cell-0"} fill="#00E1B3"/>
                        
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <OptionButton onButtonUpdate={onButtonUpdate}></OptionButton>
        </div>

    )
}
