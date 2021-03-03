import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { firstUppercase } from '../Helper'

const ContainerResume = styled.div`
padding: 1rem;
background-color: #00838F;
color: #FFF;
margin-top: 1rem;
text-align: center;
`

const Resume = ({ data }) => {

    const { brand, year, plan } = data

    if (brand === '' || year === '' || plan === '') return null

    return (
        <ContainerResume>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {firstUppercase(brand)}</li>
                <li>Plan:{firstUppercase(plan)}</li>
                <li>Año: {year}</li>
            </ul>
        </ContainerResume>
    );
}

Resume.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Resume;