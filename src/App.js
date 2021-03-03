import Header from './components/Header'
import Formulario from './components/Formulario'
import Resume from './components/Resume'
import Result from './components/Result'
import Spinner from './components/Spinner'
import { useState } from 'react'
import styled from '@emotion/styled'


const Contenedor = styled.div`
max-width: 600px;
margin: 0 auto;
`
const ContenedorFormulario = styled.div`
background-color: #FFF;
padding: 3rem;
`

function App() {

  const [resume, setResume] = useState({
    cotizacion: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  })

  const [loading, setLoading] = useState(false)

  const { cotizacion, data } = resume

  return (
    <Contenedor>
      <Header
        titulo='Cotizador de seguros - Héctor Carramiñana'
      />
      <ContenedorFormulario>
        <Formulario
          setResume={setResume}
          setLoading={setLoading}
        />
        {
          loading ? <Spinner /> : null
        }
        <Resume
          data={data}
        />
        {
          !loading
            ?
            <Result
              cotizacion={cotizacion}
            />
            :
            null
          }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
