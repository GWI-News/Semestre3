import { db } from '../firebase/config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore'

export const userAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    const userCollectionRef = collection(db, 'users')

    const createUser = async (user) => {
        const userCredentials = await createUserWithEmailAndPassword(auth, user.newEmail, user.newPassword)
        const userId = userCredentials.user.uid
        await setDoc(doc(db, 'Usarios', userId), { name: user.newName, access: 1 })
    }

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    const login = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch (error) {
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if (error.message.includes('invalid-login-credentials')) {
                systemErrorMessage = 'Este Usuário não Está Cadastrado.'
            } else if (error.message.includes('wrong-password')) {
                systemErrorMessage = 'Há um Erro com suas Credenciais de Acesso.'
            } else {
                systemErrorMessage = 'Ocorreu um Erro, Tente Novamente mais Tarde.'
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const logout = () => {
        checkIfIsCancelled()
        signOut(auth)
    }

    const forgotPassword = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            await sendPasswordResetEmail(auth, data.email)
            setLoading(false)
        } catch (error) {
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if (error.message.includes('invalid-login-credentials')) {
                systemErrorMessage = 'Este Usuário não Está Cadastrado.'
            } else {
                systemErrorMessage = 'Ocorreu um Erro, Tente Novamente mais Tarde.'
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { auth, login, logout, createUser, forgotPassword, loading, error }
}