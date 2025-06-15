import { Plus } from "lucide-react";

export default function AddProductButton({ onClick, label = "Adicionar" }) {
	return (
		<button
			className="fixed cursor-pointer bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-white shadow-lg hover:bg-indigo-700 transition-all"
			onClick={onClick}
		>
			<Plus className="w-5 h-5" />
			<span className="hidden sm:inline">{label}</span>
		</button>
	);
}