import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleChangeEmail,
  handleChangeName,
  handleClickCreateAccount,
} from "./movieHomeSlice";
import {
  SignUpLoginButton,
  MovieHomeMainContainer,
  LoginSignUpContainer,
  WatchListLogo,
  LoginSignUpDiv,
  LoginSignUpFlagTrue,
  SignUpNameEmail,
  SignUpNameInput,
  SignUpEmailInput,
  SignUpNameEmailContainer,
  LoginContainer,
} from "./movieHomeStyling";

const MovieHomePage = () => {
  const [signUpFlag, setSignUpFlag] = useState(false);
  const [logInFlag, setLogInFlag] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myname = useSelector((state) => state.profile.name);
  const myemail = useSelector((state) => state.profile.email);

  const handleName = (e) => {
    dispatch(handleChangeName(e.target.value));
  };
  const handleEmail = (e) => {
    dispatch(handleChangeEmail(e.target.value));
  };

  const handleClickSignUpButton = () => {
    setSignUpFlag(true);
    setLogInFlag(false);
  };

  const handleClickLoginButton = () => {
    setLogInFlag(true);
    setSignUpFlag(false);
  };

  const handleClick = () => {
    if (myname && myemail) {
      dispatch(handleClickCreateAccount());
      navigate("/search_movie", { state: { name: myname } });
      return;
    }
    alert("Name and Email can not be blank");
  };

  const handleLoginVerification = () => {
    if (myemail) {
      const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
      const userVerification = registeredUser.map((item) => {
        if (item.email === myemail) {
          navigate("/search_movie", { state: { name: item.name } });
        }
      });
      return userVerification;
    }
    alert("Enter Registered Email Address");
  };

  return (
    <MovieHomeMainContainer>
      <LoginSignUpContainer>
        <LoginContainer>
          {signUpFlag ? (
            <LoginSignUpFlagTrue>
              <SignUpNameEmailContainer>
                <SignUpLoginButton onClick={handleClick}>
                  Create Account
                </SignUpLoginButton>
              </SignUpNameEmailContainer>
              <div>
                <SignUpNameEmail>
                  Name
                  <SignUpNameInput
                    type="text"
                    name="name"
                    onChange={(e) => handleName(e)}
                  />
                </SignUpNameEmail>
                <SignUpNameEmail>
                  Email ID
                  <SignUpEmailInput
                    type="text"
                    name="email"
                    onChange={(e) => handleEmail(e)}
                  />
                </SignUpNameEmail>
              </div>
            </LoginSignUpFlagTrue>
          ) : (
            <LoginSignUpDiv>
              <SignUpLoginButton onClick={handleClickSignUpButton}>
                SignUp
              </SignUpLoginButton>
            </LoginSignUpDiv>
          )}
        </LoginContainer>

        <WatchListLogo>
          <h1>Watchlists</h1>
        </WatchListLogo>
        <LoginContainer>
          {logInFlag ? (
            <LoginSignUpFlagTrue>
              <SignUpLoginButton onClick={handleLoginVerification}>
                Login
              </SignUpLoginButton>
              <SignUpNameEmail>
                Email ID
                <SignUpEmailInput
                  type="text"
                  onChange={(e) => handleEmail(e)}
                />
              </SignUpNameEmail>
            </LoginSignUpFlagTrue>
          ) : (
            <LoginSignUpDiv>
              <SignUpLoginButton onClick={handleClickLoginButton}>
                Login
              </SignUpLoginButton>
            </LoginSignUpDiv>
          )}
        </LoginContainer>
      </LoginSignUpContainer>
    </MovieHomeMainContainer>
  );
};
export default MovieHomePage;
