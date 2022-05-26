import React from 'react'
import styled from 'styled-components'

type TState = 'default' | 'error' | 'selected'

interface IProps {
  placeholder: string
  value: string
  name: string
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
  state: TState
}

const Container = styled.div<{ state: TState }>`
  border-radius: 0.2rem;
  overflow: hidden;
  width: 100%;
  margin: 1rem;
  textarea {
    width: 100%;
    padding: 0.6rem;
    font-size: 1.5rem;
    border: none;
    resize: none;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 400;
    &:focus {
      outline: none;
    }
  }
`

export const TextArea: React.FunctionComponent<IProps> = ({
  onChange,
  value,
  placeholder,
  state,
  name,
}) => {
  return (
    <Container state={state}>
      <textarea
        rows={7}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </Container>
  )
}
