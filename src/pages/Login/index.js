import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png'


export default function Login() {
    const [login, setLogin] = useState('admin');
    const [senha, setSenha] = useState('admin');
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        if(login != 'admin' || senha != 'admin'){
            alert('Usuário ou senha incorreto.');
        }
        else{
            history.push('/home');
        }
        // try {
        //     const response = await api.post('sessions', { id })

        //     localStorage.setItem('ongId', id)
        //     localStorage.setItem('ongName', response.data.name)

        //     history.push('/profile')
        // } catch (err) {
        //     alert('Falha no login, tente novamente.')
        // }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input
                        placeholder="Seu usuário"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input
                        placeholder="Sua senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link 
                    className="back-link" 
                    // to="/register"
                    onClick={()=>alert('Em desenvolvimento.')}
                    >
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={herosImg} alt="Heroes" />
        </div>
    )
}
