import { InputContainer, InputContent } from './styles'

export function Input({ placeholder, type, value, icon }) {
  return (
    <InputContainer>
      {icon}
      <InputContent placeholder={placeholder} type={type} value={value} />
    </InputContainer>
  )
}
