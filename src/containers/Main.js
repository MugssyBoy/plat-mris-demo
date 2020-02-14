import React from 'react'
import Jumbotron from '../component/Jumbotron'
import Content from './Content'

const bgColor = {
    backgroundColor: '#f0f0f5'
}

const Main = () => {
    return (
        <main style={bgColor} role="main">
            <Jumbotron />
            <Content />
        </main>
    )
}

export default Main
