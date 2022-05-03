import React from 'react'

import Container from './components/Container'
import Dashboard from './Dashboard'

import './App.css'
import './vars.css'

import Icon from './Icon.svg'
import Logo from './Logo.svg'

export default function App() {
    return (
        <div className='app'>
            <Container id='header-container'>
                <header className='header'>
                    <a href="/" className='logo'>
                        <h1>ColCovid</h1>
                        <img src={Icon} alt="" />
                    </a>
                    <nav className='menu'>
                        <ul>
                            <li><a href="/enlaces">enlaces</a></li>
                            <li><a href="/dataset">dataset</a></li>
                        </ul>
                    </nav>
                </header>
            </Container>
            <Container id='banner-container'>
                <section className='banner'>
                    <img src={Logo} alt="" />
                    <div className='slogan'>
                        <h2>Conoce la evolución del <b>Coronavirus</b> en la región</h2>
                        <p>Consulte información sobre la base de datos</p>
                    </div>
                </section>
            </Container>
            <Dashboard></Dashboard>
        </div>
    )
}
