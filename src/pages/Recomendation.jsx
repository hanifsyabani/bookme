import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsBoxArrowRight } from "react-icons/bs";
import "swiper/css";
import CardRecomend from "../components/CardRecomend";

export default function Recomendation({
  api_url,
  apiKey,
  isLoading,
  setIsLoading,
}) {
  
  const [recomendation, setRecomendation] = useState([]);

  useEffect(() => {
    const recomBooks = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `${api_url}?q=fiction&orderBy=newest&key=${apiKey}&maxResults=10`
        );
        setRecomendation(res.data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    recomBooks();
  }, []);

  return (
    <div className="mt-10  px-[7%] py-[2rem]" id="recomendation">
      <h5 className=" font-bold text-gray-200">Recomendation for you</h5>
      {isLoading && (
        <div className="text-center">
          <Spinner className="mx-auto" size="md" color="purple.500" />
          <p className="text-gray-400 text-sm">Loading Data...</p>
        </div>
      )}
      {console.log(recomendation)}
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
      
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {recomendation.map((book) => (
          <SwiperSlide>
            <CardRecomend book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center gap-4 lg:mt-10">
        <p className="text-white text-center ">Swipe to see more</p>
        <BsBoxArrowRight size={20} color="white" />
      </div>
    </div>
  );
}
