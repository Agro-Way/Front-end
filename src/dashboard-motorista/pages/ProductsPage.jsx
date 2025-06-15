import { useState } from "react";
import { motion } from "framer-motion";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import AddButton from "../components/common/AddButton";
import FullScreenModal from "../components/common/FullScreenModal";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import ProductsTable from "../components/products/ProductsTable";
import AddProductForm from "../components/forms/AddProductForm";

import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";

const ProductsPage = () => {
	useDocumentTitle("Produtos | Dashboard");

	const [showModal, setShowModal] = useState(false);

	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Produtos' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total de Produtos' icon={Package} value={1234} color='#6366F1' />
					<StatCard name='Top Vendas' icon={TrendingUp} value={89} color='#10B981' />
					<StatCard name='Estoque Baixo' icon={AlertTriangle} value={23} color='#F59E0B' />
					<StatCard name='Receita Total' icon={DollarSign} value={"543.210 Kz"} color='#EF4444' />
				</motion.div>

				<ProductsTable />
				<AddButton onClick={() => setShowModal(true)} label="Adicionar Produto" />

				{/* Modal que abre o formulário de cadastro de produtos */}
				{showModal && (
				<FullScreenModal title="Adicionar Produto" onClose={() => setShowModal(false)}>
					{/* Formulário aqui */}
					<AddProductForm />
				</FullScreenModal>
				)}

				{/* Gráficos */}
				<div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
					<SalesTrendChart />
					<CategoryDistributionChart />
				</div>
			</main>
		</div>
	);
};
export default ProductsPage;
