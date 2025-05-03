import styled from 'styled-components'

export const Container = styled.div`
 height: 100dvh;

img {
  display: none;
}

@media (min-width: 768px) {
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    display: inline;
    width: 48.75rem;
    height: 100dvh;
    object-fit: cover;
    object-position: center;
  }
}
`

export const SigninContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  height: 100vh;
  max-width: 25.25rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 2.5rem;
  }

  p {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
  }

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 48.75rem;
    height: 100vh;

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
    }
  }
  `
