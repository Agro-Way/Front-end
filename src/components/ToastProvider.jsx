// src/components/ToastProvider.jsx
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastProvider() {
  return (
    <ToastContainer
      toastClassName="toast-tam"
      position="top-right"
      autoClose={3000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnHover
      draggable
      theme="light"
    />
  );
}
