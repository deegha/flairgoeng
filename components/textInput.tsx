import styled from 'styled-components'

type TState = 'default' | 'error' | 'selected'

interface IProps {
  placeholder: string
  value: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  state: TState
}

const Container = styled.div<{ state: TState }>`
  border-radius: 0.2rem;
  border: 2px solid ${({ theme, state }) => theme.color.textInput.border[state]};
  overflow: hidden;
  width: 100%;
  margin: 1rem;
  input {
    width: 100%;
    padding: 0.6rem;
    font-size: 1.5rem;
    border: none;
    &:focus {
      outline: none;
    }
  }
`

export const TextInput: React.FunctionComponent<IProps> = ({
  value,
  name,
  onChange,
  placeholder,
  state = 'default',
}) => {
  return (
    <Container state={state}>
      <input type="text" value={value} name={name} onChange={onChange} placeholder={placeholder} />
    </Container>
  )
}
