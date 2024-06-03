import React from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, onSnapshot, setDoc, getDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { db } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'
import styles from './Crud.module.css'

const Crud = () => {
    // CRUD Video
    const auth = getAuth()
    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, 'users')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [access, setAccess] = useState('')
    const [age, setAge] = useState('')

    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')

    // Get All Users
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers()
    }, [])

    // Create User com Id Aleatório
    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: name, age: Number(age) })
        setName('')
        setAge('')
    }

    // Create User com Id Definido
    const createUserLeitor = async (name, age, access, email, password) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const userId = userCredential.user.uid
        await setDoc(doc(db, 'users', userId), { name: name, age: Number(age), access: Number(access) })
        setName('')
        setAge('')
        setAccess('')
        setEmail('')
        setPassword('')
    }

    // Update User
    const updateUser = async (id, age) => {
        const userDoc = doc(db, 'users', id)
        const newField = { age: age + 1 }
        await updateDoc(userDoc, newField)
    }

    // Delete User
    const deleteUser = async (id) => {
        const userDoc = doc(db, 'users', id)
        await deleteDoc(userDoc)
    }

    // Atualização Automática de Users
    useEffect(() => {
        const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
            let users = [];
            snapshot.forEach((doc) => {
                users.push({ id: doc.id, ...doc.data() });
            });
            setUsers(users);
        });
        return () => unsubscribe();
    }, []);

    // Login com Nível de Acesso
    const handleLogin = async (email, password) => {
        try {
            const userAuth = await signInWithEmailAndPassword(auth, email, password)
            const userId = userAuth.user.uid
            const userDoc = doc(db, 'users', userId)
            const userDocData = await getDoc(userDoc)

            switch (userDocData.data().access) {
                case 0:
                    navigate('/Perfil/Adm')
                    break;
                case 1:
                    navigate('/Perfil/Leitor')
                    break;
            }
        } catch (error) {
            navigate('/')
        }
    }

    return (
        <>
            <div className={styles.page}>
                <div>
                    <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Name'></input>
                    <input type='number' value={age} onChange={(e) => { setAge(e.target.value) }} placeholder='Age'></input>
                    <input type='number' value={access} onChange={(e) => { setAccess(e.target.value) }} placeholder='Access'></input>
                    <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email'></input>
                    <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password'></input>
                    <button onClick={createUser}>Create User</button>
                    <button onClick={() => { createUserLeitor(name, age, access, email, password) }}>Create User Leitor</button>
                </div>
                <div>
                    <input type='email' value={emailLogin} onChange={(e) => { setEmailLogin(e.target.value) }} placeholder='Email'></input>
                    <input type='password' value={passwordLogin} onChange={(e) => { setPasswordLogin(e.target.value) }} placeholder='Password'></input>
                    <button onClick={() => { handleLogin(emailLogin, passwordLogin) }}>Login</button>
                </div>
                {users && users.map((user, i) => {
                    return (
                        <div key={i}>
                            <h1>Name: {user.name}</h1>
                            <p>Age: {user.age}</p>
                            <p>access: {user.access}</p>
                            <button onClick={() => { updateUser(user.id, user.age) }}>Increase Age</button>
                            <button onClick={() => { deleteUser(user.id) }}>Delete User</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Crud