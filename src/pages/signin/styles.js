import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  > * {
    width: 50%;
  }

  > div {
    padding: 4rem 11.2rem;
  }

  img {
    height: 100vh;
    object-fit: cover;
  }

`

export const SigninContainer = styled.main`
  margin-top: 11.4rem;
`

export const Headline = styled.div`
  max-width: 35rem;
`

export const Form = styled.form`
 margin-top: 4rem;
`
