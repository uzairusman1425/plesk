import CompanyDetails from "@/components/admin/CompanyDetails";
import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/solid";

export default function CustomerManagement() {
  return (
    <main className="p-20 w-full min-h-screen">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="h-10 w-60 border rounded-lg flex flex-row items-center gap-2 px-2">
          <MagnifyingGlassIcon className="h-6 w-6 text-black" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none"
          />
        </div>
        <button className="h-12 bg-primary rounded-lg flex flex-row items-center gap-2 px-3">
          <PlusCircleIcon className="size-7 text-white" />
          <p className="text-white text-sm font-light">Add New Company</p>
        </button>
      </div>
      <CompanyDetails />
    </main>
  );
}
