import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Estilo global
// import './assets/css/style.css'; 
import GlobalStyle from './assets/css/GlobalStyle';

// Layout
import DashboardLayout from './layouts/DashboardLayout';

// Páginas do site
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import Teste from './pages/Teste';

// Páginas do dashboard
import OverviewPage from "./dashboard/pages/OverviewPage";
import ProductsPage from "./dashboard/pages/ProductsPage";
import UsersPage from "./dashboard/pages/UsersPage";
import SalesPage from "./dashboard/pages/SalesPage";
import OrdersPage from "./dashboard/pages/OrdersPage";
import AnalyticsPage from "./dashboard/pages/AnalyticsPage";
import SettingsPage from "./dashboard/pages/SettingsPage";

// Componente separado para usar useLocation corretamente
function AppContent() {
  const location = useLocation();

  // Aplica GlobalStyle apenas fora do dashboard
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  // useEffect é um hook que roda após o componente ser montado
  useEffect(() => {
    // Inicializa a biblioteca AOS (Animate On Scroll)
    AOS.init({
      duration: 1000, // Define a duração das animações em milissegundos (1 segundo)
      once: false,    // Permite que a animação ocorra todas as vezes que o elemento entrar na tela
      //mirror: true,   // Faz a animação acontecer também ao rolar para cima
    });
  }, []); // O array vazio faz com que o useEffect rode apenas uma vez, quando o componente for carregado
  

  return (
    <>
      {!isDashboardRoute && <GlobalStyle />}
      <Routes>
        {/*Rotas do site principal*/}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post/" element={<Post />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/teste" element={<Teste />} />

        {/*Rotas do dashboard com layout específico*/}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <OverviewPage />
            </DashboardLayout>
          }
        />
				<Route
          path="/dashboard/produtos"
          element={
            <DashboardLayout>
              <ProductsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/clientes"
          element={
            <DashboardLayout>
              <UsersPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/vendas"
          element={
            <DashboardLayout>
              <SalesPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/pedidos"
          element={
            <DashboardLayout>
              <OrdersPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/analises"
          element={
            <DashboardLayout>
              <AnalyticsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/definicoes"
          element={
            <DashboardLayout>
              <SettingsPage />
            </DashboardLayout>
          }
        />

        {/*Rotas não encontradas*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
