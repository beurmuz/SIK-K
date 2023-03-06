import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import backgroundImageUrl from "../assets/images/background.jpg";

const MainPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div>SIK-K</div>
      </Wrapper>
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImageUrl}) no-repeat center;
  background-size: cover;
  color: white;
`;
