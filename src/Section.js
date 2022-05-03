import React from 'react'

import Container from './components/Container'

export default function Section({ id, children }) {
    return (
        <Container>
            <section id={id} className='section'>
                children
            </section>
        </Container>
    )
}
