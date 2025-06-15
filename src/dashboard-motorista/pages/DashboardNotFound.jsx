import React from 'react';
import { Link } from "react-router-dom";

function DashboardNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-800 text-red-400 rounded-lg p-8 shadow-lg text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl">Ops! A página do dashboard que você procura não foi encontrada.</p>
      <Link
        to="/dashboard"
        className="mt-8 px-6 py-3 bg-red-400 text-white rounded hover:bg-red-500 font-semibold transition-colors"
      >
        Voltar ao Dashboard
      </Link>
    </div>
  );
}

export default DashboardNotFound;