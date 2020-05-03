import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/images/logoLogin.png'
import circleImage from '../../assets/images/circleLogin.png'


export default function Login() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
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
                <img src={logoImg} class="logo-img" />

                <form >
                    <h2 class="title-login">Login</h2>

                    <input
                        placeholder="E-mail"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        class="input-login"
                        
                    />
                    <input
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        class="input-login"
                        
                    />
                    <a class="forgot-password" onClick={() => alert('Em desenvolvimento')}>Esqueci minha senha</a>
                    <button className="button" onClick={handleLogin}>ENTRAR</button>
                    <p class="text-register">Ainda não é registrado?</p>
                    <button className="button-outline" onClick={()=>alert('Em desenvolvimento')}>CADASTRO</button>
                </form>
            </section>
            <img src={circleImage} className="circle-image" />

           
        </div>
    )
}
