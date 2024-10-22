"use client";

import React, { Suspense } from "react";
import EmployeeDetails from "@/components/admin/EmployeeDetails";
import { useSearchParams } from "next/navigation";

const Loading = () => (
  <div className="w-full min-h-screen flex items-center justify-center">
    <p>Loading...</p>
  </div>
);

const EmployeeContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // Early return if id is not present
  if (!id) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p>No employee ID provided. Please select a valid employee.</p>
      </div>
    );
  }

  return <EmployeeDetails id={id} />;
};

export default function Employee() {
  return (
    <div className="w-full min-h-screen">
      <Suspense fallback={<Loading />}>
        <EmployeeContent />
      </Suspense>
    </div>
  );
}
