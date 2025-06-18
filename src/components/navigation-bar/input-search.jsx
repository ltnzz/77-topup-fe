import React, { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router";

export const InputSearch = () => {
  const ref = useRef();
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    const keyword = ref.current.value;

    if (!keyword || keyword.trim() === "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      try {
        const res = await fetch(`https://77-top-up-be.vercel.app/77topup/search?keyword=${encodeURIComponent(keyword)}`);
        
        const data = await res.json();

        navigate("/search", { state: { keyword, results: data } });
        ref.current.value = "";
      } catch (error) {
        console.error("Gagal fetch data game:", error);
      }
    }
  };

  return (
    <>
      <div className="relative max-w-md">
        <input
          placeholder="Cari game favoritmu..."
          className="input w-full rounded-lg pr-14 focus:outline-none focus:border-gray-300 transition-colors du"
          ref={ref}
          onKeyDown={handleSearch}
        />
        <button
          onClick={handleSearch}
          // className="absolute btn inset-y-0 right-0 z-30"
          className="absolute inset-y-0 right-0 z-30 pl-3 pr-4 active:drop-shadow-sm rounded-full"
        >
          <FaMagnifyingGlass size={20} className="text-gray-500 " />
        </button>
      </div>
    </>
  );
};
