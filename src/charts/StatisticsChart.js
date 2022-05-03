import React, { useEffect, useState } from 'react'
import axios from 'axios';


import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts';
import ChartHeader from '../components/ChartHeader';
import OptionButton from '../components/OptionButton';

import { APIURL, TYPES, DATES } from '../utils/Vars';



export default function StatisticsChart({id}) {

    const [date, setDate] = useState(0)
    const [type, setType] = useState(0)
    const [data, setData] = useState(null)

    async function updateData(typeValue, dateValue) {
        const url = APIURL + TYPES[typeValue] + "/" + DATES[dateValue];
        const res = await axios.get(url)

        var resData = res.data
        resData.forEach(element => {
            var fecha = element.fecha
            fecha = fecha.substring(0,10)
            fecha = fecha.replaceAll("-","/")
            element.fecha = fecha
        });

        setData(res.data)
    }

    useEffect(() => {
        updateData(0, 0)
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

            <ChartHeader onTabUpdate={onTabUpdate} >Estadísticas</ChartHeader>

            <ResponsiveContainer width="99%" height={250}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1BD86D" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#1BD86D" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="fecha" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid vertical={false} />
                    <Area type="monotone" dataKey="total" stroke="#1BD86D" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>

            </ResponsiveContainer>

            <OptionButton onButtonUpdate={onButtonUpdate}></OptionButton>

        </div>

    )
}

