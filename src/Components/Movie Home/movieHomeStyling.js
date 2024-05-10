import styled from "styled-components";
import background from "../../assets/image/background.jpg";
export const SignUpLoginButton = styled.button`
  border: none;
  background-color: #ef4040;
  color: white;
  font-weight: 500;
  font-size: 18px;
  padding: 8px 18px;
  border-radius: 15px;
  align-self: flex-end;
`;

export const MovieHomeMainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 98vw;
  background: url(${background}) no-repeat center center / cover;
  height: 100vh;
  width: 100vw;
`;
export const LoginSignUpContainer = styled.div`
  display: flex;
  width: 95vw;
  justify-content: space-between;
  margin-top: 15px;
`;

export const LoginSignUpDiv = styled.div`
  display: flex;

  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
`;
export const WatchListLogo = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
color:  #ef4040;
flex-basis:33%
}
`;
export const LoginSignUpFlagTrue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  box-sizing: border-box;
  height: 30vh;
  flex-basis: 33%;
`;
export const SignUpNameEmail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  height: 10vh;
`;
export const SignUpNameInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 20em;
  margin-left: 50px;
  border: 3px solid grey;
  border-radius: 8px;
  flex-wrap: wrap;
`;

export const SignUpEmailInput = styled.input`
  height: 30px;
  width: 20em;
  margin-left: 26px;
  border: 3px solid grey;
  border-radius: 8px;
  flex-wrap: wrap;
`;

export const SignUpNameEmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  align-items: center;
  color: white;
`;
