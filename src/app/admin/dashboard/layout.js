import SideBar from "@/components/admin/SideBar";

export default function AdminLayout({ children }) {
  return (
    <section className="w-full min-h-screen flex">
      <SideBar />

      <div className="w-[80%]">{children}</div>
    </section>
  );
}
