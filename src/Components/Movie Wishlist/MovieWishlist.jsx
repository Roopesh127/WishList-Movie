import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  RightSideBarMainContainer,
  RightSideBarMovieSearch,
  SearchedMovieCard,
  UserName,
  UserProfile,
  WatchListLogoLeftSideBar,
} from "../Movie Search/movieSearchStyling";
import account_circle_black from "../../assets/svg/account_circle_black.svg";
import more_horiz_black from "../../assets/svg/more_horiz_black.svg";

const AddMovieToWihlist = () => {
  const [wishlistData, setWishlistData] = useState([]);
  const [logout, setLogout] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setWishlistData(JSON.parse(localStorage.getItem("registeredUser")));
  }, []);

  const switchToHome = () => {
    const userName = location.state.name;
    navigate("/search_movie", { state: { name: userName } });
  };
  const showLogoutButton = () => {
    setLogout(!logout);
  };

  const handleClickLogout = () => {
    navigate("/");
  };
  return (
    <MovieSearchMainContainer>
      <LeftSideBarMainContainer>
        <LeftSideBarUpperContainer>
          <WatchListLogoLeftSideBar>
            <h1>Watchlists</h1>
          </WatchListLogoLeftSideBar>
          <LeftSideBarSearch type="text" />
          <LeftSideBarMyLists onClick={switchToHome}>
            <p>Home</p>
          </LeftSideBarMyLists>

          <LeftSideBarHome>My Lists</LeftSideBarHome>
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
        <RightSideBarMovieSearch>
          <SearchedMovieCard>
            {wishlistData.map((item) => {
              if (item.name === location.state.name) {
                const { wishlist } = item;
                return wishlist.map((movieItem, movieIndex) => {
                  const { Title, Year, Plot, Poster, Ratings } = movieItem;

                  return (
                    <MovieCard key={movieIndex}>
                      <img
                        src={Poster}
                        alt=""
                        style={{ height: "230px", width: "150px" }}
                      />
                      {Ratings.map((rating, ratingIndex) => {
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
                      <MovieTitleInMovieCard>{Title}</MovieTitleInMovieCard>
                      <MovieYearInMovieCard>{Year}</MovieYearInMovieCard>
                    </MovieCard>
                  );
                });
              }
            })}
          </SearchedMovieCard>
        </RightSideBarMovieSearch>
      </RightSideBarMainContainer>
    </MovieSearchMainContainer>
  );
};
export default AddMovieToWihlist;
