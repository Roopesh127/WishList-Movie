import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AccountCircle,
  LeftSideBarHome,
  LeftSideBarMainContainer,
  LeftSideBarMyLists,
  LeftSideBarSearch,
  LeftSideBarUpperContainer,
  LogoutAndUserProfileContainer,
  LogoutButton,
  MovieCard,
  MovieRatingInMovieCard,
  MovieSearchMainContainer,
  MovieTitleInMovieCard,
  MovieYearInMovieCard,
  RightSideBarHeading,
  RightSideBarHeadingContainer,
  RightSideBarMainContainer,
  RightSideBarMovieSearch,
  RightSideBarMovieSearchButton,
  RightSideBarMovieSearchInput,
  SearchedMovieCard,
  UserName,
  UserProfile,
  WatchListLogoLeftSideBar,
} from "./movieSearchStyling";

import MySvg from "../../assets/svg/MySvg.svg";
import account_circle_black from "../../assets/svg/account_circle_black.svg";
import more_horiz_black from "../../assets/svg/more_horiz_black.svg";

const MovieSearch = () => {
  const [movieName, setMovieName] = useState("");
  const [movieDetails, setMovieDetails] = useState([]);
  const [showPlot, setShowPlot] = useState(false);
  const [logout, setLogout] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const searchedMovie = async (movieName) => {
    try {
      const movieURL = await fetch(
        `https://omdbapi.com/?apikey=e514031d&t=${movieName}`
      );
      let movieURLResult = await movieURL.json();
      if (!movieURLResult.hasOwnProperty("Error")) {
        movieURLResult = { ...movieURLResult, opened: false, clicked: "" };
        setMovieDetails([...movieDetails, movieURLResult]);
        setShowPlot(false);
        return;
      }
      alert("No Movie Found");
    } catch (error) {
      console.log("Error", error);
    }
  };

  const addToWishlist = (movieTitle) => {
    const getUserFromStorage = JSON.parse(
      localStorage.getItem("registeredUser")
    );
    movieDetails.map((movieItem) => {
      if (movieItem.Title === movieTitle) {
        const user = getUserFromStorage.map((item) => {
          item.wishlist = [...item.wishlist, movieItem];

          return item;
        });
        const updateUserWishlist = JSON.stringify(user);
        localStorage.setItem("registeredUser", updateUserWishlist);
      }
    });
  };
  const handleClickLogout = () => {
    navigate("/");
  };

  const openWishlist = () => {
    const userName = location.state.name;
    navigate("/wishlist", { state: { name: userName } });
  };

  const handleShowPlot = (posterClickedMovie) => {
    let plotResult = [];
    plotResult = movieDetails.map((item) => {
      const { Title, opened } = item;
      if (Title === posterClickedMovie) {
        if (item.clicked === "once") {
          item = { ...item, opened: false, clicked: "twice" };
        } else if (!item.clicked || item.clicked == "twice") {
          item = { ...item, opened: true, clicked: "once" };
        }
      } else {
        item = { ...item, opened: false };
      }
      return item;
    });
    setMovieDetails(plotResult);
  };

  const showLogoutButton = () => {
    setLogout(!logout);
  };

  return (
    <MovieSearchMainContainer>
      <LeftSideBarMainContainer>
        <LeftSideBarUpperContainer>
          <WatchListLogoLeftSideBar>
            <h1>Watchlists</h1>
          </WatchListLogoLeftSideBar>
          <LeftSideBarSearch type="text" />
          <LeftSideBarHome>
            <p>Home</p>
          </LeftSideBarHome>

          <LeftSideBarMyLists onClick={openWishlist}>
            My Lists
          </LeftSideBarMyLists>
        </LeftSideBarUpperContainer>

        <UserName>
          <LogoutAndUserProfileContainer>
            <div>
              {logout ? (
                <LogoutButton onClick={handleClickLogout}>Logout</LogoutButton>
              ) : (
                ""
              )}
            </div>
            <UserProfile>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <AccountCircle src={account_circle_black} alt="" />
                <p style={{ margin: 0, fontSize: 14, fontWeight: 400 }}>
                  {location.state.name}
                </p>
              </div>

              <img
                onClick={showLogoutButton}
                src={more_horiz_black}
                alt=""
                style={{ width: "25px" }}
              />
            </UserProfile>
          </LogoutAndUserProfileContainer>
        </UserName>
      </LeftSideBarMainContainer>

      <RightSideBarMainContainer>
        <RightSideBarHeadingContainer>
          <RightSideBarHeading>
            <p
              style={{
                fontSize: "35px",
                fontWeight: 100,
                display: "flex",
                alignItems: "center",
                gap: 6,
                margin: 0,
              }}
            >
              Welcome to <p style={{ color: "#ef4040" }}>Watchlists</p>
            </p>
            <p style={{ margin: "0px 0px" }}>
              Browse movies, add them to watchlists and them with friends
            </p>
            <p style={{ display: "flex" }}>
              Just click the <img src={MySvg} alt="" style={{ width: 35 }} /> to
              add movie, the poster to see more details
            </p>
          </RightSideBarHeading>

          <RightSideBarMovieSearch>
            <RightSideBarMovieSearchInput
              type="search"
              name=""
              id=""
              onChange={(e) => setMovieName(e.target.value)}
            />
            <RightSideBarMovieSearchButton
              onClick={() => searchedMovie(movieName)}
            >
              Search
            </RightSideBarMovieSearchButton>
          </RightSideBarMovieSearch>
        </RightSideBarHeadingContainer>
        <SearchedMovieCard>
          {movieDetails.map((item, index) => {
            return (
              <div key={index}>
                {item.hasOwnProperty("Error") ? (
                  ""
                ) : item ? (
                  <MovieCard>
                    <img
                      src={MySvg}
                      alt=""
                      onClick={() => addToWishlist(item.Title)}
                      style={{
                        height: "39px",
                        width: "38px",
                        position: "absolute",
                        right: 0,
                        backgroundColor: "#ffffff66",
                      }}
                      title="Add to Wishlist"
                    />
                    <img
                      onClick={() => handleShowPlot(item.Title)}
                      src={item.Poster}
                      alt=""
                      style={{
                        height: "200px",
                        width: "155px",
                        borderRadius: "8px",
                      }}
                    />
                    {item.Ratings.map((rating, ratingIndex) => {
                      if (rating.Source === "Metacritic") {
                        return (
                          <div key={ratingIndex}>
                            <MovieRatingInMovieCard>
                              {rating.Value}
                            </MovieRatingInMovieCard>
                          </div>
                        );
                      }
                    })}
                    <MovieTitleInMovieCard>{item.Title}</MovieTitleInMovieCard>
                    <MovieYearInMovieCard>{`(${item.Year})`}</MovieYearInMovieCard>
                    {item.opened ? item.Plot : ""}
                  </MovieCard>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </SearchedMovieCard>
      </RightSideBarMainContainer>
    </MovieSearchMainContainer>
  );
};
export default MovieSearch;
