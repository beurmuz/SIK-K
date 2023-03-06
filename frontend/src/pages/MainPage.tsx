import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import backgroundImageUrl from "../assets/images/background.jpg";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <MainWrapper>
      <Header />
      <MainContentWrapper>
        <PageName>SIK-K</PageName>
        <ArtistID>@younghotyellow94</ArtistID>
      </MainContentWrapper>
      <Footer />
    </MainWrapper>
  );
};

export default MainPage;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImageUrl}) no-repeat center;
  background-size: cover;
  color: white;
  padding: 50px;
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 60vh;
`;

const PageName = styled.h1`
  font-size: 10rem;
  font-weight: 700;
  font-style: italic;
`;

const ArtistID = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
  color: gray;
`;
