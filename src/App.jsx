import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Estilo global (apenas para o site)
import GlobalStyle from './globalStyles/GlobalStyle';

// Layout do dashboard
import DashboardLayout from './layouts/DashboardLayout';

// Modal Context e wrapper
import { ModalProvider } from './context/ModalContext';
import ModalWrapper from './components/ModalWrapper';

// Páginas do site
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import Produtos from './pages/Produtos';
import ConsultarPedido from './pages/ConsultarPedido';
import Post from './pages/Post';
import Carrinho from './pages/Carrinho';
import Checkout from './pages/Checkout';
import PedidoConfirmado from './pages/PedidoConfirmado';
import DetalhesProdutos from './pages/DetalhesProdutos';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MotoristaInfo from './pages/MotoristaInfo';
import RecuperarSenha from './pages/RecuperarSenha';
import ConfirmarCodigo from './pages/ConfirmarCodigo';
import RedefinirSenha from './pages/RedefinirSenha';
import NotFound from './pages/NotFound';

// Páginas do dashboard do produtor
import OverviewPage from './dashboard/pages/OverviewPage';
import ProductsPage from './dashboard/pages/ProductsPage';
import UsersPage from './dashboard/pages/UsersPage';
import SalesPage from './dashboard/pages/SalesPage';
import OrdersPage from './dashboard/pages/OrdersPage';
import AnalyticsPage from './dashboard/pages/AnalyticsPage';
import SettingsPage from './dashboard/pages/SettingsPage';
import DashboardNotFound from './dashboard/pages/DashboardNotFound';

function AppRoutes() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {/* Aplica estilos globais somente fora do dashboard */}
      {!isDashboard && <GlobalStyle />}

      <Routes>
        {/* Rotas do site */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post/" element={<Post />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/detalhes/" element={<DetalhesProdutos />} />
        <Route path="/consultar-pedido" element={<ConsultarPedido />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pedido-confirmado" element={<PedidoConfirmado />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Signup />} />
        <Route path="/motorista-info" element={<MotoristaInfo />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/recuperar-senha/codigo-confirmacao/" element={<ConfirmarCodigo />} />
        <Route path="/recuperar-senha/redefinir-senha/" element={<RedefinirSenha />} />

        {/* Rotas do dashboard do produtor com layout exclusivo */}
        <Route path="/dashboard" element={<DashboardLayout><OverviewPage /></DashboardLayout>} />
        <Route path="/dashboard/produtos" element={<DashboardLayout><ProductsPage /></DashboardLayout>} />
        <Route path="/dashboard/clientes-motoristas" element={<DashboardLayout><UsersPage /></DashboardLayout>} />
        <Route path="/dashboard/vendas" element={<DashboardLayout><SalesPage /></DashboardLayout>} />
        <Route path="/dashboard/pedidos" element={<DashboardLayout><OrdersPage /></DashboardLayout>} />
        <Route path="/dashboard/analises" element={<DashboardLayout><AnalyticsPage /></DashboardLayout>} />
        <Route path="/dashboard/definicoes" element={<DashboardLayout><SettingsPage /></DashboardLayout>} />

        {/* 404 */}
        <Route path="*" element={
          isDashboard
          ? <DashboardLayout><DashboardNotFound /></DashboardLayout> // Dashboard NotFound com layout e estilos do dashboard
          : <NotFound /> } 
        />
      </Routes>
      <ModalWrapper />
    </>
  );
}

function App() {
  return (
    <ModalProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ModalProvider>
    
  );
}

export default App;
