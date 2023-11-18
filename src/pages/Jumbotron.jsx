import img1 from "../assets/gambar1.svg";

function Jumbotron() {
  return (
    <>
      <div className="lg:flex lg:justify-center lg:items-center gap-44 lg:mt-4 rounded-lg shadow-xl lg:w-[70%] mx-auto w-full pt-10 lg:pt-0 text-center">
        <div>
          <h1 className="text-2xl text-white lg:text-4xl font-bold">Welcome to bookMe</h1>
          <p className="text-gray-400 mt-3">Find your favorite books</p>

          <a href="#wishlist">
            <button className="bg-secondary text-white p-2 rounded-md mt-5 text-sm hover:bg-white hover:text-[#1C213E] ease-in duration-150">
              Browse Latest
            </button>
          </a>
        </div>
        <div >
          <img src={img1} alt="" width={200} height={200} className="mx-auto"/>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
