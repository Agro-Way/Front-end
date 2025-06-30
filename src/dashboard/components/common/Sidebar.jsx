import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users, LogOut,} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "@/utils/auth";
import { toast, ToastContainer } from "react-toastify";

const SIDEBAR_ITEMS = [
  {
    name: "Visão Global",
    icon: BarChart2,
    color: "#6366f1",
    href: "/dashboard/",
  },
  { name: "Produtos", icon: ShoppingBag, color: "#8B5CF6", href: "/dashboard/produtos" },
  { name: "Clientes & Motoristas", icon: Users, color: "#EC4899", href: "/dashboard/clientes-motoristas" },
  { name: "Vendas", icon: DollarSign, color: "#10B981", href: "/dashboard/vendas" },
  { name: "Pedidos", icon: ShoppingCart, color: "#F59E0B", href: "/dashboard/pedidos" },
  { name: "Análises", icon: TrendingUp, color: "#3B82F6", href: "/dashboard/analises" },
  { name: "Definições", icon: Settings, color: "#6EE7B7", href: "/dashboard/definicoes" },
  { name: "Sair", icon: LogOut, color: "#EF4444", href: "/dashboard/sair"},// Apenas simbólico, não será usado diretamente
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  return (
	<>
		<motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}
		animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			{/*botão que abre e fecha o modal*/}
			<div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
				<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				className="p-2 cursor-pointer rounded-full hover:bg-gray-700 transition-colors max-w-fit"
				>
				<Menu size={24} />
				</motion.button>

				<nav className="mt-8 flex-grow">
				{SIDEBAR_ITEMS.map((item) => {
					const isLogout = item.name === "Sair";

					const content = (
					<motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
						<item.icon
						size={20}
						style={{ color: item.color, minWidth: "20px" }}
						/>
						<AnimatePresence>
						{isSidebarOpen && (
							<motion.span
							className="ml-4 whitespace-nowrap"
							initial={{ opacity: 0, width: 0 }}
							animate={{ opacity: 1, width: "auto" }}
							exit={{ opacity: 0, width: 0 }}
							transition={{ duration: 0.2, delay: 0.3 }}
							>
							{item.name}
							</motion.span>
						)}
						</AnimatePresence>
					</motion.div>
					);

					if (isLogout) {
					return (
						<button type="button"
						key={item.href}
						onClick={() => {
							logout();
							toast.success("Sessão encerrada com sucesso.");
							setTimeout(() => {
								navigate("/login");
							}, 2000);
						}}
						className="w-full cursor-pointer text-left"
						title={item.name}
						>
						{content}
						</button>
					);
					}

					return (
					<Link key={item.href} to={item.href} title={item.name}>
						{content}
					</Link>
					);
				})}
				</nav>
			</div>
		</motion.div>

		<ToastContainer toastClassName="toast-tam" position="top-right" autoClose={3000}/>
	</>
  );
};
export default Sidebar;
