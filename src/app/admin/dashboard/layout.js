import SideBar from "@/components/admin/SideBar";

export default function AdminLayout({ children }) {
  return (
    <section className="w-[100%] min-h-screen flex">
      <SideBar />

      <div className="w-[83%]">{children}</div>
    </section>
  );
}
