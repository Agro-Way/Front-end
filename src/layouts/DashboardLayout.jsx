import React from 'react';
import Sidebar from '../dashboard/components/common/Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      {/* BG decorativo */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 p-6 relative z-10 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
