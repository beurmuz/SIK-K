import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import backgroundImageUrl from "../assets/images/background.jpg";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <MainWrapper>
      <Header />
      <PageName>SIK-K</PageName>
      <ArtistID>@younghotyellow94</ArtistID>
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
