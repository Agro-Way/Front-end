// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";
import { ToastProvider } from "./components/ToastProvider";
import AppRoutes from "./Routes";

function App() {
  return (
    <CarrinhoProvider>
      <ModalProvider>
        <Router>
          <AppRoutes />
          <ToastProvider />
        </Router>
      </ModalProvider>
    </CarrinhoProvider>
  );
}

export default App;
