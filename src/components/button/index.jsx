import { ButtonContainer } from './styles'

export function Button({ type, onClick, children }) {
  return (
    <ButtonContainer>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </ButtonContainer>
  )
}
