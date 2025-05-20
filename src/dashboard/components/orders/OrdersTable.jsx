import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";
import FullScreenModal from "../../components/common/FullScreenModal";
import MapComponents from "../../components/map/MapComponents";

const orderData = [
	{ id: "PEDIDO001", customer: "John Doe", total: 235.4, status: "Entregado", date: "01-07-2025" },
	{ id: "PEDIDO002", customer: "Jane Smith", total: 412.0, status: "Processando", date: "02-07-2025" },
	{ id: "PEDIDO003", customer: "Bob Johnson", total: 162.5, status: "Enviado", date: "03-07-2025" },
	{ id: "PEDIDO004", customer: "Alice Brown", total: 750.2, status: "Pendente", date: "04-07-2025" },
	{ id: "PEDIDO005", customer: "Charlie Wilson", total: 95.8, status: "Entregado", date: "05-07-2025" },
	{ id: "PEDIDO006", customer: "Eva Martinez", total: 310.75, status: "Processando", date: "06-07-2025" },
	{ id: "PEDIDO007", customer: "David Lee", total: 528.9, status: "Enviado", date: "07-07-2025" },
	{ id: "PEDIDO008", customer: "Grace Taylor", total: 189.6, status: "Entregado", date: "08-07-2025" },
];

const OrdersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState(orderData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	const [showModal, setShowModal] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// lógica de envio
		setShowModal(false);
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex justify-between flex-wrap items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Lista de Pedidos</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Buscar pedidos...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								ID Pedido
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Cliente
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Total
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Status
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Data
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Ações
							</th>
						</tr>
					</thead>

					<tbody className='divide divide-gray-700'>
						{filteredOrders.map((order) => (
							<motion.tr
								key={order.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.id}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.customer}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.total.toFixed(2)} Kz
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											order.status === "Entregado"
												? "bg-green-100 text-green-800"
												: order.status === "Processando"
												? "bg-yellow-100 text-yellow-800"
												: order.status === "Enviado"
												? "bg-blue-100 text-blue-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{order.status}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{order.date}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 cursor-pointer hover:text-indigo-300 mr-2'>
										<Eye onClick={() => setShowModal(true)} size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>

			{showModal && (
				<FullScreenModal title="Mapa de Acompanhamento" onClose={() => setShowModal(false)}>
					{/* Mapa aqui */}
					<MapComponents />
				</FullScreenModal>
			)}
		</motion.div>
	);
};
export default OrdersTable;
