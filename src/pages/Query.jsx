import React from "react";
import { useSearchParams } from "react-router";

export const Query = () => {
  const [query, setQuery] = useSearchParams();

  const handleSort = (data) => {
    query.set("sortBy", data);
    setQuery(query);
  };

  return (
    <div className="p-5 flex flex-col gap-10">
      <p>Query : {query.get("sortBy")}</p>
      <div className="flex flex-col gap-2 w-1/12">
        <button
          className="btn btn-primary"
          onClick={() => handleSort("terbaru")}
        >
          Terbaru
        </button>
        <button
          className="btn btn-primary btn-outline"
          onClick={() => handleSort("popular")}
        >
          Popular
        </button>
      </div>
    </div>
  );
};
