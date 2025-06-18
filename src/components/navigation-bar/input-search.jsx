// import React, { useRef } from "react";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { useNavigate } from "react-router";

// export const InputSearch = () => {
//   const ref = useRef();
//   const navigate = useNavigate();

//   const handleSearch = async (event) => {
//     const keyword = ref.current.value;

//     if (!keyword || keyword.trim() === "") return;

//     if (event.key === "Enter" || event.type === "click") {
//       event.preventDefault();

//       try {
//         const res = await fetch(`https://77-top-up-be.vercel.app/search?keyword=${encodeURIComponent(keyword)}`);
        
//         const data = await res.json();

//         navigate("/search", { state: { keyword, results: data } });
//         ref.current.value = "";
//       } catch (error) {
//         console.error("Gagal fetch data game:", error);
//       }
//     }
//   };

//   return (
//     <>
//       <div className="relative max-w-md">
//         <input
//           placeholder="Cari game favoritmu..."
//           className="input w-full rounded-lg pr-14 focus:outline-none focus:border-gray-300 transition-colors du"
//           ref={ref}
//           onKeyDown={handleSearch}
//         />
//         <button
//           onClick={handleSearch}
//           // className="absolute btn inset-y-0 right-0 z-30"
//           className="absolute inset-y-0 right-0 z-30 pl-3 pr-4 active:drop-shadow-sm rounded-full"
//         >
//           <FaMagnifyingGlass size={20} className="text-gray-500 " />
//         </button>
//       </div>
//     </>
//   );
// };


import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

// Komponen InputSearch
const InputSearch = () => {
  const ref = useRef();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const keyword = ref.current.value;

    if (!keyword || keyword.trim() === "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
      ref.current.value = "";
    }
  };

  return (
    <div className="relative max-w-md mx-auto my-4">
      <input
        placeholder="Cari game favoritmu..."
        className="input w-full rounded-lg pr-14 focus:outline-none focus:border-gray-300 transition-colors"
        ref={ref}
        onKeyDown={handleSearch}
      />
      <button
        onClick={handleSearch}
        className="absolute inset-y-0 right-0 z-30 pl-3 pr-4 active:drop-shadow-sm rounded-full"
      >
        <FaMagnifyingGlass size={20} className="text-gray-500 " />
      </button>
    </div>
  );
};

// Komponen utama SearchPage
export const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const keyword = query.get("keyword");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!keyword) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`https://77-top-up-be.vercel.app/search?keyword=${keyword}`);
        const data = await res.json();
        setResults(data.data || data); // sesuaikan dengan struktur data backend
      } catch (err) {
        console.error("Gagal fetch:", err);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div className="p-4">
      <InputSearch />

      <h2 className="text-xl font-semibold mb-3">
        Hasil pencarian: <span className="text-blue-500">{keyword}</span>
      </h2>

      <ul className="space-y-2">
        {results.length > 0 ? (
          results.map((game) => <li key={game.id}>{game.name}</li>)
        ) : (
          <li className="text-gray-500 italic">Tidak ada hasil ditemukan</li>
        )}
      </ul>
    </div>
  );
};
