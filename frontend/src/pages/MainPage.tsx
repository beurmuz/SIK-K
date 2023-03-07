import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import backgroundImageUrl from "../assets/images/background.jpg";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <MainWrapper>
      <MainBox_01>
        <Header />
        <MainContent_01>
          <PageName>SIK-K</PageName>
          <ArtistID>@younghotyellow94</ArtistID>
        </MainContent_01>
        <Footer />
      </MainBox_01>
      <MainBox_02>
        <MainContent_02>
          <PageName>Who is he?</PageName>
          <MainArticles>
            <IntroArticle>
              In 2015, He debuted with the song “My Man”. In 2015, He debuted
              with the song “My Man”.
            </IntroArticle>
            <IntroArticle>
              In 2015, He debuted with the song “My Man”. In 2015, He debuted
              with the song “My Man”.
            </IntroArticle>
            <IntroArticle>
              In 2015, He debuted with the song “My Man”. In 2015, He debuted
              with the song “My Man”.
            </IntroArticle>
          </MainArticles>
        </MainContent_02>
      </MainBox_02>
      {/* <MainBox_03></MainBox_03>
      <MainBox_04></MainBox_04> */}
    </MainWrapper>
  );
};

export default MainPage;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const MainBox_01 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: url(${backgroundImageUrl}) no-repeat center;
  background-size: cover;
  color: white;
  padding: 70px;
`;

const MainContent_01 = styled.div`
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

const MainBox_02 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 80px 70px;
`;

const MainContent_02 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  // height: 60vh;
`;

const MainArticles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid gray;
`;

const IntroArticle = styled.article`
  width: 30%;
  padding: 30px 0px;
`;

// const MainBox_03 = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100vh;
//   background-color: black;
//   color: white;
//   padding: 80px 70px;
//   border-top: solid 1px white;
// `;

// const MainBox_04 = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100vh;
//   background-color: black;
//   color: white;
//   padding: 80px 70px;
//   border-top: solid 1px white;
// `;
