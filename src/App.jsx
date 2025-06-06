import { Route, Routes } from 'react-router'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import { GlobalStyles } from './globalStyles/global-styles'

export function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}
