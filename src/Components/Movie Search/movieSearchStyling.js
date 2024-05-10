import styled from "styled-components";

export const MovieSearchMainContainer = styled.div`
  display: flex;
  width: 96vw;
  height: 99vh;
`;

export const LeftSideBarMainContainer = styled.div`
  box-sizing: border-box;
  height: 98vh;
  width: 19vw;
  display: flex;
  flex-direction: column;
`;

export const WatchListLogoLeftSideBar = styled.div`
  font-size: x-large;
  font-weight: 800;
  color: #ef4040;
  margin: -24px 2px;
`;

export const LeftSideBarSearch = styled.input`
  border: 2px solid silver;
  height: 30px;
  width: 15vw;
  border-radius: 7px;
`;

export const LeftSideBarHome = styled.div`
  font-size: large;
  font-weight: 600;
  background-color: #ef4040;
  color: white;
  height: 40px;
  width: 15vw;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-radius: 7px;
`;
export const LeftSideBarMyLists = styled.div`
  font-size: large;
  font-weight: 600;
  color: black;
  height: 40px;
  width: 15vw;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-radius: 7px;
`;

export const UserName = styled.div`
  font-size: large;
  color: black;
  height: 50vh;
  display: flex;
  align-items: flex-end;
  border-radius: 7px;
  justify-content: center;
`;

export const LeftSideBarUpperContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const RightSideBarMainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 71vw;
  height: 94vh;
  padding-left: 45px;
  gap: 18px;
  margin-top: 25px;
  border-left: 2px solid silver;
`;

export const RightSideBarHeading = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ef4040;
  padding: 0px 40px 30px 40px;
  border-radius: 10px;
  width: 66.7vw;
`;

export const RightSideBarMovieSearch = styled.div`
  display: flex;
  align-items: center;
`;

export const RightSideBarHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 72vw;
`;

export const RightSideBarMovieSearchInput = styled.input`
    width: 70vw;
    height: 2em;
    font-size: large;
    padding-left: 40px;
    border: 2px solid silver;
    border-radius: 5px;
}`;

export const RightSideBarMovieSearchButton = styled.button`
  height: 38px;
  border: none;
  border-radius: 5px;
  background-color: #ef4040;
  color: white;
  width: 91px;
`;
export const MovieCard = styled.div`
  box-shadow: 0px 6px 5px 5px #c0c0c070;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  width: 10.1vw;
`;
export const SearchedMovieCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5em;
  flex-wrap: wrap;
`;

export const MovieRatingInMovieCard = styled.p`
  margin: 0px;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  font-size: 12px;
  font-weight: bold;
`;
export const MovieTitleInMovieCard = styled.p`
  font-weight: bold;
  display: flex;
  padding-left: 15px;
  margin-top: 5px;
  margin-bottom: 0px;
`;

export const MovieYearInMovieCard = styled.p`
  padding-left: 15px;
  font-size: small;
  margin-top: 0px;
`;
export const UserProfile = styled.div`
font-size: large;
    font-weight: 600;
    height: 40px;
    width: 15vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 7px;
    border: 1px solid silver;
}`;

export const AccountCircle = styled.img`
  width: 30px;
  background-color: #bcbcbca1;
  border-radius: 50%;
`;
// export const LogoutButton = styled.button`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
// `;

export const LogoutAndUserProfileContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const LogoutButton = styled.button`
border: none;
    width: 91px;
    height: 38px;
    background-color: #5c5454ad;
    color: white;
    font-size: 15px;
    border-radius: 10px;
}`;
