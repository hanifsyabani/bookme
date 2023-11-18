import Navbar from "./components/Navbar";
import Discover from "./pages/Discover";
import Jumbotron from "./pages/Jumbotron";
import Recomendation from "./pages/Recomendation";
import ListBooks from "./pages/ListBooks";
import React, { useState } from "react";
import Footer from "./pages/Footer";



function App() {
  const api_url = "https://www.googleapis.com/books/v1/volumes";
  const apiKey = "AIzaSyDIanSCTjYO9kl_sIkwHKEL7tDGsEu7qts";
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="container font-[poppins] bg-primary ">
        <Navbar />
        <Jumbotron />
        <Discover api_url={api_url} apiKey={apiKey} />
        <Recomendation
          api_url={api_url}
          apiKey={apiKey}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <ListBooks
          api_url={api_url}
          apiKey={apiKey}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <Footer/>
      </div>
    </>
  );
}

export default App;
