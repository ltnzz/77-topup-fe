// import React, { useRef } from "react";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { useNavigate } from "react-router";

// export const InputSearch = () => {
//   const ref = useRef();
//   const navigation = useNavigate();

//   const handleSearch = (event) => {
//     const keyword = ref.current.value;

//     if (!keyword || keyword.trim() == "") return;

//     if (event.key === "Enter" || event.type === "click") {
//       event.preventDefault();
//       navigation(`/search`);
//       ref.current.value = "";
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

import React, { useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const InputSearch = () => {
  const ref = useRef();
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    const keyword = ref.current.value.trim();
    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      try {
        const res = await fetch(`https://77-top-up-be.vercel.app/search?keyword=${encodeURIComponent(keyword)}`);
        const data = await res.json();
        setResults(data.data); // sesuaikan jika respons-nya nested misalnya `data.results`
      } catch (err) {
        console.error("Gagal fetch:", err);
        setResults([]); // kosongkan hasil kalau error
      }
    }
  };

  return (
    <>
      <div className="relative max-w-md mb-4">
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

      {/* Hasil pencarian */}
      <div className="mt-2">
        {results.length > 0 ? (
          <ul className="space-y-2">
            {results.map((game) => (
              <li key={game.id} className="p-2 bg-gray-100 rounded-lg shadow-sm">
                {game.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">Tidak ada hasil.</p>
        )}
      </div>
    </>
  );
};
