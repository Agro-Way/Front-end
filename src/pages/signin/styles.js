import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;

  > * {
    width: 50%;
  }

  > div {
    padding: 4rem 11.2rem;
  }

  img {
    object-fit: cover;
    border-top-left-radius: 2.2rem;
    border-bottom-left-radius: 2.2rem;
    overflow: hidden;
  }

  @media(max-width: 900px) {
    height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 11rem;
    
    > * {
      width: 100%;
    }
    > div {
      padding: 11rem;
    }
    
    img {
      display: none;
    }
  }

  @media(max-width: 600px) {
    > div {
      padding: 4rem;
    }
  }

`

export const SigninContainer = styled.main`
  margin-top: 11.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 38.4rem;

  
  @media(max-width: 900){
    max-width: 100%;
  }

`

export const Headline = styled.div`
  max-width: 35rem;
`

export const Form = styled.form`
 margin-top: 4rem;
`
