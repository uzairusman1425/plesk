"use client";
import { useState } from "react";

export default function SuperAdmin() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <section className=" w-full min-h-screen ">
      {modalVisible && (
        <div className="w-full min-h-screen bg-black/20  inset-0 fixed flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-white rounded-xl flex items-center flex-col justify-center gap-10">
            <h1 className="text-2xl font-bold">Add A New Admin</h1>
            <input
              type="text"
              placeholder="Username"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
            />
            <div className="flex flex-row gap-4">
              <button className="px-6 py-2 bg-primary text-white font-bold rounded-md">
                Save
              </button>
              <button
                onClick={() => {
                  setModalVisible(false);
                }}
                className="px-6 py-2  border-2 text-primary rounded-md border-primary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
