"use client";
import CompanyDetails from "@/components/admin/CompanyDetails";
import UserAndEmployeeChart from "../../../../components/admin/UserAndEmployeeChart";
import UserBarChart from "@/components/admin/UserChart";

export default function CustomerManagement() {
  return (
    <main className="p-20 w-full min-h-screen">
      <div className="w-full h-[500px] flex flex-col lg:flex-row ">
        <div className="w-full lg:w-[50%] h-full flex flex-col items-start  gap-4  font-bold">
          <h1>Company</h1>
          <UserAndEmployeeChart />
        </div>
        <div className="w-full lg:w-[50%] h-full flex flex-col gap-4 text-xl font-bold">
          <h1>Company And Employees</h1>
          <UserBarChart />
        </div>
      </div>

      <CompanyDetails />
    </main>
  );
}
