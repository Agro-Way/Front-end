import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const InputContent = styled.input`
  width: 100%;
  height: 2rem;
  padding: 1.6rem 1.2rem;
  border-radius: 0.625rem;
  border: none;
  background-color: #F0FFF0;
  color: #6c757d;
  margin-top: 1.6rem;

  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    border: 1px solid rgb(27, 94, 32);
    outline: none;
    transition: all 0.2s ease-in-out;
  }

  &::placeholder {
    color: #6c757d;
    font-size: 1.4rem;
    opacity: 0.5;
  }
`
