import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiCheck, FiTrash2 } from 'react-icons/fi'

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

    const [selected, setSelected] = useState(-1);
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

    function termos() {
        if (selected == -1) {
            alert('Selecione alguma opção')
        }
        else {
            history.push('/termosObjetivo')
        }
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
                        <h2 style={{ fontWeight: 'bold' }}>Viagem para Orlando</h2>
                    </div>
                </div>


                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: 30 }}>

                    <p style={{ fontSize: 16 }}>Progresso</p>
                   

                    <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }}>

                        <div style={{ display: 'flex', flexDirection: 'column',border: 'solid', flex: 1, borderRadius: 6, borderWidth: 0 }}>
                            <p style={{ textAlign: 'center', fontWeight: 'bold', color:'#00E676', fontSize:46, marginTop:20 }}>80%</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', border: 'solid', flex: 1, borderRadius: 6, borderWidth: 0 }}>

                            <p style={{ }}>Conclusão prevista em</p>
                            <p style={{  fontWeight: 'bold', color: '#00E676', fontSize:26 }}>20 mai 2022</p>

                            <p style={{  marginTop:10 }}>Conquistado</p>
                            <p style={{  fontWeight: 'bold', color: '#00E676', fontSize: 26 }}>R$9.99,999</p>

                            <p style={{  marginTop:10 }}>Objetivo</p>
                            <p style={{ fontWeight: 'bold', color: '#00E676', fontSize: 26 }}>R$99.99,999</p>

                        </div>


                    </div>

                </div>

            </div>


        </div>
    )
}

