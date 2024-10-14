import React from 'react'
import { AveProvider } from './AveProvider'
import BuscarAves from './BuscarAves'
import ListaAves from './ListaAves'


const App = () => {
  return (
      <AveProvider>
        <div>
            <BuscarAves />
            <ListaAves />
            
        </div>
      </AveProvider>
  )
}
export default App
