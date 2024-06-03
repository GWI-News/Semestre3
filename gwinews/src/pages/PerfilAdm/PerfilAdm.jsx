import React from 'react'
import { useEffect } from 'react'
import styles from './PerfilAdm.module.css'

import { useAuthValue } from '../../context/AuthContext'
import { userAuthentication } from '../../hooks/userAuthentication'

import { useNavigate } from 'react-router-dom'

const Perfil = () => {
    const { user } = useAuthValue()
    const { logout } = userAuthentication()

    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, history])
    
    return (
        <>
            <h1>Perfil de Administrador</h1>
            {user && <button onClick={logout}>LogOut</button>}
        </>
    )
}

export default Perfil