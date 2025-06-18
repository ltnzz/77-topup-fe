// 
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

export const InputSearch = () => {
  const query = useQuery();
  const keyword = query.get("keyword");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!keyword) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`https://77-top-up-be.vercel.app/search?keyword=${keyword}`);
        const data = await res.json();
        setResults(data); // asumsi data sudah berupa array
      } catch (err) {
        console.error("Gagal fetch:", err);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div>
      <h2>Hasil pencarian: {keyword}</h2>
      <ul>
        {results.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};