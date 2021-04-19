import {Box} from "@chakra-ui/core";
import styled from "styled-components";
import {
    headerTextColor,
    lightBlue,
    textColor,
} from "./colors";

const Header = styled.h1`
  color: ${headerTextColor};
  font-weight: 900;
  height: auto;
`;

export const Header1 = styled(Header)`
  color: ${headerTextColor};
  text-transform: capitalize;
  font-size: 25px;
  margin: 5px 0;
`;

export const Text = styled.p`
  color: ${textColor};
  cursor: pointer;
  font-size: 18px;
`;

export const Main = styled.div`
  background-color: #f9fbfd;
  padding: 18px 15px;
  width: auto;
  position: relative;
  overflow: hidden;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  z-index: 1;
  margin-left: 240px;
`;

export const Wrapper = styled.div``;

export const Form = styled.form`
  width: 100%;
`;

export const MonthlyCard = styled(Wrapper)`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  margin: 10px 0;
  align-items: center;
  height: 80px;
`;

export const CardWrapper = styled(Wrapper)`
  display: flex;
  justify-content: flex-start;
`;

export const LoginWrapper = styled(Wrapper)`
  background-color: ${lightBlue};
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled(Box)`
  width: 450px;
  height: 500px;
  padding: 20px 30px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const InputWrapper = styled(Wrapper)`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;

  &:focus {
    border: 2px solid dodgerblue;
  }
`;
