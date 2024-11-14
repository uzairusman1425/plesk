"use client";
import CompanyDetails from "@/components/admin/CompanyDetails";
import UserAndEmployeeChart from "../../../../components/admin/UserAndEmployeeChart";
import UserBarChart from "@/components/admin/UserChart";

export default function CustomerManagement() {
  return (
    <main className="w-full h-full flex flex-col ml-4 gap-2">
      <h1 className="text-xl flex items-center gap-2 font-bold mt-2 ">
        HOME <span>-</span>{" "}
        <span className="text-primary">ADMIN DASHBOARD</span>
      </h1>
      <div className="children border-[#E4E7EC] w-full h-max mb-10 border-[3px] rounded-lg flex flex-col">
        <div className="graphs p-10 w-full  flex flex-col lg:flex-row h-[500px] ">
          <div className="w-full lg:w-[50%] h-full flex flex-col items-start   gap-4  ">
            <h1 className="font-bold">Company</h1>
            <UserAndEmployeeChart />
          </div>
          <div className="w-full lg:w-[50%] h-full flex flex-col gap-4 text-xl ">
            <h1>Company And Employees</h1>
            <UserBarChart />
          </div>
        </div>
        <CompanyDetails />
      </div>
    </main>
  );
}
