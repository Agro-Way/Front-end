import { BarChart2, Package, PackagePlus, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import DeliveriesOverviewChart from "../components/overview/DeliveriesOverviewChart";
import DeliveriesChannelChart from "../components/overview/DeliveriesChannelChart";

const OverviewDriverPage = () => {
	useDocumentTitle("Dashboard Motorista");

	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Visão Global' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total de Entregas' icon={Package} value='12.345' color='#6366F1' />
					<StatCard name='Novas Entregas' icon={PackagePlus} value='1.234' color='#8B5CF6' />
				</motion.div>

				{/* Gráficos */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<DeliveriesOverviewChart />
					<CategoryDistributionChart />
					<DeliveriesChannelChart />
				</div>
			</main>
		</div>
	);
};
export default OverviewDriverPage;
