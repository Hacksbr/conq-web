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

                <button onClick={() => history.push('/home')} type="button">
                    <FiArrowLeft size={18} color="#E02041"></FiArrowLeft>
                </button>

            </header>
            <h1>Prêmios</h1>

            <ul>
                <li key={0}>
                    <strong>Prêmio:</strong>
                    <p>Televisão</p>

                    <strong>Quantidade de pontos</strong>
                    <p>15</p>

                </li>
            </ul>
            <ul>
                <li key={1}>
                    <strong>Prêmio:</strong>
                    <p>Geladeira</p>

                    <strong>Quantidade de pontos</strong>
                    <p>20</p>
                </li>
            </ul>
        </div>
    )
}

