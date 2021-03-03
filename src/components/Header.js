import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContenedorHeader = styled.header`
  padding: 10px;
  background-color: #26C6DA;
  color: #FFFFFF;
`

const TextoHeader = styled.h1`
font-size: 2rem;
font-family: 'Slabo 27px', serif;
text-align: center;
margin:0;
`

const Header = ({ titulo }) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
}

export default Header;