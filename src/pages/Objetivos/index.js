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
                    <h2 onClick={() => history.push('/home')} style={{ marginLeft: 8, fontWeight: 'bold', color: '#00E676', textAlign: 'end', cursor: 'pointer' }}>Voltar</h2>
                </div>

            </div>
            <div style={{ display: 'flex', flex: 2, flexDirection: "column", justifyContent: 'space-between', marginTop: 20, paddingLeft: 230, paddingRight: 230 }}>

                <div style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h2 style={{ fontWeight: 'bold' }}>Objetivos</h2>
                    </div>

                    <div onClick={() => history.push('/novoObjetivo')} style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#00E676', paddingBottom:10, paddingTop:10, paddingLeft:15, paddingRight:15, borderRadius:8, cursor:'pointer' }}>
                        <h3 style={{ textAlign: 'end', color:'#fff' }}>NOVO OBJETIVO</h3>
                    </div>


                </div>


                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: 30 }}>

                    <div onClick={() => history.push('/detalhesObjetivo')} style={{ display: 'flex', flexDirection: 'row', maxHeight: 100, cursor: 'pointer', }}>
                        {/* <img src={iphone} style={{ height: 50 }} /> */}
                        <p style={{ fontWeight: 'bold', color:'#00E676', fontSize:26}}>80%</p>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30 }}>
                            <h3 style={{}}>Viagem para Orlando</h3>
                            <h3 style={{ fontWeight: 'bold', color: '#00E676', marginTop: 20 }}>R$99.999,99</h3>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', maxHeight: 100, cursor: 'pointer', marginTop: 50 }} onClick={() => history.push('/detalhesObjetivo')}>
                        {/* <img src={iphone} style={{ height: 50 }} /> */}
                        <p style={{ fontWeight: 'bold', color: '#00E676', fontSize: 26 }}>99%</p>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30 }}>
                            <h3 style={{}}>Trocar de carro</h3>
                            <h3 style={{ fontWeight: 'bold', color: '#00E676', marginTop: 20 }}>R$99.999,99</h3>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', maxHeight: 100, cursor: 'pointer', marginTop: 50 }} onClick={() => history.push('/detalhesObjetivo')}>
                        {/* <img src={iphone} style={{ height: 50 }} /> */}
                        <p style={{ fontWeight: 'bold', color: '#00E676', fontSize: 26 }}>80%</p>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30 }}>
                            <h3 style={{}}>Viagem para Orlando</h3>
                            <h3 style={{ fontWeight: 'bold', color: '#00E676', marginTop: 20 }}>R$99.999,99</h3>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', maxHeight: 100, cursor: 'pointer', marginTop: 50 }} onClick={() => history.push('/detalhesObjetivo')}>
                        {/* <img src={iphone} style={{ height: 50 }} /> */}
                        <p style={{ fontWeight: 'bold', color: '#00E676', fontSize: 26 }}>99%</p>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30 }}>
                            <h3 style={{}}>Trocar de carro</h3>
                            <h3 style={{ fontWeight: 'bold', color: '#00E676', marginTop: 20 }}>R$99.999,99</h3>
                        </div>
                    </div>

                     <div style={{ display: 'flex', flexDirection: 'row', maxHeight: 100, cursor: 'pointer', marginTop: 50 }} onClick={() => history.push('/detalhesObjetivo')}>
                        {/* <img src={iphone} style={{ height: 50 }} /> */}
                        <p style={{ fontWeight: 'bold', color: '#00E676', fontSize: 26 }}>80%</p>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30 }}>
                            <h3 style={{}}>Viagem para Orlando</h3>
                            <h3 style={{ fontWeight: 'bold', color: '#00E676', marginTop: 20 }}>R$99.999,99</h3>
                        </div>
                    </div>

                     <div style={{ display: 'flex', flexDirection: 'row', maxHeight: 100, cursor: 'pointer', marginTop: 50 }} onClick={() => history.push('/detalhesObjetivo')}>
                        {/* <img src={iphone} style={{ height: 50 }} /> */}
                        <p style={{ fontWeight: 'bold', color: '#00E676', fontSize: 26 }}>99%</p>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30 }}>
                            <h3 style={{}}>Trocar de carro</h3>
                            <h3 style={{ fontWeight: 'bold', color: '#00E676', marginTop: 20 }}>R$99.999,99</h3>
                        </div>
                    </div>

                    {/* <ReactList
                        itemRenderer={(item,index)=>{
                            return(
                                <p>aaa</p>
                            )
                        }}
                        length={50}
                        type='uniform'
                        /> */}

                </div>

            </div>


        </div>
    )
}

