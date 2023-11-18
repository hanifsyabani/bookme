import React from "react";
import ModalRec from "../components/ModalRec";


const CardAll = ({ books }) => {
  return (
    <>
      <div className="grid lg:grid-cols-5 gap-2 grid-cols-2" id="wishlist">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-secondary lg:w-[12rem] mx-auto w-[10rem]   rounded-md shadow-md shadow-purple-300 cursor-pointer hover:shadow-purple-500 mt-6 relative group overflow-hidden"
          >
            <img
              src={
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail
              }
              alt=""
              className="w-full h-1/2 mx-auto "
            />
            <div className="p-5 ">
              <h4 className="text-white font-semibold mt-4 text-sm lg:text-base">
                {book.volumeInfo.title
                  ? book.volumeInfo.title.length > 20
                    ? book.volumeInfo.title.slice(0, 20) + "..."
                    : book.volumeInfo.title
                  : "No title available"}
              </h4>
              <p className="text-gray-400 lg:text-sm text-xs">
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.length > 20
                    ? book.volumeInfo.authors.slice(0, 20) + "..."
                    : book.volumeInfo.authors
                  : "No author available"}
              </p>
            </div>
            <div className="absolute bottom-3 lg:left-14 left-10">
              <ModalRec book={book}/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardAll;
