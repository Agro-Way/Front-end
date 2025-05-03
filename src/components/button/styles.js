import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 20rem;

  button {
    width: 100%;
    height: 3.125rem;
    background-color: #2dc653;
    color: #fff;
    border: none;
    border-radius: 1.25rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #4ad66d;
    }
  }

`
