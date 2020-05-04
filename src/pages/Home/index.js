import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'


import logoImg from '../../assets/images/logoLogin.png'
import plus from '../../assets/images/plus.png'
import ccard from '../../assets/images/credit-cards.png'
import minus from '../../assets/images/minus.png'
import transf from '../../assets/images/transf.png'
import chart from '../../assets/images/chart.png'
import show from '../../assets/images/show.png'


export default function Home() {
    const [incidents, setIncidents] = useState([])
    const history = useHistory()

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')
    

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
                <div style={{  display: 'flex' }}>
                    <img src={logoImg} class="logo-img" />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <h2 style={{ fontWeight: 'bold' }}>Bem vindo, </h2>
                    <h2 style={{ marginLeft: 8, fontWeight: 'bold', color: '#00E676' }}>{" " + "Admin"}</h2>
                </div>

            </div>
            <div style={{ display: 'flex', flex: 2, flexDirection: "column", justifyContent: 'space-between', marginTop: 20, paddingLeft: 230, paddingRight: 230 }}>

                <div style={{display:'flex', flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h2 onClick={() => setMenu(true)} style={{ fontWeight: 'bold', cursor: 'pointer' }}>Visão geral</h2>
                    <div style={{ backgroundColor: menu ? '#00E676' : '#fff', width: 120, height: 5, marginTop: 5 }} />
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h2 onClick={() => setMenu(false)} style={{ fontWeight: 'bold', textAlign: 'end', cursor: 'pointer' }}>Ferramentas</h2>
                    <div style={{ backgroundColor: !menu ? '#00E676' : '#fff', width: 130, height: 5, marginTop: 5, alignSelf: 'flex-end' }} />
                    </div>
                    

                </div>

                {menu && 
                <div style={{display:'flex', flex:1, flexDirection:'column', marginTop:24}}>

                    <div style={{display:'flex', flexDirection:'row'}}>

                        <div style={{ flex: 1, display: 'flex', paddingBottom: 26, paddingTop: 26, paddingRight: 18, paddingLeft: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00E676', borderRadius: 8, flexDirection: 'column', marginRight:10}}>
                            <img src={plus} style={{ position: 'absolute', display: 'flex', alignSelf: 'flex-end', width: 140, height: 110 }} />
                            <h2 style={{
                                color: '#525151'
                            }}>Ganhos Mensais</h2>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 18 }}>
                                <h2 style={{ color: '#525151' }}>R$</h2>
                                <h2 style={{ color: '#fff', marginLeft: 10, fontSize: 26, marginTop: -10 }}>9.999,99</h2>
                            </div>
                        </div>

                        <div style={{
                            flex: 1, display: 'flex', paddingBottom: 26, paddingTop: 26, paddingRight: 18, paddingLeft: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: '#812222', borderRadius: 8, flexDirection: 'column', marginLeft:10
                        }}>
                            <img src={minus} style={{ position: 'absolute', display: 'flex', alignSelf: 'flex-end', width: 140, height: 110 }} />
                            <h2 style={{
                                color: '#fff'
                            }}>Despesas Mensais</h2>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 18 }}>
                                <h2 style={{ color: '#fff' }}>R$</h2>
                                <h2 style={{ color: '#fff', marginLeft: 10, fontSize: 26, marginTop: -10 }}>9.999,99</h2>
                            </div>

                        </div>


                    </div>

                    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>

                        <div style={{ flex: 1, display: 'flex', paddingBottom: 26, paddingTop: 26, paddingRight: 18, paddingLeft: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFEB3B', borderRadius: 8, flexDirection: 'column', marginRight: 10 }}>
                            <img src={transf} style={{ position: 'absolute', display: 'flex', alignSelf: 'flex-end', width: 140, height: 110 }} />
                            <h2 style={{
                                color: '#525151'
                            }}>Transferências</h2>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 18 }}>
                                <h2 style={{ color: '#525151' }}>R$</h2>
                                <h2 style={{ color: '#fff', marginLeft: 10, fontSize: 26, marginTop: -10 }}>9.999,99</h2>
                            </div>

                        </div>


                        <div style={{ flex: 1, display: 'flex', paddingBottom: 26, paddingTop: 26, paddingRight: 18, paddingLeft: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0D47A1', borderRadius: 8, flexDirection: 'column', marginLeft: 10 }}>
                            <img src={ccard} style={{ position: 'absolute', display: 'flex', alignSelf: 'flex-end', width: 140, height: 110 }} />
                            <h2 style={{
                                color: '#fff'
                            }}>Gastos com cartão de crédito</h2>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 18 }}>
                                <h2 style={{ color: '#fff' }}>R$</h2>
                                <h2 style={{ color: '#fff', marginLeft: 10, fontSize: 26, marginTop: -10 }}>9.999,99</h2>
                            </div>

                        </div>

                    </div>

                </div>
                }

                {!menu &&
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: 24 }}>

                    <div onClick={() => history.push('/objetivos')} style={{ display: 'flex', flexDirection: 'row', cursor:'pointer' }}>

                        <div style={{ flex: 1, display: 'flex', paddingBottom: 32, paddingTop: 32, paddingRight: 18, paddingLeft: 18, justifyContent: 'center', backgroundColor: '#00E676', borderRadius: 8, flexDirection: 'column', marginRight: 10 }}>
                                <img src={chart} style={{ position: 'absolute', display: 'flex', alignSelf: 'flex-end', width: 130, height: 90 }} />
                                <h2 style={{
                                color: '#fff'
                                }}>MEUS OBJETIVOS</h2>
                                <h2 style={{ color: '#525151' }}>Veja seus objetivos e seus progressos</h2>
                            </div>

                        </div>

                    <div onClick={() => history.push('/premios')} style={{ display: 'flex', flexDirection: 'row', marginTop: 20, cursor:'pointer' }}>

                            <div style={{ flex: 1, display: 'flex', paddingBottom: 32, paddingTop: 32, paddingRight: 18, paddingLeft: 18, justifyContent: 'center', backgroundColor: '#FFEB3B', borderRadius: 8, flexDirection: 'column', marginRight: 10 }}>
                                <img src={show} style={{ position: 'absolute', display: 'flex', alignSelf: 'flex-end', width: 130, height: 90 }} />
                            <h2 style={{
                                color: '#fff'
                            }}>PRÊMIOS</h2>
                            <h2 style={{ color: '#525151' }}>Troque pontos por prêmios</h2>

                            </div>

                        </div>

                    </div>
                }

            </div>


        </div>
    )
}

