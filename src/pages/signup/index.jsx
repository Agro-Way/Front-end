import { Link } from 'react-router'
import { Lock, Mail, User } from 'lucide-react'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Container, Form, Headline, SignupContainer } from './styles'

export function Signup() {
  return (
    <Container>
      <div>
        <SignupContainer>
          <Headline>
            <h1>Resgistre-se na nossa plataforma</h1>
            <Form>
              <Input
                placeholder="Digite o seu nome"
                type="text"
                icon={<User color="#6c757d" size={20} />}
              />
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
              Já possui uma conta? <Link to="/signin">Entre</Link>
            </p>
          </Headline>
        </SignupContainer>
      </div>

      <img src="/login-image.jpg" alt="Logo" />
    </Container>
  )
}
