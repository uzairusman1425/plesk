import SideNav from "@/components/side-nav/SideNav"
import Header from "@/components/header/Header"

export default function DashboardLayout({ children }) {
	return (
		<div className="h-screen w-full flex flex-col">
			<div className="w-full flex-1 flex flex-row">
				<SideNav />
				<div className="flex-1 flex flex-col">
					<Header />
					<main className="h-[86.5vh] overflow-y-auto scrollbar-none">
						{children}
					</main>
				</div>
			</div>
			<div className="h-[3.5vh] w-full bg-primary" />
		</div>
	)
}
