import React, { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router";

export const InputSearch = () => {
  const ref = useRef();
  const navigation = useNavigate();

  const handleSearch = (event) => {
    const keyword = ref.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      navigation(`/search/${keyword}`);
      ref.current.value = "";
    }
  };

  return (
    <>
      <div className="relative max-w-md">
        <input
          placeholder="Cari game atau voucher..."
          className="input w-full focus:outline-none focus:border-gray-300 pr-14 du"
          ref={ref}
          onKeyDown={handleSearch}
        />
        <button
          onClick={handleSearch}
          // className="absolute btn inset-y-0 right-0 z-30"
          className="absolute btn-ghost inset-y-0 right-0 z-30 pl-3 pr-3"
        >
          <FaMagnifyingGlass size={20} fill="bg-base-200"/>
        </button>
      </div>
    </>
  );
};
