import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'


export default function NovoObjetivo() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const history = useHistory()

    const ongId = localStorage.getItem('ongId')

    async function handleNewObjetivo(e) {
        e.preventDefault()
        history.push('/confirmarNovoObjetivo')
        // const data = {
        //     title,
        //     description,
        //     value
        // }

        // try {
        //     await api.post('incidents', data, {
        //         headers: {
        //             Authorization: ongId
        //         }
        //     })
        //     history.push('/profile')
        // } catch (error) {
        //     alert('Erro ao cadastrar caso, tente novamente.')
        // }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo objetivo</h1>
                   

                    <Link className="back-link" to="/objetivos">
                        <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
                </section>

                <form onSubmit={handleNewObjetivo}>
                    <input
                        placeholder="Nome"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
