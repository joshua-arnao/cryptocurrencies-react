import React from 'react'
import styled from '@emotion/styled'
import UseSelectCoins from '../hooks/useSelectCoins'
import { coins } from '../data/coins'

const InputSubmite = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

const Form = () => {
  const [SelectCoins] = UseSelectCoins('Elige tu moneda', coins)

  const handleSubmit = () => {}

  return (
    <form>
      <SelectCoins />

      <InputSubmite type='submit' value='Cotizar' />
    </form>
  )
}

export default Form
