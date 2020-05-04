import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import ReactList from 'react-list';

import api from '../../services/api'
import './styles.css'


import logoImg from '../../assets/images/logoLogin.png'
import plus from '../../assets/images/plus.png'
import ccard from '../../assets/images/credit-cards.png'
import minus from '../../assets/images/minus.png'
import transf from '../../assets/images/transf.png'
import chart from '../../assets/images/chart.png'
import show from '../../assets/images/show.png'
import iphone from '../../assets/images/iphone.jpg'


export default function Home() {
    const [incidents, setIncidents] = useState([])
    const history = useHistory()

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');


    const [menu, setMenu] = useState(true);

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
            <div style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', display: 'flex', paddingTop: 25, paddingLeft: 230, paddingRight: 230, paddingBottom: 50, }}>
                <div style={{ display: 'flex' }}>
                    <img src={logoImg} class="logo-img" />
                </div>
                <div>
                    <h2 onClick={() => history.push('/objetivos')} style={{ marginLeft: 8, fontWeight: 'bold', color: '#00E676', textAlign: 'end', cursor: 'pointer' }}>Voltar</h2>
                </div>

            </div>
            <div style={{ display: 'flex', flex: 2, flexDirection: "column", justifyContent: 'space-between', marginTop: 20, paddingLeft: 230, paddingRight: 230 }}>

                <div style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h2 style={{ fontWeight: 'bold' }}>Novo objetivo</h2>
                    </div>

                   


                </div>


                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: 30 }}>

                   <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <input
                            placeholder="Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            class="input-login"

                        />
                        <input
                            placeholder="Valor"
                            value={valor}
                            onChange={e => setValor(e.target.value)}
                            class="input-login"

                        />
                   </div>
                   <div style={{display:'flex', justifyContent:'flex-end'}}>
                        <div onClick={() => history.push('/confirmarNovoObjetivo')} style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#00E676', paddingBottom: 10, paddingTop: 10, paddingLeft: 55, paddingRight: 55, borderRadius: 8, cursor: 'pointer', marginTop:20,  }}>
                            <h3 style={{ textAlign: 'end', color: '#fff' }}>CRIAR</h3>
                        </div>
                   </div>

                </div>

            </div>


        </div>
    )
}

