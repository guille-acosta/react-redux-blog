import React  from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Menu from './menu'
import Usuarios from './Usuarios';
import Publicaciones from './Publicaciones';
import Tareas from './Tareas'
import Guardar from './Tareas/Guardar';


const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path='/' component={Usuarios} />
      <Route exact path='/tareas' component={Tareas} />
      <Route exact path='/tareas/guardar' component={Guardar} />
      <Route exact path='/publicaciones/:key' component={Publicaciones} />
    </div>
    
  </BrowserRouter>
)

export default App;