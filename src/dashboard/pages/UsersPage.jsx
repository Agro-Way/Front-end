import { useState } from 'react'
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react'
import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import AddButton from '../components/common/AddButton'
import FullScreenModal from '../components/common/FullScreenModal'
import UsersTable from '../components/users/UsersTable'
import UserGrowthChart from '../components/users/UserGrowthChart'
import UserActivityHeatmap from '../components/users/UserActivityHeatmap'
import UserDemographicsChart from '../components/users/UserDemographicsChart'
import AddUserForm  from "../components/forms/AddUserForm";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: '2.4%',
}

const UsersPage = () => {
  useDocumentTitle('Clientes | Dashboard')

  const [showModal, setShowModal] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    // lógica de envio
    setShowModal(false)
  }

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Clientes" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total de Clientes"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="Novos Clientes Hoje"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatCard
            name="Clientes Ativos"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Taxa de Evasão"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>

        <UsersTable />
        <AddButton
          onClick={() => setShowModal(true)}
          label="Adicionar Cliente"
        />

        {/* Modal que abre o formulário de cadastro de clientes */}
        {showModal && (
          <FullScreenModal title="Adicionar Cliente" onClose={() => setShowModal(false)}>
            {/* Formulário aqui */}
            <AddUserForm />
          </FullScreenModal>
        )}

        {/* USER CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  )
}
export default UsersPage
