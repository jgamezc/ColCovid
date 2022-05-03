import React from 'react'

import Container from './components/Container'
import Summary from './charts/Summary'
import StatisticsChart from './charts/StatisticsChart'
import AgeChart from './charts/AgeChart'
import GenderChart from './charts/GenderChart'
import CityChart from './charts/CityChart'

import './Dashboard.css'

export default function Dashboard() {
    return (
        <Container id='dashboard-container'>
            <section className='dashboard'>
                <Summary id="summary-chart"> </Summary>
                <StatisticsChart id="statistics-chart"></StatisticsChart>
                <AgeChart id="age-chart"></AgeChart>
                <GenderChart id="gender-chart"></GenderChart>
                <CityChart id="city-chart"></CityChart>
            </section>
        </Container>
    )
}
