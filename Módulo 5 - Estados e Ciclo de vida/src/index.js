import React from 'react'
import ReactDOM from 'react-dom'
import Calculadora from './components/Calculadora'

function App() {
    return (
        <div>
            <h1>Calculadora</h1>
            <Calculadora />
            <h2>Develop by Thiago Alô</h2>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
