import SideNav from "@/components/side-nav/SideNav"
import Header from "@/components/header/Header"

export default function DashboardLayout({children}) {
    return (
        <div className="h-screen w-screen flex flex-col">
            <div className="flex-1 flex flex-row">
                <SideNav />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </div>
            <div className="h-10 w-full bg-primary" />
        </div>
    )
}