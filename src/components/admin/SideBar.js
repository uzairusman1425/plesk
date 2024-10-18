import Image from "next/image";

export default function sidebar() {
  return (
    <div className="h-full w-56 flex flex-col gap-10 pl-5 pt-10">
      <Image
        src={"/images/logo.png"}
        alt="plesk.png"
        height={150}
        width={150}
        s
      />
      <div className="flex flex-col gap-10 px-2">
        <button
          className="h-14 rounded flex flex-row gap-3 items-center justify-center
    bg-primary bg-opacity-35"
        >
          <p className="text-sm font-bold text-primary">Customer Management</p>
        </button>
      </div>
    </div>
  );
}
