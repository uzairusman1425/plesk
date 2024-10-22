import Image from "next/image";

export default function SideBar() {
  return (
    <div className="h-full w-[12%] flex flex-col gap-10 pl-5 pt-10">
      <Image
        src={"/images/logo.png"}
        alt="plesk.png"
        height={150}
        width={150}
      />
      <div className="flex flex-col gap-3">
        <button
          className="h-12  rounded flex flex-row gap-3 items-center justify-center transform-gpu ease-in-out duration-500 bg-primary bg-opacity-35
          "
        >
          <Image
            src={"/icons/customer-management-blue.png"}
            alt="icon"
            height={15}
            width={15}
          />
          <p className="text-md transform-gpu ease-in-out duration-500 text-primary ">
            Customer Management
          </p>
        </button>
      </div>
    </div>
  );
}
