import * as React from 'react'

//utils
import { history } from '../utils/index'
import { Routes, Route } from 'react-router-dom'

//page templates
import HomePage from '../components/templates/HomePage/HomePage'
import LoginPage from '../components/templates/LoginPage/LoginPage'

const routes = () => {
    return (
        <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
        </Routes>
    )
}

export const changeRoute = (route: any) => {
    history.go(route)
}

export default routes
