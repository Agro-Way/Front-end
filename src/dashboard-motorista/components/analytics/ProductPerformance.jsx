import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const productPerformanceData = [
	{ name: "Manga", Vendas: 4000, Faturamento: 2400, Lucro: 2400 },
	{ name: "Banana", Vendas: 3000, Faturamento: 1398, Lucro: 2210 },
	{ name: "Tomate", Vendas: 2000, Faturamento: 9800, Lucro: 2290 },
	{ name: "Cenoura", Vendas: 2780, Faturamento: 3908, Lucro: 2000 },
	{ name: "Batata", Vendas: 1890, Faturamento: 4800, Lucro: 2181 },
];

const ProductPerformance = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Desempenho do Produto</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={productPerformanceData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey='Vendas' fill='#8B5CF6' />
						<Bar dataKey='Faturamento' fill='#10B981' />
						<Bar dataKey='Lucro' fill='#F59E0B' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default ProductPerformance;
