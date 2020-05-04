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

    function alerta(){
        alert('Em desenvolvimento')
        history.push('home')
    }   


    return (
        <div className="profile-container">
            <div style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', display: 'flex', paddingTop: 25, paddingLeft: 230, paddingRight: 230, paddingBottom: 50, }}>
                <div style={{ display: 'flex' }}>
                    <img src={logoImg} class="logo-img" />
                </div>
                <div>
                    <h2 onClick={() => history.push('/confirmarNovoObjetivo')} style={{ marginLeft: 8, fontWeight: 'bold', color: '#00E676', textAlign: 'end', cursor: 'pointer' }}>Voltar</h2>
                </div>

            </div>
            <div style={{ display: 'flex', flex: 2, flexDirection: "column", justifyContent: 'space-between', marginTop: 20, paddingLeft: 230, paddingRight: 230 }}>

                <div style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h2 style={{ fontWeight: 'bold' }}>Termos e regras de uso</h2>
                    </div>
                </div>


                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: 30 }}>

                    <p style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet est vel eros elementum, at egestas enim pulvinar. Vivamus tristique, lectus a laoreet bibendum, elit tellus viverra ante, eu aliquam tellus arcu vitae nisi. Aenean vel tempus ligula. Praesent sed ultricies dolor. Fusce pharetra elit eget mollis volutpat. Ut posuere venenatis lectus, nec commodo lorem volutpat quis. Vestibulum fringilla neque tortor, ut finibus turpis euismod eu. Donec gravida a lectus a egestas. Sed augue justo, elementum eget commodo vel, condimentum sed erat. Maecenas tempor aliquam turpis, in finibus lectus luctus non. Duis non tincidunt quam. Etiam velit erat, malesuada eu augue in, auctor dapibus lorem. Quisque commodo quam at felis rhoncus, et rhoncus arcu ullamcorper. Aenean nunc erat, hendrerit et interdum vitae, venenatis vitae urna.

                    Etiam nec justo et orci pretium porta ac eu arcu. Aenean a nunc sit amet metus rutrum vulputate. Ut vitae sem pulvinar, facilisis massa vel, aliquet leo. Curabitur facilisis suscipit metus, at maximus lectus sodales commodo. Nunc venenatis imperdiet dignissim. In fringilla nulla nisi, in condimentum orci luctus finibus. Quisque consequat accumsan leo, a placerat metus imperdiet at. Nulla sodales efficitur leo quis pretium. Integer ac purus mi. Vestibulum blandit mi sit amet nibh vehicula eleifend. Vivamus consequat quam vitae elit pharetra feugiat. Integer nec mauris a urna bibendum dignissim. Mauris posuere vitae tellus eu luctus. Etiam facilisis massa turpis, nec cursus diam pretium vel. Nulla enim justo, feugiat et porttitor id, volutpat ac libero.

                    Nam eget pretium sem. Fusce nisi nisl, vehicula eu nibh sit amet, facilisis egestas turpis. Nulla leo nisi, gravida vel ex vitae, finibus rutrum eros. Maecenas ac ex turpis. Quisque eleifend nec purus id elementum. Quisque mi enim, eleifend sed volutpat lacinia, ultrices quis dui. Quisque massa sapien, fermentum eu commodo id, luctus id diam. Vestibulum iaculis sapien vitae ornare condimentum.

                    Proin ultrices tincidunt orci sed mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In sodales purus eget lobortis venenatis. Morbi ut venenatis quam. Etiam congue erat a tempor auctor. Nullam lobortis felis et ligula fermentum luctus. Pellentesque vitae ipsum ultrices, malesuada magna eu, euismod arcu. Maecenas non urna volutpat, bibendum lacus ut, commodo magna. Donec commodo nulla volutpat est pellentesque, nec interdum felis posuere. Pellentesque placerat justo a velit imperdiet, a tempor nisl fringilla. Cras suscipit erat id turpis imperdiet pharetra. Sed hendrerit nibh vitae pellentesque dapibus. Fusce imperdiet luctus ante, sed consequat felis blandit sed. Quisque sollicitudin facilisis metus vel mollis.

                    Sed feugiat, nulla eget tristique lobortis, dolor tortor fringilla arcu, faucibus volutpat tortor nibh ac lorem. Sed risus diam, laoreet non neque ac, scelerisque euismod magna. Donec tempus sit amet tellus in molestie. Ut sodales dolor at volutpat auctor. Donec at magna at lorem lobortis auctor. Sed accumsan in sapien eget malesuada. Praesent ac enim a magna egestas egestas at sed quam. In luctus sodales augue vitae hendrerit. Integer quam sem, egestas eu accumsan sed, efficitur sed tortor. Phasellus id mi justo.

                    Nunc suscipit faucibus enim quis finibus. In hac habitasse platea dictumst. Proin fringilla maximus egestas. Nullam ultrices risus vitae diam rutrum, vitae imperdiet arcu consectetur. Integer pellentesque rutrum eros, sit amet sodales est hendrerit quis. Donec sed tempor dui. Praesent at auctor purus, in convallis purus. Nunc dolor diam, laoreet at nisi eget, ornare egestas ex. In et ipsum aliquet, varius magna non, accumsan diam.

                    Phasellus congue arcu id dolor aliquam, a dictum justo porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur leo risus, fermentum ac risus id, porta lobortis elit. Sed scelerisque libero ut lacinia scelerisque. Nullam tellus arcu, faucibus eget neque sed, finibus luctus lectus. Mauris accumsan eros diam, vel imperdiet orci volutpat eget. Sed laoreet lorem semper euismod lobortis. Pellentesque interdum dignissim est, id convallis augue malesuada ac. Aliquam in purus eget felis posuere blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer eget viverra tortor, ut sagittis neque. Integer non dignissim magna.

                    Proin eget sapien lacus. Nullam a ultrices purus. Etiam a mauris in tellus condimentum bibendum non sit amet arcu. Suspendisse potenti. Nunc quam turpis, pharetra at magna eget, finibus hendrerit magna. Suspendisse in elit ornare, congue lacus a, rutrum mauris. Vestibulum sollicitudin, felis blandit pulvinar lobortis, sem justo tempor ante, nec hendrerit nibh dui ac ligula. Vestibulum tincidunt suscipit lorem, vitae tincidunt ipsum gravida sit amet. Nam eleifend lacus et hendrerit aliquet. Nullam at orci sed est imperdiet blandit. Nunc quis dolor et neque posuere posuere quis sit amet odio. Pellentesque at leo et ex auctor aliquam nec a nunc.

                    Vestibulum sit amet nunc metus. Phasellus scelerisque neque a nulla faucibus ultrices. Praesent lorem dolor, iaculis nec nulla ut, sagittis porta tortor. Morbi fermentum posuere faucibus. Praesent iaculis lacinia ante, sit amet fringilla nibh consectetur sit amet. Aliquam erat volutpat. Suspendisse sit amet nisi quis lorem congue malesuada vel eget diam. Donec euismod enim vitae nunc rutrum mattis.

Aliquam erat volutpat. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec venenatis nulla ut nunc sollicitudin sagittis. Aenean et lacus vestibulum, rhoncus ex vitae, pellentesque orci. Maecenas sit amet urna porta, finibus nisl vel, tristique orci. Fusce et sodales mauris.</p>
                   
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 40 }}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                       <p style={{textAlign:'center'}}>Ao clicar em confirmar, declaro que li e </p>
                        <p style={{ textAlign: 'center' }}>concordo com os termos</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 0, marginBottom: 20 }}>
                        <button style={{ width: '30%', height: 40, marginTop: 10 }} className="button-outline" onClick={() => history.push('/confirmarNovoObjetivo')}>VOLTAR</button>
                        
                        <button style={{ width: '30%', height: 40, marginTop: 10 }} className="button" onClick={() => alerta()}>CONFIRMAR</button>
                    </div>

                </div>

            </div>


        </div>
    )
}

