import Header from "../components/common/Header";
import useDocumentTitle from "../hooks/useDocumentTitle";
import OverviewCards from "../components/analytics/OverviewCards";
import RevenueChart from "../components/analytics/RevenueChart";
import ChannelPerformance from "../components/analytics/ChannelPerformance";
import ProductPerformance from "../components/analytics/ProductPerformance";
import UserRetention from "../components/analytics/UserRetention";
import CustomerSegmentation from "../components/analytics/CustomerSegmentation";

const AnalyticsDriverPage = () => {
    useDocumentTitle("Análises | Dashboard Motorista");

	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Análises"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCards />
				<RevenueChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
				</div>
			</main>
		</div>
	);
};
export default AnalyticsDriverPage;
