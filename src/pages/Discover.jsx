import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import CardSearch from "../components/CardSearch";
import { Button } from "@chakra-ui/react";

function Discover({ api_url, apiKey }) {
  const [search, setSearch] = useState("");
  const [dataBooks, setDataBooks] = useState([]);
  const [loadMore, setLoadMore] = useState(10);

  const handleSearch = (evt) => {
    if (evt.key === "Enter") {
      if (!search) {
        setDataBooks([]);
      } else {
        axios
          .get(`${api_url}?q=${search}&key=${apiKey}&maxResults=${loadMore}`)
          .then((res) => setDataBooks(res.data.items))
          .catch((err) => console.log(err));
      }
    }
  };

  function handleLoadMore() {
    axios
      .get(`${api_url}?q=${search}&key=${apiKey}&maxResults=${loadMore + 10}`)
      .then((res) => setDataBooks([...dataBooks, ...res.data.items]))
      .catch((err) => console.log(err));
    setLoadMore(loadMore + 10);
  }

  return (
    <>
      <div
        className="flex items-center justify-center gap-3 mt-6  px-[7%] py-[2rem]"
        id="search"
      >
        <input
          type="text"
          placeholder="Search your favorite books..."
          className="outline-none p-2 rounded-md lg:w-[50%] bg-[#2d3669] text-white w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleSearch}
        />
        <button>
          <AiOutlineSearch size={25} color="white" />
        </button>
      </div>

      {search.length > 0 ? (
        <div>
          <h1 className="text-gray-400 text-center text-sm mt-4">
            Result for {search}
          </h1>

          <CardSearch books={dataBooks} />
          <div className="text-center">
            <Button marginTop={"4rem"} onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-gray-400 text-center text-sm mt-4">
          Start searching for your favorite books!
        </p>
      )}
    </>
  );
}

export default Discover;
