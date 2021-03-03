import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { getDifference, calcBrand, getPlan } from '../Helper'

const Campo = styled.div`
display: flex;
margin-bottom: 1rem;
align-items: center;
`

const Label = styled.label`
flex: 0 0 100px;
`

const Select = styled.select`
display: block;
width: 100%;
padding: 1rem;
border: 1px solid #e1e1e1;
-webkit-appearance: none;
`

const InputRadio = styled.input`
margin: 0 1rem;
`

const Button = styled.button`
background-color: #00838F;
font-size: 16px;
width: 100%;
padding: 1rem;
color: #fff;
text-transform: uppercase;
font-weigth: bold;
border: none;
transition: background-color .5s ease;
margin-top: 2rem;

&:hover {
    background-color: #26C6DA;
    cursor: pointer;
}
`

const Error = styled.div`
background-color: red;
color: white;
padding: 1rem;
width: 100%;
text-align: center;
margin-bottom: 2rem;
`


const Formulario = ({ setResume, setLoading }) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState(false)

    // Extraer los valores:
    const { brand, year, plan } = data

    // Leer los valores del formulario y actualizar state
    const getInformation = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    // Gestionar submit del formulario
    const handleSubmit = e => {
        e.preventDefault()

        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true)
            return;
        }
        setError(false)


        // Una base de 2000
        let result = 2000

        // Obtener diferencia de precio cuando los años descienden
        const difference = getDifference(year)

        // Cada año + de antigüedad, se resta el 3%
        result -= ((difference * 3) * result) / 100;

        // Americano incremento 15%, asíatico 5% y europeo 30%
        result = calcBrand(brand) * result;


        // Básico aumenta 20%
        // Completo 50%
        const incrementPlan = getPlan(plan)
        result = parseFloat(incrementPlan * result).toFixed(2)

        setLoading(true)

        setTimeout(() => {

            //Elimina el Spinner
            setLoading(false)

            // Enviar la información del resultado despuñes de 3 segundos
            setResume({
                cotizacion: Number(result),
                data
            })
        }, 3000);

        // Total

    }
    // Total

    return (
        <form
            onSubmit={handleSubmit}
        >
            {
                error
                    ?
                    <Error>Todos los campos son obligatorios</Error>
                    :
                    null
            }
            <Campo>
                <Label>Marca </Label>
                <Select
                    name='brand'
                    value={brand}
                    onChange={getInformation}
                >
                    <option value=''>-- Seleccione --</option>
                    <option value='americano'>Americano</option>
                    <option value='europeo'>Europeo</option>
                    <option value='asiático'>Asiático</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año </Label>
                <Select
                    name='year'
                    value={year}
                    onChange={getInformation}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type='radio'
                    name='plan'
                    value='basico'
                    checked={plan === 'basico'}
                    onChange={getInformation}
                />Básico

                <InputRadio
                    type='radio'
                    name='plan'
                    value='completo'
                    checked={plan === 'completo'}
                    onChange={getInformation}
                />Completo
            </Campo>

            <Button type='submit'>Cotizar</Button>
        </form>
    );
}

Formulario.propTypes = {
    setResume: PropTypes.func.isRequired,
    setLoading:PropTypes.func.isRequired
}

export default Formulario;