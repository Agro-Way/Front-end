import { Link } from 'react-router'
import { Lock, Mail } from 'lucide-react'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Container, Form, Headline, SigninContainer } from './styles'

export function Signin() {
  return (
    <Container>
      <div>
        <SigninContainer>
          <Headline>
            <h1>Acesse a sua conta</h1>
            <Form>
              <Input
                placeholder="Digite o seu email"
                type="email"
                icon={<Mail color="#6c757d" size={20} />}
              />

              <Input
                placeholder="Digite a sua senha"
                type="password"
                icon={<Lock color="#6c757d" size={20} />}
              />
              <Button>Entrar</Button>
            </Form>
            <p>
              Não tem uma conta? <Link to="/signup">Regista-se agora!</Link>
            </p>
          </Headline>
        </SigninContainer>
      </div>

      <img src="/login-image.jpg" alt="Logo" />
    </Container>
  )
}
