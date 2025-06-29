// src/Routes.jsx
import { Routes, Route, useLocation } from "react-router-dom";

// Estilo global (apenas para o site)
import GlobalStyle from "./globalStyles/GlobalStyle";

// Layout do dashboard
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardDriverLayout from "./layouts/DashboardDriverLayout";

// Modal
import ModalWrapper from "./components/ModalWrapper";

import PrivateRoute from "./components/PrivateRoute";

// Páginas do site
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import Produtos from "./pages/Produtos";
import Produtos2 from "./pages/Produtos2";
import ConsultarPedido from "./pages/ConsultarPedido";
import Post from "./pages/Post";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";
import PedidoConfirmado from "./pages/PedidoConfirmado";
import DetalhesProdutos from "./pages/DetalhesProdutos";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MotoristaInfo from "./pages/MotoristaInfo";
import RecuperarSenha from "./pages/RecuperarSenha";
import ConfirmarCodigo from "./pages/ConfirmarCodigo";
import RedefinirSenha from "./pages/RedefinirSenha";
import TermosCondicoes from "./pages/TermosCondicoes";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import NotFound from "./pages/NotFound";

// Dashboard produtor
import OverviewPage from "./dashboard/pages/OverviewPage";
import ProductsPage from "./dashboard/pages/ProductsPage";
import UsersPage from "./dashboard/pages/UsersPage";
import SalesPage from "./dashboard/pages/SalesPage";
import OrdersPage from "./dashboard/pages/OrdersPage";
import AnalyticsPage from "./dashboard/pages/AnalyticsPage";
import SettingsPage from "./dashboard/pages/SettingsPage";
import DashboardNotFound from "./dashboard/pages/DashboardNotFound";

// Dashboard motorista
import OverviewDriverPage from "./dashboard-motorista/pages/OverviewDriverPage";
import OrdersDriverPage from "./dashboard-motorista/pages/OrdersDriverPage";
import AnalyticsDriverPage from "./dashboard-motorista/pages/AnalyticsDriverPage";
import SettingsDriverPage from "./dashboard-motorista/pages/SettingsDriverPage";
import DashboardDriverNotFound from "./dashboard-motorista/pages/DashboardDriverNotFound";

function AppRoutes() {
  const location = useLocation();
  const isDashboardProducer = location.pathname.startsWith("/dashboard");
  const isDashboardDriver = location.pathname.startsWith(
    "/dashboard-motorista"
  );

  return (
    <>
      {!isDashboardProducer && !isDashboardDriver && <GlobalStyle />}

      <Routes>
        {/* Rotas do site */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post/" element={<Post />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos2" element={<Produtos2 />} />
        <Route path="/produtos/detalhes/" element={<DetalhesProdutos />} />
        <Route path="/consultar-pedido" element={<ConsultarPedido />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pedido-confirmado" element={<PedidoConfirmado />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Signup />} />
        <Route path="/motorista-info" element={<MotoristaInfo />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route
          path="/recuperar-senha/codigo-confirmacao/"
          element={<ConfirmarCodigo />}
        />
        <Route
          path="/recuperar-senha/redefinir-senha/"
          element={<RedefinirSenha />}
        />
        <Route path="/termos-condicoes" element={<TermosCondicoes />} />
        <Route
          path="/politicas-privacidade"
          element={<PoliticaPrivacidade />}
        />

        {/* Dashboard produtor */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <OverviewPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/produtos"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ProductsPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/clientes-motoristas"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <UsersPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/vendas"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <SalesPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/pedidos"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <OrdersPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/analises"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <AnalyticsPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/definicoes"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <SettingsPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />

        {/* Dashboard motorista */}
        <Route
          path="/dashboard-motorista/"
          element={
            <PrivateRoute>
              <DashboardDriverLayout>
                <OverviewDriverPage />
              </DashboardDriverLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard-motorista/pedidos"
          element={
            <PrivateRoute>
              <DashboardDriverLayout>
                <OrdersDriverPage />
              </DashboardDriverLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard-motorista/analises"
          element={
            <PrivateRoute>
              <DashboardDriverLayout>
                <AnalyticsDriverPage />
              </DashboardDriverLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard-motorista/definicoes"
          element={
            <PrivateRoute>
              <DashboardDriverLayout>
                <SettingsDriverPage />
              </DashboardDriverLayout>
            </PrivateRoute>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            isDashboardDriver ? (
              <PrivateRoute>
              <DashboardDriverLayout>
                <DashboardDriverNotFound />
              </DashboardDriverLayout>
              </PrivateRoute>
            ) : isDashboardProducer ? (
              <PrivateRoute>
              <DashboardLayout>
                <DashboardNotFound />
              </DashboardLayout>
              </PrivateRoute>
            ) : (
              <NotFound />
            )
          }
        />
      </Routes>

      <ModalWrapper />
    </>
  );
}

export default AppRoutes;
