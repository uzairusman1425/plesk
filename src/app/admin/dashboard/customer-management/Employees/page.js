"use client";

import EmployeeDetails from "@/components/admin/EmployeeDetails";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  return (
    <div className="w-full min-h-screen">
      <EmployeeDetails id={id} />
    </div>
  );
}
