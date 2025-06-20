// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import AppRoutes from './Routes';

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
