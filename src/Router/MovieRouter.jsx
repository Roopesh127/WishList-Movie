import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieSearch from "../Components/Movie Search/MovieSearch";
import MovieHomePage from "../Components/Movie Home/MovieHome";
import AddMovieToWihlist from "../Components/Movie Wishlist/MovieWishlist";
const Routing = () => {
  return (
    <BrowserRouter basename="/movie-wishlists/">
      <Routes>
        <Route path="/" Component={MovieHomePage} />
        <Route path="/search_movie" Component={MovieSearch} />
        <Route path="/wishlist" Component={AddMovieToWihlist} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
