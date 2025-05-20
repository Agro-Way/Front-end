import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/common/Header";
import DangerZone from "../components/settings/DangerZone";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";

const SettingsPage = () => {
    useDocumentTitle("Definições | Dashboard");

	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Definições' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<Security />
				<DangerZone />
			</main>
		</div>
	);
};
export default SettingsPage;
