import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import CardAll from "../components/CardAll";

const categories = [
  "All",
  "History",
  "Fiction",
  "Foreign Language Study",
  "Animal",
  "Fantasy",
  "Science",
  "Biography",
  "Anime",
  "Travel",
  "Humor",
  "Business",
  "Health",
];

const ListBooks = ({ isLoading, setIsLoading, api_url, apiKey }) => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategories(categories) {
    setSelectedCategory(categories);
  }

  useEffect(() => {
    const fetchBooks = async (selectedCategory) => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `${api_url}?q=${selectedCategory}&orderBy=newest&key=${apiKey}&maxResults=12`
        );
        setBooks(res.data.items);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    // Panggil fungsi 'fetchBooks' saat komponen dimount dan
    // setiap kali state 'selectedCategory' berubah.
    fetchBooks(selectedCategory);
    
    // Array dependensi ([selectedCategory]) menentukan bahwa efek ini
    // bergantung pada state 'selectedCategory'. Jika 'selectedCategory' berubah,
    // efek akan dijalankan ulang.
  }, [selectedCategory]);

  return (
    <div className="mt-10  px-[7%] py-[2rem]" id="wishlist">
      <h1 className="font-bold text-white">Wishlist</h1>
      <div className="mt-4">
        <ul className="flex flex-wrap items-center gap-6 text-gray-400 lg:text-sm text-xs">
          {categories.map((categories, index) => {
            return (
              <li
                key={index}
                onClick={() => handleCategories(categories)}
                className={`cursor-pointer ${
                  selectedCategory === categories && "text-white"
                }`}
              >
                {" "}
                {categories}{" "}
              </li>
            );
          })}
        </ul>
      </div>
      {isLoading && (
        <div className="text-center">
          <Spinner className="mx-auto" size="md" color="purple.500" />
          <p className="text-gray-400 text-sm">Loading Data...</p>
        </div>
      )}
      <CardAll books={books} />
    </div>
  );
};

export default ListBooks;
