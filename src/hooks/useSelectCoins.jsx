import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: sans-serif;
`

const UseSelectCoins = (label, options) => {
  const SelectCoins = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value=''>Seleccione</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  )

  return [SelectCoins]
}

export default UseSelectCoins
