import React from 'react'
import styles from './Perfil.module.css'

import { useAuthValue } from '../../context/AuthContext'
import { userAuthentication } from '../../hooks/userAuthentication'

const Perfil = () => {
    const { user } = useAuthValue()
    const { logout } = userAuthentication()

    return (
        <>
            {user && <button onClick={logout}>LogOut</button>}
            {!user && <h1>Deu Merda</h1>}
        </>
    )
}

export default Perfil