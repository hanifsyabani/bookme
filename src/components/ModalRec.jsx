import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function SizeExample({ book }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("full");

  const handleSizeClick = () => {
    onOpen();
  };

  return (
    <>
      <Button onClick={() => handleSizeClick()} mt={4}>
        Detail
      </Button>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bg={"#2d3669"}>
          <div className="flex justify-between px-[5%] py-8">
            <h1 className="text-white font-bold text-xl">Detail Books</h1>
            <Button
              onClick={onClose}
              bg={"red"}
              color={"white"}
              fontWeight={"bold"}
            >
              Close
            </Button>
          </div>
          <div className="lg:flex lg:justify-center lg:items-center gap-20 px-[5%] py-8 w-full text-center lg:text-left">
            {book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.thumbnail && (
                <div className="lg:w-[30%]">
                  <img
                    src={
                      book.volumeInfo.imageLinks &&
                      book.volumeInfo.imageLinks.thumbnail
                    }
                    alt=""
                    className="lg:w-full w-[60%] mx-auto"
                  />
                </div>
              )}
            <div className="lg:w-[60%] mt-10 lg:mt-0">
              <h1 className="font-bold text-xl text-white">
                {book.volumeInfo.title}
              </h1>
              <h5 className="fontsemibold text-white mt-3">Description :</h5>
              <p className="text-gray-400 ">{book.volumeInfo.description}</p>
              <div className="mt-4 text-white">
                <p>Authors : {book.volumeInfo.authors}</p>
                <p>Categories : {book.volumeInfo.categories}</p>
                <p>Languange : {book.volumeInfo.language}</p>
                <p>Published Date : {book.volumeInfo.publishedDate}</p>
                <p>Page Count : {book.volumeInfo.pageCount} page</p>
              </div>

              <a
                href={book.volumeInfo.infoLink}
                className="bg-white p-2 flex items-center justify-center w-20 font-semibold text-[#1C213E] rounded-md hover:bg-primary hover:text-white ease-in duration-100 mt-8 mx-auto lg:mx-0"
              >
                Info Link
              </a>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
