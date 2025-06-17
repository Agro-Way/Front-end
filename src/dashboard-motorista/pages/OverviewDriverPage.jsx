import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewDriverPage = () => {
	useDocumentTitle("Dashboard Motorista");

	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Visão Global' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total de Vendas' icon={Zap} value='12.345 Kz' color='#6366F1' />
					{/*<StatCard name='Novos Usuários' icon={Users} value='1.234' color='#8B5CF6' />*/}
					<StatCard name='Total de Produtos' icon={ShoppingBag} value='567' color='#EC4899' />
					<StatCard name='Taxa de Conversão' icon={BarChart2} value='12.5%' color='#10B981' />
				</motion.div>

				{/* Gráficos */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
					<SalesChannelChart />
				</div>
			</main>
		</div>
	);
};
export default OverviewDriverPage;
