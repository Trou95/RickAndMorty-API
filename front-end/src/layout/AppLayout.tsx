import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";

export default function AppLayout({children}: any) {
	return (
		<>
			<Toaster />
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	)
}
