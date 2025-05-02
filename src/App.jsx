import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import Teste from './pages/Teste';
import DashboardHome from './dashboard/DashboardHome';
import './assets/css/style.css'; // estilo global

function App() {
  return (
    <Router>
      <Routes>
        {/*Rotas do site principal*/}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post/" element={<Post />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/teste" element={<Teste />} />

        {/*Rotas do dashboard*/}
        <Route path="/dashboard" element={<DashboardHome />} />

        {/*Rotas não encontradas*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
