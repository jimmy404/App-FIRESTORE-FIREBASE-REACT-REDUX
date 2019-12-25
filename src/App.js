import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Suscriptores from './componentes/suscriptores/Suscriptores';
import MostrarSuscriptor from './componentes/suscriptores/MostrarSuscriptor';
import EditarSuscriptor from './componentes/suscriptores/EditarSuscriptor';
import NuevoSuscriptor from './componentes/suscriptores/NuevoSuscriptor';

import Navbar from './componentes/layout/Navbar';

function App() {
  return (
      <Router>
          <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/suscriptores" component={Suscriptores} />
                <Route exact path="/suscriptores/nuevo" component={NuevoSuscriptor} />
                <Route exact path="/suscriptores/mostrar/:id" component={MostrarSuscriptor} />
                <Route exact path="/suscriptores/editar/:id" component={EditarSuscriptor} />
              </Switch>
            </div>
      </Router>
    );
}

export default App;
