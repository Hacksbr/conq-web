import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Objetivos from './pages/Objetivos'
import NovoObjetivo from './pages/NovoObjetivo'
import DetalhesObjetivo from './pages/DetalhesObjetivo'
import Premios from './pages/Premios'
import ConfirmarNovoObjetivo from './pages/ConfirmarNovoObjetivo'
import TermosObjetivo from './pages/TermosObjetivo'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/home" component={Home} />
        <Route path="/incidents/new" component={NovoObjetivo} />
        <Route path="/objetivos" component={Objetivos} />
        <Route path="/novoObjetivo" component={NovoObjetivo} />
        <Route path="/detalhesObjetivo" component={DetalhesObjetivo} />
        <Route path="/premios" component={Premios} />
        <Route path="/confirmarNovoObjetivo" component={ConfirmarNovoObjetivo} />
        <Route path="/termosObjetivo" component={TermosObjetivo} />
      </Switch>
    </BrowserRouter>
  )
}
