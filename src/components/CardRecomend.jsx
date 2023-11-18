import React from "react";
import { AiFillStar } from "react-icons/ai";
import ModalRec from "./ModalRec";

const BookCard = ({ book }) => {
  return (
    <>
      <div
        className="bg-secondary lg:w-[30rem]  p-5 flex justify-center items-center rounded-md gap-10 shadow-md shadow-purple-300 cursor-pointer hover:shadow-purple-500 mt-6"
        key={book.id}
      >
        {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
          <img
            src={
              book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            }
            alt=""
            className="object-contain lg:w-[30%] lg:h-[30%] w-[40%] h-[40%] pl-3"
          />
        )}

        <div className="bagiankiri">
          <h3 className="text-white font-bold ">{book.volumeInfo.title}</h3>
          <p className="text-gray-300 text-sm mb-2">
            {book.volumeInfo.description
              ? book.volumeInfo.description.length > 45
                ? book.volumeInfo.description.slice(0, 45) + "..."
                : book.volumeInfo.description
              : "No description available"}
          </p>
          <span className="text-white text-sm">{book.volumeInfo.authors}</span>
          <div className="flex gap-4 items-center mt-[1rem]">
            <div className="flex gap-2">
              <AiFillStar size={15} color="yellow" />
              <AiFillStar size={15} color="yellow" />
              <AiFillStar size={15} color="yellow" />
              <AiFillStar size={15} color="yellow" />
              <AiFillStar size={15} color="yellow" />
            </div>
            {book.volumeInfo.averageRating ? (
              <p className="text-gray-400 font-semibold">
                {book.volumeInfo.averageRating}
              </p>
            ) : (
              <p className="text-gray-400 font- text-sm">No rating</p>
            )}
          </div>
          <div>
            <ModalRec book={book} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
