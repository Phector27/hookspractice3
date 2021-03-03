import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Message = styled.p`
background-color: rgb(127, 224, 237);
margin-top: 2rem;
padding: 1rem;
text-align: center;
`

const ResultCotizacion = styled.div`
text-align: center;
padding: .5rem;
border: 1px solid #26C6DA;
background-color: rgb(127, 224, 237);
margin-top: 1rem;
position: relative;
`

const FinalResult = styled.p`
color: #00838F;
padding: 1rem;
text-transform: uppercase;
font-weight: bold;
margin: 0;
`


const Result = ({ cotizacion }) => {

    return (
        (cotizacion === 0)
            ?
            <Message>Elige marca, año y plan para calcular tu seguro</Message>
            :
            <ResultCotizacion>
                <TransitionGroup
                    component='span'
                    className='resultado'
                >
                    <CSSTransition
                        classNames='resultado'
                        key={cotizacion}
                        timeout={{ enter: 1000, exit: 2000 }}
                    >
                        <FinalResult>El total es: <span>{cotizacion}</span>€</FinalResult>
                    </CSSTransition>
                </TransitionGroup>
            </ResultCotizacion>
    );
}

Result.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Result;