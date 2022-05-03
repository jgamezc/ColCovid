import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar,} from 'recharts'
import ChartHeader from '../components/ChartHeader'
import OptionButton from '../components/OptionButton'
import { APIURL, TYPES, DATES } from '../utils/Vars'

export default function CityChart({ id }) {

    const [date, setDate] = useState(0)
    const [type, setType] = useState(0)
    const [data, setData] = useState(null)

    async function updateData(typeValue, dateValue) {
        const url = APIURL + TYPES[typeValue] + "/municipio/" + DATES[dateValue];
        const res = await axios.get(url)

        setData(res.data)
    }

    useEffect(() => {
        updateData(0,0)
    }, [])

    function onTabUpdate(value) {
        setType(value)
        updateData(value,date)
    }

    function onButtonUpdate(value){
        setDate(value)
        updateData(type, value)
    }

    return (
        <div id={id} className="card flex-column">
            <ChartHeader onTabUpdate={onTabUpdate}>Municipios</ChartHeader>
            <ResponsiveContainer width={'99%'} height={660}>
                <BarChart layout='vertical' data={data} margin={{ top: 0, right: 0, bottom: 0, left: 40, }}>
                    <XAxis type="number" />
                    <YAxis dataKey="municipio" type="category" scale="band" />
                    <Tooltip></Tooltip>
                    <CartesianGrid></CartesianGrid>
                    <Bar dataKey="total" barSize={20} fill="#04D5E3" />
                </BarChart>
            </ResponsiveContainer>

            <OptionButton onButtonUpdate={onButtonUpdate}></OptionButton>
        </div>

    )
}
