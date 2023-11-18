

import { AiFillStar } from "react-icons/ai";
import ModalRec from "../components/ModalRec";


function CardSearch({ books }) {
  console.log(books);
  return (
    <>
      <div className="lg:gap-8 gap-2 px-[5%] flex justify-center flex-wrap">
        {books.map((book) => (
          <div
            className="bg-secondary w-[10rem] lg:w-[30rem] lg:h-[20rem] p-3 lg:flex lg:justify-center lg:items-center rounded-md gap-7 shadow-md shadow-purple-300 cursor-pointer hover:shadow-purple-500 mt-6"
            key={book.id}
          >
            {book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.thumbnail && (
                <img
                  src={
                    book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail
                  }
                  alt=""
                  className="object-contain lg:w-1/2 lg:h-full w-[100%] h-[40%] "
                />
              )}

            <div className="lg:w-1/2 lg:text-left text-center mt-7 lg:mt-0">
              <h3 className="text-white font-bold ">
                {book.volumeInfo.title
                  ? book.volumeInfo.title.length > 20
                    ? book.volumeInfo.title.slice(0, 20) + "..."
                    : book.volumeInfo.title
                  : "No title available"}
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                {book.volumeInfo.description
                  ? book.volumeInfo.description.length > 45
                    ? book.volumeInfo.description.slice(0, 45) + "..."
                    : book.volumeInfo.description
                  : "No description available"}
              </p>
              <span className="text-white text-sm">
                {book.volumeInfo.authors}
              </span>
              <div className="flex gap-4 items-center mt-[1rem]">
                <div className="flex gap-2">
                  <AiFillStar size={10} color="yellow" />
                  <AiFillStar size={10} color="yellow" />
                  <AiFillStar size={10} color="yellow" />
                  <AiFillStar size={10} color="yellow" />
                  <AiFillStar size={10} color="yellow" />
                </div>
                {book.volumeInfo.averageRating ? (
                  <p className="text-gray-400 font-semibold">
                    {book.volumeInfo.averageRating}
                  </p>
                ) : (
                  <p className="text-gray-400 font- text-xs">No rating</p>
                )}
              </div>
              <div>
                <ModalRec book={book} />
              </div>
            </div>
          </div>
          // <Card
          //   direction={{ base: "column", sm: "row" }}
          //   overflow="hidden"
          //   variant="outline"
          //   width={{lg:"30rem", sm:'10rem'}}
          //   height={'100%'}
          //   margin="auto"
          //   marginTop="2rem"
          //   key={book.id}
          //   bg="#2d3669"
          //   shadow="md"
          //   p="1rem"
          //   cursor="pointer"
          // >
          //   {book.volumeInfo.imageLinks &&
          //     book.volumeInfo.imageLinks.thumbnail && (
          //       <img
          //         src={
          //           book.volumeInfo.imageLinks &&
          //           book.volumeInfo.imageLinks.thumbnail
          //         }
          //         alt="Book Images"
          //         className="w-[50%] h-[50%] mx-auto"
          //       />
          //     )}

          //   <Stack>
          //     <CardBody>
          //       <Heading size="sm" color="white">
          //         {book.volumeInfo.title
          //           ? book.volumeInfo.title.length > 30
          //             ? book.volumeInfo.title.slice(0, 30) + "..."
          //             : book.volumeInfo.title
          //           : "No Title"}
          //       </Heading>

          //       <p className="text-gray-300 text-xs mt-2">
          //         {book.volumeInfo.description
          //           ? book.volumeInfo.description.length > 45
          //             ? book.volumeInfo.description.slice(0, 45) + "..."
          //             : book.volumeInfo.description
          //           : "No description available"}
          //       </p>
          //       <Text
          //         fontSize=".8rem"
          //         color="white"
          //         fontWeight="semibold"
          //         mt="1rem"
          //       >
          //         {book.volumeInfo.authors}
          //       </Text>
          //     </CardBody>

          //     <div className="flex gap-4 items-center ml-6">
          //       <div className="flex gap-2">
          //         <AiFillStar size={10} color="yellow" />
          //         <AiFillStar size={15} color="yellow" />
          //         <AiFillStar size={15} color="yellow" />
          //         <AiFillStar size={15} color="yellow" />
          //         <AiFillStar size={15} color="yellow" />
          //       </div>
          //       {book.volumeInfo.averageRating ? (
          //         <p className="text-gray-400 font-semibold">
          //           {book.volumeInfo.averageRating}
          //         </p>
          //       ) : (
          //         <p className="text-gray-400  text-sm">No rating</p>
          //       )}
          //     </div>
          //     <div className="ml-6">
          //       <ModalRec book={book} />
          //     </div>
          //   </Stack>
          // </Card>
        ))}
      </div>
    </>
  );
}

export default CardSearch;
