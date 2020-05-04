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

    function termos(){
        if(selected == -1){
            alert('Selecione alguma opção')
        }
        else{
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
                    <h2 onClick={() => history.push('/novoObjetivo')} style={{ marginLeft: 8, fontWeight: 'bold', color: '#00E676', textAlign: 'end', cursor: 'pointer' }}>Voltar</h2>
                </div>

            </div>
            <div style={{ display: 'flex', flex: 2, flexDirection: "column", justifyContent: 'space-between', marginTop: 20, paddingLeft: 230, paddingRight: 230 }}>

                <div style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h2 style={{ fontWeight: 'bold' }}>Como chegar lá?</h2>
                    </div>
                </div>


                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: 30 }}>

                   <p style={{fontSize:16}}>Para que você consiga concluir seu objetivo, criamos alguns caminhos com base nos seus dados.</p>
                   <p style={{fontSize:16}}>Escolha o que mais combina com você.</p>

                   <div style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:20}}> 

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: 'solid', borderColor: '#00E676', paddingTop:15, paddingBottom:10, flex:1, borderRadius:6, borderWidth: selected == 0 ? 0.5 : 0}}>

                            <p style={{textAlign:'center', fontWeight:'bold'}}>10 parcelas de</p>
                            <p style={{ textAlign: 'center', fontWeight:'bold' }}>R$99,99</p>

                            <div style={{ backgroundColor: selected == 0 ? '#212121' : '#424242', marginTop:20, width:'80%', borderRadius:6, paddingTop:15, paddingBottom:15}}>
                                <p style={{ textAlign: 'center', color:'#00E676', fontSize:24 }}>R$99,99</p>
                                <p style={{ textAlign: 'end', color: '#fff', marginRight:15 }}>10x</p>
                            </div>

                            <p style={{ textAlign: 'center', marginTop:20 }}>Conclusão prevista em</p>
                            <p style={{ textAlign: 'center', marginTop: 10, marginBottom:10 }}>20 mai 2022</p>

                            <button style={{ width: '80%', height: 35, marginTop: 10 }} className={selected == 0 ? "button" : "button-outline"} onClick={() => selected == 0 ? setSelected(-1) : setSelected(0)}>{selected == 0 ? 'SELECIONADO' : 'SELECIONE'}</button>
                            {selected == 0 && 
                            <div style={{ position: 'absolute', width: 50, height: 50, borderRadius: 100, backgroundColor:'#00E676', bottom:-26, alignItems:'center', justifyContent:'center', display:'flex'}}>
                            <FiCheck size={26} color="#fff"></FiCheck>
                            </div>
                            }
                           

                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: 'solid', borderColor: '#00E676', paddingTop: 15, paddingBottom: 10, flex: 1, borderRadius: 6, borderWidth: selected == 1 ? 0.5 : 0 }}>

                            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>20 parcelas de</p>
                            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>R$99,99</p>

                            <div style={{ backgroundColor: selected == 1 ? '#212121' : '#424242', marginTop: 20, width: '80%', borderRadius: 6, paddingTop: 15, paddingBottom: 15 }}>
                                <p style={{ textAlign: 'center', color: '#00E676', fontSize: 24 }}>R$99,99</p>
                                <p style={{ textAlign: 'end', color: '#fff', marginRight: 15 }}>20x</p>
                            </div>

                            <p style={{ textAlign: 'center', marginTop: 20 }}>Conclusão prevista em</p>
                            <p style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>20 mai 2022</p>

                            <button style={{ width: '80%', height: 35, marginTop: 10 }} className={selected == 1 ? "button" : "button-outline"} onClick={() => selected == 1 ? setSelected(-1) : setSelected(1)}>{selected == 1 ? 'SELECIONADO' : 'SELECIONE'}</button>
                            {selected == 1 &&
                                <div style={{ position: 'absolute', width: 50, height: 50, borderRadius: 100, backgroundColor: '#00E676', bottom: -26, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                    <FiCheck size={26} color="#fff"></FiCheck>
                                </div>
                            }


                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: 'solid', borderColor: '#00E676', paddingTop: 15, paddingBottom: 10, flex: 1, borderRadius: 6, borderWidth: selected == 2 ? 0.5 : 0 }}>

                            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Personalizado</p>
                            

                            <div style={{ backgroundColor: selected == 2 ? '#212121' : '#424242', marginTop: 37, width: '80%', borderRadius: 6, paddingTop: 15, paddingBottom: 15 }}>
                                <p style={{ textAlign: 'center', color: '#00E676', fontSize: 24 }}>R$99,99</p>
                                <p style={{ textAlign: 'end', color: '#fff', marginRight: 15 }}>Selecione..</p>
                            </div>

                            <p style={{ textAlign: 'center', marginTop: 20 }}>Conclusão prevista em</p>
                            <p style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>20 mai 2022</p>

                            <button style={{ width: '80%', height: 35, marginTop: 10 }} className={selected == 2 ? "button" : "button-outline"} onClick={() => selected == 2 ? setSelected(-1) : setSelected(2)}>{selected == 2 ? 'SELECIONADO' : 'SELECIONE'}</button>
                            {selected == 2 &&
                                <div style={{ position: 'absolute', width: 50, height: 50, borderRadius: 100, backgroundColor: '#00E676', bottom: -26, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                    <FiCheck size={26} color="#fff"></FiCheck>
                                </div>
                            }


                        </div>

                   </div>

                   <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:40, marginBottom:20}}>
                        <button style={{ width: '30%', height: 40, marginTop: 10 }} className="button-outline" onClick={() => history.push('/novoObjetivo')}>VOLTAR</button>

                        <button style={{ width: '30%', height: 40, marginTop: 10 }} className="button" onClick={() => termos()}>E AI, TOPA?</button>
                   </div>

                </div>

            </div>


        </div>
    )
}

