import styled from 'styled-components'

const Button = styled.button`
  padding: 1rem 1rem;
  background-color: #7c88fc;
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: ${({ wide }) => (wide ? '100%' : 'auto')};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 4px hsla(234, 96%, 74%, 0.4);
  }
`

export default Button
