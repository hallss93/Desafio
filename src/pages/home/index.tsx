import React from 'react'

type HomePageProps = {}

import { useNavigate } from 'react-router-dom'
import { MainContainer } from './styles'

const HomePage: React.FC<HomePageProps> = () => {
    const text = 'Clique aqui para ir pro login'
    const history = useNavigate()
    return (
        <MainContainer>
            <button
                onClick={() => {
                    history('/login')
                }}>
                {text}
            </button>
        </MainContainer>
    )
}

export default HomePage
