import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from 'routes/routes'
import './assets/style/index.scss'

import { history } from 'utils'

const App: React.FC = () => {
    useEffect(() => {
        console.log('history', history.location.pathname)
    }, [history])

    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

export default App
