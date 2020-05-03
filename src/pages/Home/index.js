import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'


export default function Home() {
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

                <Link className="button" to="/objetivos">Objetivos</Link>
                <Link style={{marginLeft:10}} className="button" to="/premios">Prêmios</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
                
            </header>
            <h1>Suas finanças</h1>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut elit sodales, pretium mi a, efficitur tellus. Nunc fringilla suscipit sagittis. Pellentesque lobortis rutrum ultrices. Sed semper, ipsum sed aliquam eleifend, magna enim vehicula lectus, eget fermentum neque quam ut ex. Phasellus dapibus elit nisi, ac convallis nibh mattis non. Phasellus at dolor convallis, convallis ex sed, convallis libero. Duis magna metus, venenatis non nisi id, interdum condimentum dui. Suspendisse iaculis, dolor in dapibus maximus, diam mauris tempus lectus, in tincidunt enim eros vitae tellus. Aenean in pellentesque arcu.

            Cras fringilla congue mauris, a gravida odio malesuada bibendum. In vitae tellus volutpat, tincidunt tortor sed, posuere diam. In congue eros a felis eleifend, nec imperdiet urna placerat. Duis dignissim ultricies interdum. Nam consequat varius vulputate. Donec sed quam ullamcorper, dapibus felis vel, tempus sem. Nullam fringilla dui a tellus pretium rhoncus. Vivamus vel consectetur tellus. Maecenas nec metus at felis dignissim rutrum.

            Praesent augue est, tristique vel neque eget, rutrum finibus sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vitae mollis leo. Nullam sit amet ex quis nulla tristique lacinia. Sed iaculis pellentesque est nec hendrerit. Donec tincidunt egestas nibh nec vulputate. Etiam cursus varius elit sit amet maximus. Phasellus purus lorem, auctor ac mi viverra, pretium feugiat est. Vestibulum vulputate eget lectus ac blandit. Maecenas quis congue justo. Suspendisse aliquam egestas purus, sed mattis massa dictum eu. Aenean ante massa, scelerisque eget lorem eu, mollis tincidunt ipsum.

            In malesuada neque enim, pharetra ultrices nulla porttitor at. Nulla porta odio nec metus congue, condimentum commodo turpis venenatis. Sed non nisl et ex porta laoreet eu dignissim sapien. Fusce nec diam porta, commodo erat vitae, venenatis arcu. Nunc porta turpis auctor pharetra placerat. Quisque lacinia iaculis massa eu ornare. Pellentesque eu tempor sapien. Quisque vel commodo sem. In nisi massa, scelerisque vel massa ac, fringilla ultrices lorem.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur tellus in justo tristique auctor. Fusce mauris quam, mollis nec elementum in, sagittis quis metus. Cras tortor lacus, tempus quis nulla id, pretium scelerisque risus. Curabitur rhoncus gravida tincidunt. Etiam sit amet suscipit nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc tristique erat rhoncus ipsum scelerisque egestas. Proin lacinia maximus suscipit.</p>

            {/* <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

