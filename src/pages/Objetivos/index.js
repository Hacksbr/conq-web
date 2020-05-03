import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2, FiClipboard, FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'


export default function Objetivos() {
    const [incidents, setIncidents] = useState([])
    const history = useHistory()

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear()

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vindo, {ongName}</span>

                <Link className="button" to="/newObjetivo">Cadastrar novo objetivo</Link>
                <button onClick={()=>history.push('/home')} type="button">
                    <FiArrowLeft size={18} color="#E02041"></FiArrowLeft>
                </button>

            </header>
            <h1>Seus objetivos</h1>

            <ul>
                    <li key={0}>
                        <strong>Objetivo:</strong>
                        <p>Trocar de carro</p>

                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(15000)}</p>

                    <button type="button" onClick={() => history.push('/detalhesObjetivo')}>
                        <FiClipboard size={20} color="#a8a8b3" />
                        </button>
                    </li>
            </ul>
        </div>
    )
}

