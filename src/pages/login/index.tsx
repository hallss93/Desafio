import React from 'react'
import { MainContainer } from './styles'
import { useNavigate } from 'react-router-dom'

type LoginPageProps = {}

const LoginPage: React.FC<LoginPageProps> = () => {
    const text = 'Clique aqui para ir pra home'
    const history = useNavigate()
    return (
        <MainContainer>
            <button
                onClick={() => {
                    history('/')
                }}>
                {text}
            </button>
        </MainContainer>
    )
}

export default LoginPage
