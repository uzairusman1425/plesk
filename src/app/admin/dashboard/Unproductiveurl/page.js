import UnproductiveTable from "@/components/admin/UnproductiveTable";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function page() {
  return (
    <main className="flex-1 flex-col gap-2 ml-3">
      <h1 className="text-[20px] font-semibold  flex items-center gap-2  mt-2 ">
        HOME <span>-</span>{" "}
        <span className="text-primary">ADMIN DASHBOARD</span>
      </h1>
      <div className="children border-[#E4E7EC] w-full h-max mt-2 mb-10 border-[3px] rounded-lg flex flex-col items-center">
        <UnproductiveTable />
      </div>
    </main>
  );
}
