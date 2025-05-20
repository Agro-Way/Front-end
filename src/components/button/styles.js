import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-block: 3.2rem;


  button {
    width: 100%;
    height: 5.2rem;
    background-color: #2dc653;
    color: #fff;
    border: none;
    border-radius: 2rem;
    /* padding: 1.6rem 2.4rem; */
    font-weight: bold;
    transition: background-color 0.3s ease;
    font-size: 1.6rem;

    &:hover {
      background-color:rgb(11, 99, 33);
    }
  }

`
