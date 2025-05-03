import { Link } from 'react-router'
import { Lock, Mail } from 'lucide-react'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Container, SigninContainer } from './styles'

export function Signin() {
  return (
    <Container>
      <SigninContainer>
        <h1>Faça Login</h1>
        <div>
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
        </div>

        <Button>Entrar</Button>
        <p>
          Não tem uma conta? <Link to="/signup">Regista-se agora!</Link>
        </p>
      </SigninContainer>

      <img src="/login-image.jpg" alt="Logo" />
    </Container>
  )
}
